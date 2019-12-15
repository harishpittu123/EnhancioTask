import React, { Component } from "react";
import { Provider } from "mobx-react";
import FieldsStore from "./stores/FieldsStore";
import FieldsContainer from "./containers/FieldsContainer";

export default class App1 extends Component {

  render() {
    return (
      <Provider FieldsStore={FieldsStore} >
        <FieldsContainer />
      </Provider>
    );
  }
}

