function ValueListItem({ dataArray }) {
  return (
    <div>
      {dataArray.map((data) => <div key={data} className="">{data}</div>)}
    </div>
  );
}
export default ValueListItem;
