
const DefaultInput = ({data, valueCollector, setValueCollector}) => {
  
  const handleOnChange = (e) => {
    valueCollector[data.name] =  e.target.value;
    setValueCollector(valueCollector)
  };

  return (
    <div>
        <label>{data.label}</label>
        <input onChange={handleOnChange} type={data.type}></input>
    </div>
  );
};

export default DefaultInput;