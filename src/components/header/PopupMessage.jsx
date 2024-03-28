import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import ImgNotification from "../../assets/images/notification.svg";

Modal.setAppElement("#root");

function PopupMessage({ onClose, user }) {
  const handleCloseModal = () => {
    onClose();
  };
  const [email, setEmail] = useState();
  const [messageCallback, setMessageCallback] = useState();
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/sendmailpassword",
        {
          email: email,
        }
      );
      if (response.data.status === "send_reset_success") {
        setMessageCallback(response.data.massage);
        // onClose();
      } else {
        setMessageCallback(response.data.massage);
      }
      // if (response.data.msg !== "Fail!") {
      //   navigate("/login");
      // } else {
      //   setMessageCallback("Account already exists");
      // }
    } catch (error) {
      console.log(error);
      //   if (error.response.data) {
      //     setMessageCallback(error.response.data.errors[0].msg);
      //   }
    }
  };
  console.log(user);
  return (
    <Modal
      className="popup-modal"
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "70%",
          height: "70%",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          borderRadius: "0",
          border: "none",
        },
      }}
    >
      <div className="flex relative w-full h-full flex-col text-left p-8 bg-white rounded-lg">
        <button
          className="absolute top-0 right-0 m-4 text-xl cursor-pointer"
          onClick={handleCloseModal}
        >
          x
        </button>
        {/* {user && user.message_from.length > 0 ? (
          user.message_from.map((item, index) => (
            <div className="item-message mb-5">
              <b>{item.subject}</b>
              <p style={{color: "rgb(145 145 145)"}}>{item.message.length > 50 ? `${item.message.slice(0, 50)}...` : item.message}</p>
            </div>
          ))
        ) : ( */}
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-2xl">You don't have message</h2>
          <img src={ImgNotification} className="max-w-28" alt="img" />
        </div>
        {/* )} */}
      </div>
    </Modal>
  );
}

export default PopupMessage;
