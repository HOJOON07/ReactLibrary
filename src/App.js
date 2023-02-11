// import logo from "./logo.svg";
// import "./App.css";
// import MomentExample from "./components/Moment/MomentExample";
// import DayjsExample from "./components/Dayjs/DayjsExample";
// import DateFns from "./components/DateFns/DateFns";
// import TestMocking from "./components/TestMocking/TestMocking";
import { RecoilRoot } from "recoil";
import FontButton from "./components/RecoilExample/FontButton";
import Text from "./components/RecoilExample/Text";

function App() {
  return (
    <div className="App">
      {/* <DateFns></DateFns>
      <DayjsExample></DayjsExample>
      <MomentExample></MomentExample> */}
      {/* <TestMocking></TestMocking> */}
      <RecoilRoot>
        <FontButton></FontButton>
        <Text></Text>
      </RecoilRoot>
    </div>
  );
}

export default App;
