// this component will be used for displaying the multiple data details inside the modal component
const ModalDesc = ({ name, data }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "30%",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <p>{name}</p> <span> {data} </span>
    </div>
  );
};

export default ModalDesc;
