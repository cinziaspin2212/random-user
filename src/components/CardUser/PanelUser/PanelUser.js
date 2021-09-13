import { Component } from "react";
import "./PanelUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelopeSquare,
  faBirthdayCake,
  faHouseUser,
  faPhoneSquare,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

// class PanelUser extends Component
const PanelUser = (props) => {
  // render() {
  console.log("props: ", props);
  return (
    <div className="panel-user">
      <button
        className="button"
        id="User"
        onMouseEnter={(e) => props.envenHover(e)}
        data-title="User"
        /* onMouseLeave={(e) => this.props.evenLeave(e)}*/
      >
        <FontAwesomeIcon icon={faUser} />
      </button>

      <button
        className="button"
        id="Email"
        onMouseEnter={(e) => props.envenHover(e)}
        /* onMouseLeave={(e) => this.props.evenLeave(e)}*/
        data-title="Email"
      >
        <FontAwesomeIcon icon={faEnvelopeSquare} />
      </button>

      <button
        className="button"
        id="Birthday"
        onMouseEnter={(e) => props.envenHover(e)}
        /* onMouseLeave={(e) => this.props.evenLeave(e)}*/
        data-title="Birthday"
      >
        <FontAwesomeIcon icon={faBirthdayCake} />
      </button>

      <button
        className="button"
        id="Address"
        onMouseEnter={(e) => props.envenHover(e)}
        /*   onMouseLeave={(e) => this.props.evenLeave(e)}*/
        data-title="Address"
      >
        <FontAwesomeIcon icon={faHouseUser} />
      </button>

      <button
        className="button"
        id="Phone"
        onMouseEnter={(e) => props.envenHover(e)}
        /*  onMouseLeave={(e) => this.props.evenLeave(e)}*/
        data-title="Phone"
      >
        <FontAwesomeIcon icon={faPhoneSquare} />
      </button>

      <button
        className="button"
        id="Password"
        onMouseEnter={(e) => props.envenHover(e)}
        /* onMouseLeave={(e) => this.props.evenLeave(e)}*/
        data-title="Password"
      >
        <FontAwesomeIcon icon={faLock} />
      </button>
    </div>
  );
};
// }

export default PanelUser;
