import React, { useState } from "react";
import MyModal from "./ShowModal";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const [value, setValue] = useState(null);

  console.log("value", value);
  const handleEmail = (val) => {
    setValue(val);
  };

  return (
    <div className="main-modal">
      {/* <div> */}
      <button className="main-btn" onClick={() => setShowModal(true)}>
        Open Dialog
      </button>

      {showModal && (
        <MyModal closeModal={closeModal} handleEmail={handleEmail} />
      )}

      <p>{value?.Username}</p>
      <p>{value?.Email}</p>
      <p>{value?.Username}</p>
    </div>
    // </div>
  );
};

export default Modal;
