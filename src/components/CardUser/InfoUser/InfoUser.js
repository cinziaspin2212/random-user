import { Component } from 'react';
import './InfoUser.css';

class InfoUser extends Component {
    render() {
        return (
            <div className='info-user'>
                <div className='info-user-descr'>
                    Descrizione
                </div>
                <div className='info-user-dett'>
                    dettaglio
                </div>
            </div>
        )
    }
}

export default InfoUser;