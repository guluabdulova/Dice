import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './styles.css'; 

class Dice extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
   number: this.getRandomNumber(),};
  }

  getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
  }

  rollDice = () => {
  this.setState({ number: this.getRandomNumber() });
  };

  handleSpaceKeyPress = (event) => {
  if (event.key === ' '||event.key==='Spacebar') {
  this.rollDice();}
  };

  componentDidMount() {
    window.addEventListener('keydown',this.handleSpaceKeyPress); }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.handleSpaceKeyPress);}

  render() {
  return (
      <div className="dice" onClick={this.rollDice}> {this.state.number}</div>
    );}
}
Dice.propTypes = {
number: PropTypes.number,
};

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <Dice />
        <Dice />
       <Dice/></div> );}
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;