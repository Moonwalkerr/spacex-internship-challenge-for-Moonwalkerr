import "./styles.css";

const Modal = () => {
  return (
    <div className="modal">
      <div
        className="backdrop"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // onClick={closeBackdrop}
      >
        <img
          // this property takes the img off the screen on y axis and then animates accordingly
          //   src={selectedImg}
          alt="Modal"
        />
      </div>
    </div>
  );
};

export default Modal;
