// this component will be used for displaying the multiple data details inside the modal component
const ModalDesc = ({ name, data }) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 5,
        width: "60%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        color: "#4B5563",
        fontFamily: "Inter",
        fontStyle: "medium",
        fontWeight: 500,
        fontSize: 14,
        borderBottom: "1px solid  #E4E4E7",
      }}
    >
      <p>{name}</p>
      <span
        style={{
          display: "flex",
          width: 100,
          fontStyle: "regular",
          fontWeight: 400,
          fontSize: 14,
        }}
      >
        {data}
      </span>
    </div>
  );
};

export default ModalDesc;
