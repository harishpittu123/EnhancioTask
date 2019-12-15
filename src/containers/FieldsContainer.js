import React, { Component } from "react";
import { EachFieldItem } from "../components/EachFieldItem";
import { ActionsFooter } from "../components/ActionsFooter";
import { BinComponent } from "../components/BinComponent";
import { inject, observer } from "mobx-react";
import Board, { addLane } from '@lourenci/react-kanban'
import styled from 'styled-components';

@inject('FieldsStore')
@observer
export default class FieldsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      binFolder: false
    }

    this.FieldsStore = props.FieldsStore;
  }

  // to remove field from list 
  onRemoveFields = (field) => {
    this.FieldsStore.removeFields(field);
  }

  // to undo field from bin folder
  onUndoFields = (field) => {
    this.FieldsStore.onUndoFields(field)
  }

  // on Bin folder click
  onBinFolder = () => {
    this.setState({
      binFolder: true
    })
  }

  // on saving fields
  onSave = () => {
    this.FieldsStore.saveFields();
  }

  render() {

    const { binFolder } = this.state;
    const { totalFields, totalRemovedFields } = this.FieldsStore;
    const visible = totalRemovedFields.length > 0 && binFolder;

    return (
      <MainContainer>

        {/* To show field lanes */}
        {totalFields.lanes &&
          <Board
            allowRemoveCard
            onCardDragEnd={(source, destination) => {
              this.FieldsStore.onCardsSwapped(source, destination);
            }}
            renderCard={(content, cardBag) => (
              <EachFieldItem content={content} onRemoveFields={this.onRemoveFields} isBinFolder={false} />
            )}

            renderLaneHeader={() => null}
          >{totalFields}</Board>}

        {/* To show bin dialog */}
        <BinComponent visible={visible} fields={totalRemovedFields} onUndoFields={this.onUndoFields} onClose={() => this.setState({ binFolder: false })} />

        {/* Save and Bin action buttons */}
        <ActionsFooter onBinFolder={this.onBinFolder} count={totalRemovedFields.length} onSave={this.onSave} />
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
          
    display : flex;
    justify-content: space-around;
       
    .sc-dnqmqq{
        background : white;
    }
     
`;