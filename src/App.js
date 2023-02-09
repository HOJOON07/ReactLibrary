import logo from "./logo.svg";
import "./App.css";
import MomentExample from "./components/Moment/MomentExample";
import DayjsExample from "./components/Dayjs/DayjsExample";

function App() {
  return (
    <div className="App">
      <DayjsExample></DayjsExample>
      <MomentExample></MomentExample>
    </div>
  );
}

export default App;
