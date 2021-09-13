import { Component } from "react";
import "./InfoUser.css";

// class InfoUser extends Component
const InfoUser = (props) => {
  const changeInfoHandler = () => {
    /* console.log('tt',this.props.infoEvent.whoEvent);*/
    const whoEv = props.infoEvent.whoEvent;
    switch (whoEv) {
      case "User":
        return props.infoUserDet.fullName;
      case "Email":
        return props.infoUserDet.email;
      case "Birthday":
        return props.infoUserDet.birthday;
      case "Address":
        return props.infoUserDet.address;
      case "Phone":
        return props.infoUserDet.telephone;
      case "Password":
        return props.infoUserDet.password;
      default:
        return "";
    }
  };

  // render() {
  console.log("infoUserDet-infouser", props);
  return (
    <div className="info-user">
      <div className="info-user-descr">
        <label id="descrizione">{props.infoEvent.whoEvent}</label>
      </div>
      <div className="info-user-dett">
        <label id="info">{changeInfoHandler()}</label>
      </div>
    </div>
  );
};
// }

export default InfoUser;
