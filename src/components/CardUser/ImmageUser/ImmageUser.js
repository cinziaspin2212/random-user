import { Component } from "react";
import "./ImmageUser.css";
// class ImmageUser extends Component
const ImmageUser = (props) => {
  // render() {
  console.log("image", props.infoUserDet.immage);
  return (
    <div className="image-container">
      <div className="image-user">
        <img src={props.infoUserDet.immage} />
      </div>
    </div>
  );
};

// }

export default ImmageUser;
