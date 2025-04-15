
const Descriptions = (propss) => {
    // props = {} é um objeto
    // props = propriedades
    return (
    <>
      <div>
        <p>Seu nome é: {props.name}</p>
        <p>Sua idade é: {props.age}</p>
      </div>
    </>
  );
};

export default Descriptions;
