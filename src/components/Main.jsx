import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Header from "./Header";
import Calendar from "./Calendar";
const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  const lightTheme = {
    textColor: "#fff",
    background: "#000",
  };

  const darkTheme = {
    textColor: "#000",
    background: "#fff",
  };

  const Global = createGlobalStyle`
      body {
        background-color: ${({ theme }) => theme.background};
        transition: all 200ms;
      }
    `;

  const TextChange = styled.h1`
    color: ${({ theme }) => theme.textColor};
  `;
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="h-screen" style={{ backgroundColor }}>
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        onTabClick={handleTabClick}
      />
      <div className={`main-content ${isSidebarOpen ? "ml-64" : ""}`}>
        <div className="header relative border-b border-gray-500 ">
          <Header
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            onChangeColor={setBackgroundColor}
            onChangeMode={toggleTheme}
          />
        </div>
        <div className="content container mx-auto max-w-screen-xl pt-4">
          {/* <Calendar /> */}
          {selectedTab === "Dashboard" && <Calendar />}
          {/* {selectedTab === "Accounts" && <Accounts />} */}
          {selectedTab === "Profile" && <Profile />}
        </div>
      </div>
    </div>
  );
};
export default Main;
