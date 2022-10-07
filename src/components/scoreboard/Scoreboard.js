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
        Wins: {wins} Losses: {losses}
      </div>

      <div>
        Winrate: {average()}%
      </div>
      
    </div>
  )
}