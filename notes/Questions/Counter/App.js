import "./App.css";
import Counter from "./components/Counter";
import CounterUsingHook from "./components/CounterUsingHook";

function App() {
  return (
    <div className="App">
      <Counter />

      <CounterUsingHook />
    </div>
  );
}
export default App;
