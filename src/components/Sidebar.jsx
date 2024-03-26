import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { logout } from "../untils/functions";

const Sidebar = ({ isOpen, onClose, onTabClick, user }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    onTabClick(tabName);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Transition show={isOpen}>
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 ease-in-out">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-gray-300"
        >
          <XIcon className="h-6 w-6" />
        </button>
        <div className="mt-10">
          <div
            className={`py-2 px-4 text-lg cursor-pointer transition-colors duration-300 ${
              activeTab === "Dashboard"
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("Dashboard")}
          >
            Dashboard
          </div>
          <div
            className={`py-2 px-4 text-lg cursor-pointer transition-colors duration-300 ${
              activeTab === "Calendar"
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("Calendar")}
          >
            Calendar
          </div>
          <div
            className={`py-2 px-4 text-lg cursor-pointer transition-colors duration-300 ${
              activeTab === "Schedule2"
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("Schedule2")}
          >
            Schedule
          </div>
          <div
            className={`py-2 px-4 text-lg cursor-pointer transition-colors duration-300 ${
              activeTab === "Profile"
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("Profile")}
          >
            Profile
          </div>
          {user && user.role === "admin" && (
            <div
              className={`py-2 px-4 text-lg cursor-pointer transition-colors duration-300 ${
                activeTab === "Admin"
                  ? "bg-gray-800 text-gray-300"
                  : "hover:bg-gray-800 hover:text-gray-300"
              }`}
              onClick={() => handleTabClick("Admin")}
            >
              Admin
            </div>
          )}
          <div
            className={`py-2 absolute px-4 bottom-1.5 text-lg cursor-pointer transition-colors duration-300 ${
              activeTab === ""
                ? "bg-gray-800 text-gray-300"
                : "hover:text-gray-300"
            }`}
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Sidebar;
