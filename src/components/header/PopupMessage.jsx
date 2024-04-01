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
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedUserFrom, setSelectedUserFrom] = useState(null);

  const handleItemClick = (subject, userFrom) => {
    setSelectedSubject(subject);
    setSelectedUserFrom(userFrom);
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
        {selectedSubject ? (
          <div className="message-details">
            <h3 className="font-bold text-xl" >Subject: {selectedSubject}</h3>
            <h4>{selectedUserFrom}</h4>
            {user.message_from
              .filter((item) => item.subject === selectedSubject)
              .map((item, index) => (
                <div key={index}>
                  <p>{item.message}</p>
                </div>
              ))}
            {user.message_to
              .filter((item) => item.subject === selectedSubject)
              .map((item, index) => (
                <div key={index}>
                  <p>{item.message}</p>
                </div>
              ))}
          </div>
        )
          :
          user &&
            user.message_from.length > 0 ? (
            <>
              {/* Create a map to store unique items */}
              {Object.values(
                user.message_from.reduce((uniqueMap, item) => {
                  const key = `${item.user_from}-${item.subject}`;
                  // Add the item to the map if the key doesn't exist yet
                  if (!uniqueMap[key]) {
                    uniqueMap[key] = item;
                  }
                  return uniqueMap;
                }, {})
              ).map((uniqueItem, index) => (
                <div key={index} className="item-message mb-5 bg-gray-200 p-2 rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-pointer relative" onClick={() => handleItemClick(uniqueItem.subject, uniqueItem.user_from)}>
                  <p style={{ color: "rgb(145 145 145)", marginBottom: "-10px" }}>{uniqueItem.user_from}</p>
                  <b className="text-2xl">{uniqueItem.subject}</b>
                  <p style={{ color: "rgb(145 145 145)", marginTop: "-10px" }}>{uniqueItem.message.length > 50 ? `${uniqueItem.message.slice(0, 50)}...` : uniqueItem.message}</p>
                </div>
              ))}
            </>
          ) : (
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-2xl">You don't have message</h2>
              <img src={ImgNotification} className="max-w-28" alt="img" />
            </div>
          )

        }


        {/* {user && user.message_from.length > 0 ? (
          user.message_from.map((item, index) => (
            <div className="item-message mb-5 bg-gray-200 p-2 rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-pointer relative">
              <p style={{ color: "rgb(145 145 145)", marginBottom: "-10px" }}>{item.user_from}</p>
              <b className="text-2xl">{item.subject}</b>
              <p style={{ color: "rgb(145 145 145)", marginTop: '-10px' }}>{item.message.length > 50 ? `${item.message.slice(0, 50)}...` : item.message}</p>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-2xl">You don't have message</h2>
            <img src={ImgNotification} className="max-w-28" alt="img" />
          </div>
        )} */}
      </div>
    </Modal>
  );
}

export default PopupMessage;
