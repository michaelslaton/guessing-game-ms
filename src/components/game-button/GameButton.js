export default function GameButton({ value, answer, random, dispatch, color }){

  const clickHandler = () => {
    dispatch({ type: "resetColors" })

    if(value === answer) {
      dispatch({ type: `b${value}win` }) 
      dispatch({ type: `bgwin`, payload: true })
    } else { 
      dispatch({ type: `b${value}loss`})
      dispatch({ type: `b${answer}win`})
      dispatch({ type: `bgwin`, payload: false })
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