import React, { useState } from "react";

const PlayGame = () => {
  const number = [1, 2, 3, 4, 5, 6];
  const [clickNum, setClickNum] = useState(null);
  const [generateR, setGenerateR] = useState(null);
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [currentDice, setCurrentDice] = useState(1);

  const diceImages = [
    "dice1.jpg",
    "dice2.png",
    "dice3.webp",
    "dice4.webp",
    "dice5.png",
    "dice6.webp",
  ];

  const clickedValue = (curElm) => {
    setClickNum(curElm);
    console.log(`Clicked Number : ${curElm}`);
    generateValue(curElm);
  };

  const toggleRule = () => {
    setRules((prevRule) => !prevRule);
  };

  const generateValue = (curElm) => {
    setRolling(true);

    let animationInterval = setInterval(() => {
      const randomDice = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(randomDice);
    }, 100);

    setTimeout(() => {
      clearInterval(animationInterval);

      const randomNum = Math.floor(Math.random() * 6) + 1;
      setGenerateR(randomNum);
      setCurrentDice(randomNum);
      setRolling(false);

      console.log(`Generated Number : ${randomNum}`);
      if (curElm === randomNum) {
        setScore((prevScore) => prevScore + randomNum);
        alert(`Congratulations! You scored ${randomNum} points.`);
      } else {
        alert(`No score this time. Try again!`);
      }
    }, 2000); 
  };

  const clearScore = () => {
    setScore(0);
  };

  return (
    <div className="h-[100vh] bg-slate-300 text-white">
      <section className="h-[6.3rem] pr-[6rem] px-[0.4rem] bg-slate-500 text-white flex items-center justify-between">
        <div className="pl-[1rem]">
          <p className="text-[3rem] font-[800] pl-[2rem]">{score}</p>
          <p className="text-[1.4rem] font-[800] mt-[-1rem]">Total Score</p>
        </div>
        <div>
          <div className="grid grid-cols-6 gap-[1rem] pt-[2px]">
            {number.map((curElm) => {
              return (
                <button
                  key={curElm}
                  className="h-[3rem] w-[3rem] border-2 flex shadow-md items-center justify-center rounded-md text-[1.5rem] font-[800] hover:bg-black"
                  onClick={() => clickedValue(curElm)}
                  disabled={rolling}
                >
                  {curElm}
                </button>
              );
            })}
          </div>
          <p className="text-[1.4rem] text-right font-[700] mt-[3px] tracking-[1px] hover:text-black">
            Select Number
          </p>
        </div>
      </section>
      <section className="flex relative flex-col h-[30rem] items-center justify-start mt-[1rem]">
        <div className="h-[5rem] w-[25rem] rounded-lg pt-[0.4rem] px-[3rem] text-[1.5rem] bg-white absolute right-[10rem] text-black">
          <p>Clicked Number: {clickNum !== null ? clickNum : "None"}</p>
          <p>Generated Number: {generateR !== null ? generateR : "None"}</p>
        </div>
        <div className="flex flex-col mt-[2rem]">
          <img
            className={`h-[10rem] ${rolling ? "animate-spin" : ""}`}
            src={diceImages[currentDice - 1]}
            alt="Dice"
          />
          <p className="text-[1.3rem] text-black font-[600] mt-[2rem] text-center">
            {rolling ? "Rolling..." : "Click to Dice Roll"}
          </p>
        </div>
        <button
          className="px-6 rounded-md py-1 mt-[0.5rem] text-[1.3rem] font-[600] bg-black hover:bg-pink-500 hover:text-slate-300"
          onClick={clearScore}
          disabled={rolling}
        >
          Reset Score
        </button>
        <button
          className="px-6 rounded-md py-1 mt-[0.5rem] text-[1.3rem] font-[600] bg-white text-black"
          onClick={toggleRule}
        >
          {rules ? "Hide Rule" : "Show Rule"}
        </button>
        <div>
          {rules && (
            <ul className="mt-[1rem] h-[10rem] w-[35rem] p-[1rem] bg-white text-black text-[1.1rem] rounded-md">
              <li>The player with the most round wins is declared the overall winner.</li>
              <p>The game requires at least 2 players.</p>
              <p>You click only one time.</p>
              <p>Each dice has numbers ranging from 1 to 6.</p>
              <li>If a player rolls a 6, they get an extra roll.</li>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default PlayGame;
