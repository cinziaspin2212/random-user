import { Component } from "react";
import './PanelUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelopeSquare, faBirthdayCake, faHouseUser, faPhoneSquare, faLock } from '@fortawesome/free-solid-svg-icons'


class PanelUser extends Component {
    render() {
        
        return (<div className='panel-user'>
            <button id='User'
                onMouseOver={(e) => this.props.envenHover(e)}
                onMouseLeave={(e) =>this.props.evenLeave(e)}
             >
                <FontAwesomeIcon icon={faUser} />
            </button>
            
            <button id='Email'
                onMouseOver={(e) => this.props.envenHover(e)}
                onMouseLeave={(e) =>this.props.evenLeave(e)}
            >
             <FontAwesomeIcon icon={faEnvelopeSquare} />
            </button>

            <button id='Birthday'
                onMouseOver={(e) => this.props.envenHover(e)}
                onMouseLeave={(e) =>this.props.evenLeave(e)}
            >
                <FontAwesomeIcon icon={faBirthdayCake} />
            </button>

            <button id='Address'
                onMouseOver={(e) => this.props.envenHover(e)}
                onMouseLeave={(e) =>this.props.evenLeave(e)}
            >
                 <FontAwesomeIcon icon={faHouseUser} />
            </button>

            <button id='Phone'
                onMouseOver={(e) => this.props.envenHover(e)}
                onMouseLeave={(e) =>this.props.evenLeave(e)}
            >
                <FontAwesomeIcon icon={faPhoneSquare} />
            </button>

            <button id='Password'
                onMouseOver={(e) => this.props.envenHover(e)}
                onMouseLeave={(e) =>this.props.evenLeave(e)}
                className={(this.props.envenHover.onMouseOver)?"button-hover-green":"button-leave-grey"}
            >
                 <FontAwesomeIcon icon={faLock} /> 
             </button>
        </div>)
    }
}

export default PanelUser;