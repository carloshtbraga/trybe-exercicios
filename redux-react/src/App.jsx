import "./App.css";
import { connect } from "react-redux";
import { actionCreatorCounter } from "./redux/actions";
import { actionTheme } from "./redux/actions";
import { clickCounter } from "./redux/actions";
import moon from './img/moon.svg'
import sun from './img/sun.svg'

function App(props) {
  const { stateCounter, dispatch, stateTheme, stateClicks } = props;

  const dispatchAll = (add = 1) => {
    dispatch(actionCreatorCounter(add));
    dispatch(clickCounter());
  };

  return (
  <div className={stateTheme === 'dark' ? 'dark1' : 'light1'}>

    <div className={stateTheme === 'dark' ? 'dark2' : 'light2' }>
      <h1>Redux-React</h1>      
      <h2 id="counter">{stateCounter}</h2>
     
      <button onClick={() => dispatchAll()} id="incre">
        Incrementar
      </button>
    
      
      <button onClick={() => dispatchAll(-1)} id="decre">
        Decrementar
      </button>
     
   
      <button onClick={() => dispatchAll(5)} id="incre5">
        Incrementar 5
      </button>
      
      

      <button onClick={() => dispatchAll(-5)} id="decre5">
        Decrementar 5
      </button>

     
      <button onClick={() => dispatch(actionTheme)} id="theme">
        {stateTheme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <img src={stateTheme === 'dark' ? sun : moon } alt="" srcset="" />
      <h3>{`Número de clicks:  ${stateClicks}`}</h3>
    </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  stateCounter: state.count,
  stateTheme: state.theme,
  stateClicks: state.clicks,
});

export default connect(mapStateToProps)(App);
