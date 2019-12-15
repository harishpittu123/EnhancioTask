import { observable, action, computed } from "mobx";
import API from "../api/api";

class FieldsStore {

  GET_ENDPOINT = "readFields";
  SAVE_ENDPOINT = "saveFields";

  @observable fields = {};
  @observable removedFields = {};

  leftFields = [];
  rightFields = [];

  constructor() {
    // initialize loading fields from server
    this.loadFields();
  }


  /**
   * split all fields to 2 lanes and update fields with new position and laneIds
   * @param {fields to populate} data 
   */
  splitFields(data) {
    const indexToSplit = Math.round(data.length / 2);
    let lFields = [];
    let rFields = [];

    // split and update position & laneId
    let position = 0;
    for (let i in data) {
      data[i].id = data[i].order;
      if (i < indexToSplit) {
        data[i].position = i;
        data[i].laneId = 1;
        lFields.push(data[i])
      } else {
        data[i].position = position;
        data[i].laneId = 2;
        rFields.push(data[i])
        position++;
      }
    }

    this.leftFields = lFields;
    this.rightFields = rFields;
    this.leftLane = { id: 1, cards: this.leftFields }
    this.rightLane = { id: 2, cards: this.rightFields }
    this.fields = { lanes: [this.leftLane, this.rightLane] }
  }

  @computed get totalFields() {
    return this.fields;
  }

  @computed get totalRemovedFields() {
    return Object.values(this.removedFields);
  }

  @action
  onCardsSwapped({ fromPosition, fromLaneId }, { toPosition, toLaneId }) {

    // get swapped field from lanes
    let field = fromLaneId === 1 ? this.leftFields[fromPosition] : this.rightFields[fromPosition]

    // delete swapped field from lane
    fromLaneId === 1 ? this.leftFields.splice(fromPosition, 1) : this.rightFields.splice(fromPosition, 1)

    // swap field from one position to another position
    toLaneId === 1 ? this.leftFields.splice(toPosition, 0, field) : this.rightFields.splice(toPosition, 0, field)

    // merge left and right lanes for re-ordring and split them 
    let allFields = this.leftFields.concat(this.rightFields);
    this.splitFields(allFields)

  }

  @action
  removeFields(field) {

    // get position and laneId from field
    const { position, laneId } = field;

    // remove field from lanes
    laneId === 1 ? this.leftFields.splice(position, 1) : this.rightFields.splice(position, 1)

    // merge left and right lanes for re-ordring and split them 
    let allFields = this.leftFields.concat(this.rightFields);
    this.splitFields(allFields)

    // add field to bin
    this.removedFields[field.id] = field;

  };

  @action
  onUndoFields(field) {

    // add field to right lane
    this.rightFields.push(field)

    // merge left and right lanes for re-ordring and split them 
    let allFields = this.leftFields.concat(this.rightFields);
    this.splitFields(allFields)

    // delete field form bin
    delete this.removedFields[field.id];
  };

  /**
   * load fields from server
   */
  loadFields() {
    API.get(this.GET_ENDPOINT)
      .then(res => {
        const data = res.data;
        for (let i in data) {
          data[i].id = data[i].order;
        }
        this.splitFields(data)
      }).catch(function (error) {
        console.log(error);
      });
  }


  /**
   * save fields to server
   */
  saveFields() {

    const updatedFields = this.leftFields.concat(this.rightFields);

    API.post(this.SAVE_ENDPOINT, updatedFields)
      .then(function (response) {
        alert('Changes saved successfully')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

const singleton = new FieldsStore();
export default singleton;