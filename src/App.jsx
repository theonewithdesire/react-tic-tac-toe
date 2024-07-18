import './index.css'
import { useState } from 'react';

function Square({value , oneSquareClick}){
  return <button className="square" onClick={oneSquareClick}>{value}</button>

}


export default function Board(){
  const [xIsstate,setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handlecClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }
    const nextSqaures = squares.slice();
    if(xIsstate){
      nextSqaures[i] = 'X';
    }else{
      nextSqaures[i] = 'O';
    }
    setSquares(nextSqaures);
    setXIsNext(!xIsstate);
  }

  
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = 'winner : ' + winner;
  }else{
    status  = 'next player : ' + (xIsstate ? 'X' : 'O');
  }
  return (
    <>
    <div className='status'>{status}</div>
    <div className="board-row">
    <Square value={squares[0]} oneSquareClick={() => handlecClick(0)} />
    <Square value ={squares[1]} oneSquareClick={() => handlecClick(1)}  />
    <Square value ={squares[2]}  oneSquareClick={() => handlecClick(2)} />
    </div>
    <div className="board-row">
    <Square  value= {squares[3]} oneSquareClick={() => handlecClick(3)}  />
    <Square value = {squares[4]} oneSquareClick={() => handlecClick(4)}  />
    <Square  value = {squares[5]} oneSquareClick={() => handlecClick(5)} />
    </div>
    <div className="board-row">
    <Square value = {squares[6]} oneSquareClick={() => handlecClick(6)} />
    <Square  value= {squares[7]} oneSquareClick={() => handlecClick(7)} />
    <Square  value = {squares[8]}oneSquareClick={() => handlecClick(8)} />
    </div>
    </>

  );
}


function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

  ];
  for (let i=0 ; i< lines.length ; i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a]=== squares[b] && squares[a]===squares[c]){
      return squares[a];
    }
  }
  return null;
}
