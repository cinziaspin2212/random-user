import { Component } from "react";
import "./CardUser.css";
import ImmageUser from "./ImmageUser/ImmageUser";
import InfoUser from "./InfoUser/InfoUser";
import PanelUser from "./PanelUser/PanelUser";
// class CardUser extends Component
const CardUser = (props) => {
  // render() {
  // console.log("infoUserDet", this.props);
  console.log("infoUserDet", props);
  return (
    <div className="card">
      {/* <ImmageUser infoUserDet={this.props.infoUserDet} /> */}
      <ImmageUser infoUserDet={props.infoUserDet} />
      {/* <InfoUser
          infoUserDet={this.props.infoUserDet}
          infoEvent={this.props.infoEvent}
        /> */}
      <InfoUser infoUserDet={props.infoUserDet} infoEvent={props.infoEvent} />
      {/* <PanelUser
          envenHover={(e) => {
            this.props.envenHover(e);
          }}
          evenLeave={(e) => {
            this.props.evenLeave(e);
          }}
        /> */}
      <PanelUser
        envenHover={(e) => {
          props.envenHover(e);
        }}
        evenLeave={(e) => {
          props.evenLeave(e);
        }}
      />
    </div>
  );
};
// }

export default CardUser;
