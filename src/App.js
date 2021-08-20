import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardUser from './components/CardUser/CardUser';
import ButtonNext from './components/ButtonNext/ButtonNext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardUser /> /* passo le info */
        <ButtonNext /> /* passo la funzione che cambia lo stato */
      </div>
    );
  }
}
export default App;
