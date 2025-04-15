import Child from "./Child";

const Parent = () => {
  return (
    <>
      <div>
        <p>
          <strong>Este é o componente Pai</strong>
        </p>
        {/* Chamando componente filho */}
        <Child />
      </div>
    </>
  );
};

export default Parent;
