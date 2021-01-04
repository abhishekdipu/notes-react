import "./App.css";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import CounterUsingHook from "./components/CounterUsingHook";
import HookCounter from "./components/HookCounter";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <CounterUsingHook />
    </div>
  );
}
export default App;
