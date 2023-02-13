// import logo from "./logo.svg";
import "./App.css";
// import MomentExample from "./components/Moment/MomentExample";
// import DayjsExample from "./components/Dayjs/DayjsExample";
// import DateFns from "./components/DateFns/DateFns";
// import TestMocking from "./components/TestMocking/TestMocking";
import { RecoilRoot } from "recoil";
import TodoList from "./components/RecoilExample/Todo/TodoList";
import CurrentUserInfo from "./components/RecoilExample/CurrentUserInfo";
// import Button from "./components/RecoilExample/Button";
// import Text from "./components/RecoilExample/Text";
// import { CharacterCounter } from "./components/RecoilExample/c haracterCounter";

function App() {
  return (
    <div className="App">
      {/* <DateFns></DateFns>
      <DayjsExample></DayjsExample>
      <MomentExample></MomentExample> */}
      {/* <TestMocking></TestMocking> */}
      <RecoilRoot>
        {/* <Button></Button>
        <Text></Text>
        <CharacterCounter></CharacterCounter> */}
        <TodoList></TodoList>
        <CurrentUserInfo></CurrentUserInfo>
      </RecoilRoot>
    </div>
  );
}

export default App;
