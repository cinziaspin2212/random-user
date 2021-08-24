import { Component } from "react";
import "./CardUser.css";
import ImmageUser from "./ImmageUser/ImmageUser";
import InfoUser from "./InfoUser/InfoUser";
import PanelUser from "./PanelUser/PanelUser";
class CardUser extends Component {
    render() {
        console.log('infoUserDet',this.props);
        return (
            <div className='card'>
                <ImmageUser infoUserDet={this.props.infoUserDet}/>
                <InfoUser infoUserDet={this.props.infoUserDet} infoEvent={this.props.infoEvent} />
                <PanelUser envenHover={(e)=>{this.props.envenHover(e)} } evenLeave={(e)=>{this.props.evenLeave(e)}}/>
            </div>
        )
    }
}


export default CardUser;