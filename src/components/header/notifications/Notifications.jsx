// Notifications.jsx
import React, { useRef, useEffect } from "react";
import ImgNotification from "../../../assets/images/notification.svg";

const Notifications = ({ onCloseNotification, onClickOutside  }) => {
  const notificationsRef = useRef();

  const handleClick = (event) => {
    event.stopPropagation();
  };

  const handleCloseNotification = () => {
    onCloseNotification();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClickOutside, onCloseNotification]);

  return (
    <div
      className="absolute top-0 max-h-615 min-w-96 overflow-y-auto"
      ref={notificationsRef}
      onClick={handleClick}
    >
      <div className="bg-282e33 p-10 rounded-lg">
        <div className="title">
          <h2 className="text-lg font-bold text-b6c2cf mb-3 border-b border-b6c2cf border-solid pb-4">
            Notifications
          </h2>
        </div>
        <div className="content flex flex-col items-center">
          <img src={ImgNotification} className="max-w-28" alt="img" />
          <p className="pt-5 text-b6c2cf text-xl">No unread notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
