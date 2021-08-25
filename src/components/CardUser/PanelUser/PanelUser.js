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

class PanelUser extends Component {
  render() {
    console.log("props: ", this.props);
    return (
      <div className="panel-user">
        <button
          className="button"
          id="User"
          onMouseOver={(e) => this.props.envenHover(e)}
          data-title="User"
          //onMouseLeave={(e) => this.props.evenLeave(e)}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>

        <button
          className="button"
          id="Email"
          onMouseOver={(e) => this.props.envenHover(e)}
          onMouseLeave={(e) => this.props.evenLeave(e)}
          data-title="Email"
        >
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </button>

        <button
          className="button"
          id="Birthday"
          onMouseOver={(e) => this.props.envenHover(e)}
          onMouseLeave={(e) => this.props.evenLeave(e)}
          data-title="Birthday"
        >
          <FontAwesomeIcon icon={faBirthdayCake} />
        </button>

        <button
          className="button"
          id="Address"
          onMouseOver={(e) => this.props.envenHover(e)}
          onMouseLeave={(e) => this.props.evenLeave(e)}
          data-title="Address"
        >
          <FontAwesomeIcon icon={faHouseUser} />
        </button>

        <button
          className="button"
          id="Phone"
          onMouseOver={(e) => this.props.envenHover(e)}
          onMouseLeave={(e) => this.props.evenLeave(e)}
          data-title="Phone"
        >
          <FontAwesomeIcon icon={faPhoneSquare} />
        </button>

        <button
          className="button"
          id="Password"
          onMouseOver={(e) => this.props.envenHover(e)}
          onMouseLeave={(e) => this.props.evenLeave(e)}
          data-title="Password"
          // className={
          //   this.props.envenHover.onMouseOver
          //     ? "button-hover-green"
          //     : "button-leave-grey"
          // }
        >
          <FontAwesomeIcon icon={faLock} />
        </button>
      </div>
    );
  }
}

export default PanelUser;
