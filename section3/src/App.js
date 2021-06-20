import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>カウントアップ</button> */}
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
