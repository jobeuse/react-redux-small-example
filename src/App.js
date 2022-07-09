import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withDrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div className="App">
      <h2>{account}</h2>
      <button onClick={() => depositMoney(1000)}>Depost</button>
      <button onClick={() => withDrawMoney(10)}>WithDraw</button>
    </div>
  );
}

export default App;
