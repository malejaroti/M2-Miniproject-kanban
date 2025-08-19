import { useState } from "react";
import ValueListItem from "./ValueListItem";

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
    <>
      <h3 className="font-bold text-center">{textList}</h3>
      <div className="my-5 flex gap-2">
        <input className="rounded-sm text-indigo-900" type="text" placeholder="New item" value={inputText} onChange={handleChange}></input>
        <button className="bg-indigo-800 px-2 rounded-sm" onClick={handleClick}>Add</button>
      </div>
      {dataArray.map(data => <div key={data} className="">{data}</div>)}
      {/* <ValueListItem dataArray={dataArray} /> */}
    </>
  );
}
export default ValueList;
