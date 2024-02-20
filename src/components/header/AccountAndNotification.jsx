// AccountAndNotification.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import Notifications from "./notifications/Notifications";
import Account from "./account/Account";

const AccountAndNotification = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  const handleBellClick = (event) => {
    event.stopPropagation();
    setShowNotifications((prev) => !prev);
  };
  const handleAccountClick = (event) => {
    event.stopPropagation();
    setShowAccount((prev) => !prev);
  };
  const handleCloseComponents = () => {
    setShowNotifications(false);
    setShowAccount(false);
  };

  return (
    <div className="flex flex-row justify-end gap-5">
      <div
        className="bg-a6c5e229 border flex flex-row justify-center items-center p-4 w-6 h-6 rounded-full cursor-pointer"
        onClick={handleBellClick}
      >
        <FontAwesomeIcon icon={faBell} />
        {showNotifications && (
          <Notifications
            onCloseNotification={() => setShowNotifications(false)}
            onClickOutside={handleCloseComponents}
          />
        )}
      </div>
      <div
        className="bg-a6c5e229 border flex flex-row justify-center items-center p-4 w-6 h-6 rounded-full cursor-pointer"
        onClick={handleAccountClick}
      >
        <FontAwesomeIcon icon={faUser} />
        {showAccount && (
          <Account
            onCloseAccount={() => setShowAccount(false)}
            onClickOutside={handleCloseComponents}
          />
        )}
      </div>
    </div>
  );
};

export default AccountAndNotification;
