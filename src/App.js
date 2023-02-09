import logo from "./logo.svg";
import "./App.css";
import MomentExample from "./components/Moment/MomentExample";
import DayjsExample from "./components/Dayjs/DayjsExample";
import DateFns from "./components/DateFns/DateFns";

function App() {
  return (
    <div className="App">
      <DateFns></DateFns>
      <DayjsExample></DayjsExample>
      <MomentExample></MomentExample>
    </div>
  );
}

export default App;
