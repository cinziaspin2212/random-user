import { Component } from 'react';
import './InfoUser.css';

class InfoUser extends Component {
    changeInfoHandler =()=>{
        /* console.log('tt',this.props.infoEvent.whoEvent);*/
        const whoEv = this.props.infoEvent.whoEvent;
        switch (whoEv) {
            case 'User':
                return this.props.infoUserDet.fullName;
            case 'Email':
                    return this.props.infoUserDet.email;
            case 'Birthday':
                return this.props.infoUserDet.birthday;
            case 'Address':
                return this.props.infoUserDet.address;
            case 'Phone':
                return this.props.infoUserDet.telephone;
            case 'Password':
                return this.props.infoUserDet.password;
            default:
                return '';        
        }
      }
      
     
       
    
    render() {

        console.log('infoUserDet-infouser',this.props);
        return (
            <div className='info-user'>
                <div className='info-user-descr'>
                    <label id='descrizione'>{this.props.infoEvent.whoEvent}</label>
                </div>
                <div className='info-user-dett'>
                   <label id='info'>{this.changeInfoHandler()}</label>
                </div>
            </div>
        )
    }
}

export default InfoUser;