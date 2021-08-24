import { Component } from 'react';
import './ImmageUser.css';
class ImmageUser extends Component {
    render() {
        console.log('image',this.props.infoUserDet.immage)
        return (<div className='image-container'>
            <div className='image-user'><img src={this.props.infoUserDet.immage}  /></div>
        </div>)
    }

    
}


export default ImmageUser;