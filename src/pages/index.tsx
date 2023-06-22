import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [userInputs, setUserInputs] = useState<(0 | 1 | 2 | 3)[][]>([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [bombMap, setBombMap] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const isPlaying = userInputs.some((row) => row.some((input) => input !== 0));
  const isFailure = userInputs.some((row, y) =>
    row.some((input, x) => input === 1 && bombMap[y][x] === 1)
  );

  const direction = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  const newUserInputs: (0 | 1 | 2 | 3)[][] = JSON.parse(JSON.stringify(userInputs));

  const board: number[][] = [];
  for (let a = 1; a <= 9; a++) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  }

  const Cell = () => {
    return <div className={styles.cell} />;
  };

  const Board = () => {
    const boardSize = 8; // ゲームボードのサイズ（8x8の場合）
    const cells = [];

    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        cells.push(<Cell key={`${row}-${col}`} />);
      }
    }
  };

  const startNewGame = () => {
    setUserInputs;
    setBombMap;
  };

  const clickcell = (x: number, y: number) => {
    console.log(x, y);
    if (userInputs[y][x] === 0 && isFailure !== true) {
      newUserInputs[y][x] = 1;
    }
    setUserInputs(newUserInputs);
    if (userInputs[y][x] === 1) {
    }
    if (isFailure === true) {
      startNewGame[y][x];
    }
  };
  

  <div className='ab sprite'>  </div>

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((cell, x) => (
            <div className={styles.cell} key={'${x}-${y}'} onClick={() => clickcell(x, y)} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
