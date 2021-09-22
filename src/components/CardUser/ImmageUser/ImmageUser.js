import { Component, useContext } from "react";
import { ImageContext } from "../../../App";
import "./ImmageUser.css";
// class ImmageUser extends Component
const ImmageUser = () => {
  const imageSource = useContext(ImageContext);
  // render() {
  return (
    <div className="image-container">
      <div className="image-user">
        {/* <img src={props.infoUserDet.immage} /> */}
        <img src={imageSource} alt="user" />
      </div>
    </div>
  );
};

// }

export default ImmageUser;
