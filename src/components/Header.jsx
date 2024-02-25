import { MenuIcon } from "@heroicons/react/solid";
import AccountAndNotification from "./header/AccountAndNotification";
import FormSearch from "./header/FormSearch";
import DayNightToggle from "react-day-and-night-toggle";
import { useState } from "react";
import { actSelectDarkMode } from "../actions";
import { connect } from "react-redux";

const Header = ({ props }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("data-theme") === "dark" ? true : false
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      const newColorScheme = e.matches ? "dark" : "light";

      setIsDarkMode(newColorScheme === "dark" ? true : false);
      localStorage.setItem("data-theme", newColorScheme);
      document.body.setAttribute(
        "data-theme",
        localStorage.getItem("data-theme")
      );
    });

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      props.setDarkMode("active dark mode");
      localStorage.setItem("data-theme", "dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("data-theme", "light");
      document.body.setAttribute("data-theme", "light");
    }
  };
  return (
    <div className="flex flex-row container relative mx-auto max-w-screen-xl justify-center items-center p-5">
      {!props.isSidebarOpen && (
        <button className="absolute z-10 left-0" onClick={props.toggleSidebar}>
          <MenuIcon className="h-6 w-6" />
        </button>
      )}
      <div className="w-1/4 flex gap-4">
        <p>ádasd</p>
        <DayNightToggle
          size={20}
          onChange={handleChangeTheme}
          checked={isDarkMode}
          onClick={props.onChangeMode}
        />
      </div>
      <div className="w-2/4">
        <FormSearch />
      </div>
      <div className="w-1/4">
        <AccountAndNotification />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    setDarkMode: (data) => {
      dispatch(actSelectDarkMode(data));
    },
  };
};
const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
