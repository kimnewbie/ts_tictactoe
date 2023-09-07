import React from "react";
import "./TicTacToe.css";


type BoardProps = {
    board: Array<Array<string | null>>;
    player: string,
    handleClick: (row: number, col: number) => void;
}

export const Board = ({ board, handleClick, player }: BoardProps) => {
    console.log('player', player)
    return (
        <div className="board">
            {board.map((row, rowIndex) => (
                <div className="board_row" key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <button
                            key={cellIndex}
                            className={`cell ${cell === 'X' ? 'x' : cell === 'O' ? 'o' : ''}`}
                            onClick={() => handleClick(rowIndex, cellIndex)}
                        >
                            {cell}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )
}