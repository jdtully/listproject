import React from "react";
import { array } from "./testarray";

//{JSON.stringify(row, null, this.props.recno)}
export class GetData extends React.Component {
  render() {
    return JSON.stringify(array[this.props.recno]);
  }
}
