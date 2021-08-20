import { Component } from "react";
import './PanelUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelopeSquare, faBirthdayCake, faHouseUser, faPhoneSquare, faLock } from '@fortawesome/free-solid-svg-icons'


class PanelUser extends Component {
    render() {
        return (<div className='panel-user'>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faEnvelopeSquare} />
            <FontAwesomeIcon icon={faBirthdayCake} />
            <FontAwesomeIcon icon={faHouseUser} />
            <FontAwesomeIcon icon={faPhoneSquare} />
            <FontAwesomeIcon icon={faLock} />
        </div>)
    }
}

export default PanelUser;