export default function GameButton({ value, answer, random, dispatch, color }){

  const clickHandler = () => {
    dispatch({ type: "resetColors" })

    if(value === answer) dispatch({ type: `b${value}win` })
    else { 
      dispatch({ type: `b${value}loss`})
      dispatch({ type: `b${answer}win`})
    }

    if(answer === value){
      dispatch({ type: "win" });
    } else {
      dispatch({ type: "loss" });
    }

    random();
  }

  return (
    <div className="game-button--wrapper">
      <div className={`game-button--light ${color}`}/>
      <button className="game-button" onClick={clickHandler}/>
    </div>
  )
}