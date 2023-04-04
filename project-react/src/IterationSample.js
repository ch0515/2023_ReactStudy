const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name) => <li key={index}>{name}</li>);
  //names배열에 있는 데이터를 1갰기 순차적으로 출력하는
  //데이터를 nameList 변수에 저장
  return <ul>{nameList}</ul>;
};
export default IterationSample;
