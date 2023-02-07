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

  const array = [
    {
      id: 1,
      insideArray: [
        {
          id: 0,
          name: "sam",
        },
        {
          id: 1,
          name: "dell",
        },
      ],
    },
    {
      id: 2,
      insideArray: [
        {
          id: 0,
          name: "sam-2",
        },
        {
          id: 1,
          name: "dell-2",
        },
      ],
    },
    {
      id: 3,
      insideArray: [
        {
          id: 0,
          name: "sam-3",
        },
        {
          id: 1,
          name: "dell-3",
        },
      ],
    },
  ];

  const result = array.map(function (value) {
    console.log("value", value);
    // console.log(value.id);

    return value.id;

    // return value.insideArray.map(function (item) {
    //   console.log("item", item);
    // });
  });
  console.log(result);
  // array.map()

  /**
   * id: 0
   * insideArray:
   * Sam
   * dell
   * id: 1
   * insideArray:
   * Sam-2
   * dell-2
   * id: 2
   * insideArray:
   * Sam-3
   * dell-3
   *  */

  return (
    <div className="main-modal">
      {array.map((val) => {
        // {id, insideArray}=val;

        return (
          <div>
            <p>main ID: {val.id}</p>
            {val.insideArray.map((val) => {
              return (
                <div>
                  INSIDE ARRAY: id: {val.id} name:{val.name}
                </div>
              );
            })}
          </div>
        );
      })}

      {/* <div> */}
      {/* <button className="main-btn" onClick={() => setShowModal(true)}>
        Open Dialog
      </button>

      {showModal && (
        <MyModal closeModal={closeModal} handleEmail={handleEmail} />
      )}

      <p>{value?.Username}</p>
      <p>{value?.Email}</p>
      <p>{value?.Username}</p> */}
    </div>
    // </div>
  );
};

export default Modal;
