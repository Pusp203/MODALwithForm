import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const MyModal = ({ closeModal, handleEmail }) => {
  const schema = yup.object().shape({
    Username: yup.string().required(),
    Email: yup.string().email().required(),
    Password: yup.string().min(4).max(20).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log("errors", errors);
  // const [formData, setFormData] = useState({});

  const obj = {
    name: "name",
    laptop: "dell",
    array: ["1", "2", "3"],
    arrayWithObj: [
      {
        id: 0,
        name: "dell",
      },
      {
        id: 1,
        name: "samsung",
      },
    ],
  };

  const onSubmit = (data) => {
    handleEmail(data);

    console.log(data);

    closeModal();
  };
  const handleClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div>
      <div className="modal-wrapper" onClick={closeModal}>
        <div className="modal-container" onClick={handleClick}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {obj.arrayWithObj.map(function (value) {
              console.log("value", value);
              return (
                <p key={value}>
                  {value.name}
                  {value.id}
                </p>
              );
            })}
            <h1>Login Form</h1>

            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  {...register("Username")}
                />
                {errors.Username && (
                  <div className="field"> {errors.Username.message} </div>
                )}
              </div>
              {obj.array.map(function (value) {
                // console.log(value);
                // console.log("value", value);
                return <p key={value}>{value}</p>;
              })}

              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  {...register("Email")}
                />
                {errors.Email && (
                  <div className="field">{errors.Email.message}</div>
                )}
              </div>

              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  {...register("Password")}
                />
                {errors.Password && (
                  <div className="field">{errors.Password.message}</div>
                )}
              </div>

              <button type="submit" className="fluid ui button blue">
                Submit
              </button>
            </div>
            <p>{obj.name}</p>
            <p>{obj.laptop}</p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MyModal;
