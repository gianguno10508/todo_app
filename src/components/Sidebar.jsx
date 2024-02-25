import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

const Sidebar = ({ isOpen, onClose, onTabClick }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    onTabClick(tabName);
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
              activeTab === "Accounts"
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("Calendar")}
          >
            Calendar
          </div>
          <div
            className={`py-2 px-4 text-lg cursor-pointer transition-colors duration-300 ${
              activeTab === "Accounts"
                ? "bg-gray-800 text-gray-300"
                : "hover:bg-gray-800 hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("Schedule")}
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
        </div>
      </div>
    </Transition>
  );
};

export default Sidebar;
