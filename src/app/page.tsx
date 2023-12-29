/*
 * @Author: Joe.Chen
 * @Date: 2023-12-21 09:00:48
 * @LastEditors: Joe.Chen joechen@tracle-tw.com
 * @LastEditTime: 2023-12-29 10:40:08
 * @Description: 
*/

"use client";

import { useState } from "react";

interface SquareProps {
  value: string | null;
  onSquareClick: () => {}
}

function Square({value , onSquareClick} : Readonly<SquareProps>) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}

export default function Board() {
  
  const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </>
  )
}
