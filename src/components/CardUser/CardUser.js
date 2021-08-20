import { Component } from "react";
import "./CardUser.css";
import ImmageUser from "./ImmageUser/ImmageUser";
import InfoUser from "./InfoUser/InfoUser";
import PanelUser from "./PanelUser/PanelUser";
class CardUser extends Component {
    render() {
        return (
            <div className='card'>
                <ImmageUser />
                <InfoUser />
                <PanelUser />
            </div>
        )
    }
}


export default CardUser;