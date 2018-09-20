import React, { Component } from 'react';
import './../styles/Game.css';
import Board from './Board';
import { connect } from 'react-redux';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
    };
  }

  handleClick(i) {
    console.log(this.props);
    const { dispatch } = this.props;
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const currentSquares = current.squares.slice();
    if (this.calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    currentSquares[i] = this.props.xIsNext ? "X" : "O";
    console.log("history length" + history.length);
    const xIsNextAction = {
      type: "NEXT_TURN",
      stepNumber: history.length
    }
    const stepNumberAction = {
      type: "UPDATE_STEP_NUMBER",
      stepNumber: history.length
    }
    dispatch(xIsNextAction);
    dispatch(stepNumberAction);
    this.setState({
      history: history.concat([
        {
          squares: currentSquares
        }
      ]),
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  calculateWinner(currentSquares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (currentSquares[a] && currentSquares[a] === currentSquares[b] && currentSquares[a] === currentSquares[c]) {
        return currentSquares[a];
      }
    }
    return null;
  }

  render() {
    const history = this.state.history;
    const current = history[this.props.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.props.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber
  }
}

export default connect(mapStateToProps)(Game);
