import { useState } from "react";

function ValueList({ dataArray, textList, onAdd }) {
  const [inputText, setinputText] = useState("");

  const handleChange = (event) => {
    setinputText(event.target.value);
  }
  
  const handleClick = () => {
    onAdd((state) => {
      const newState = (new Set(state)).add(inputText)
      return newState;
    });
    setinputText("");
  }

  return (
    <div className="assignees-list flex-col">
      <h3 className="font-bold text-center">{textList}</h3>
      <div className="my-5 flex gap-2">
        <input className="rounded-sm text-indigo-900 bg-indigo-100 pl-3 py-1" type="text" placeholder="New item" value={inputText} onChange={handleChange}></input>
        <button className="bg-indigo-800 px-2 rounded-sm" onClick={handleClick}>Add</button>
      </div>
      {dataArray.map(data => <div key={data} className="py-2 pl-3 font-medium italic">{data}</div>)}
    </div>
  );
}
export default ValueList;
