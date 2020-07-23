import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setVal(event.target.value, this.props.sqNum);
  }

  render() {
    return (
      <input
        className="square"
        type="text"
        value={this.props.squares[this.props.sqNum]}
        onChange={this.handleChange}
      />
    );
  }
}

class Box extends React.Component {
  renderSquare(i) {
    return (
      <Square
        squares={this.props.squares}
        sqNum={this.props.boxNum * 9 + i}
        setVal={this.props.setVal}
      />
    );
  }

  render() {
    return (
      <div className="box">
        <div className="box-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="box-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="box-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Board extends React.Component {
  renderBox(i) {
    return (
      <Box
        squares={this.props.squares}
        boxNum={i}
        setVal={this.props.setVal}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderBox(0)}
          {this.renderBox(1)}
          {this.renderBox(2)}
        </div>
        <div className="board-row">
          {this.renderBox(3)}
          {this.renderBox(4)}
          {this.renderBox(5)}
        </div>
        <div className="board-row">
          {this.renderBox(6)}
          {this.renderBox(7)}
          {this.renderBox(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(81).fill(null)
    };
  }

  setVal(value, i){
    this.state.squares[i] = value;
  }

  //setRandValue() {
  //  var i = Math.floor(Math.random() * 81); // pick random index to change
  //  this.state.squares[i] = Math.floor(Math.random() * 10);
  //}

  render() {
    //this.setRandValue();
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={this.state.squares}
            setVal={() => this.setVal}
          />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
