import { useState } from "react";
import useUser from "./hooks/useUser";

function App() {
  let listName = ["Huyen", "Hoa", "Hung", "Long"];
  const [input, setInput] = useState("");
  const { arrData, handleClick } = useUser(listName);

  const showList = arrData.map((item, index) => {
    if (index === arrData.length - 1) {
      return <span>{item} </span>;
    } else {
      return <span>{item}, </span>;
    }
  });

  return (
    <div className="App">
      <p>学生一覧：["Huyen", "Hoa", "Hung", "Long"]</p>
      <p>削除値を入力してください。</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={(e) => {
          handleClick(input);
          setInput("");
        }}
      >
        確定
      </button>
      <p>削除する名前： {input}</p>
      <p>新しい一覧：[ {showList} ]</p>
    </div>
  );
}

export default App;
