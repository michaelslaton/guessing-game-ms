export default function Scoreboard({ wins, losses }){

  function average(){
    const played = wins + losses;
    const result = (100 * wins) / played;

    if (wins === 0 && losses === 0) return 0;
    return Math.floor(result);
  }

  return (
    <div className="score-board__wrapper">

      <div>
        <div className="score-board__wins--wrapper">
          <h1 className="score-board__wins">Wins </h1>
          <h2 className="score-board__wins--number">{wins}</h2>
        </div>
        <div className="score-board__loss--wrapper">
          <h1 className="score-board__loss">Losses </h1>
          <h2 className="score-board__loss--number">{losses}</h2>
        </div>
      </div>

      <div>
        <h3 className="score-board__winrate">Winrate </h3>
        <h3 className="score-board__winrate--number">{average()}%</h3>
      </div>
      
    </div>
  )
}