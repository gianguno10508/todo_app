import AccountAndNotification from "./header/AccountAndNotification";
import FormSearch from "./header/FormSearch";

const Header = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-1/4">
        <p>ádasd</p>
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
export default Header;
