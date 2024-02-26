import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Profile = (props) => {
  const [color, setColor] = useState("text-black");
  useEffect(() => {
    if (props.darkmode == "active dark mode") {
      setColor("text-white");
    } else {
      setColor("text-black");
    }
  }, [props.darkmode]);
  return (
    <div className={` p-4`}>
      <div className="md:grid md:grid-cols-3 md:gap-6 mt-10 sm:mt-0 p-4">
        <div className="md:col-span-1 flex justify-between">
          <div className="px-4 sm:px-0">
            <h3 className={`text-3xl font-medium ${color}`}>
              Profile Information
            </h3>
            <p className={`mt-1 text-l ${color}`}>
              Update your account's profile information and email address.
            </p>
          </div>
          <div className="px-4 sm:px-0"></div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div className="px-4 py-5 bg-neutral-200 sm:p-6 shadow sm:rounded-tl-md sm:rounded-tr-md">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    className="block font-medium text-sm text-gray-700"
                    htmlFor="name"
                  >
                    <span>Name</span>
                  </label>
                  <input
                    className="border-gray-300 border h-10 p-3 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                    id="name"
                    type="text"
                    autoComplete="name"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    className="block font-medium text-sm text-gray-700"
                    htmlFor="email"
                  >
                    <span>Email</span>
                  </label>
                  <input
                    className="border-gray-300 border h-10 p-3 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                    id="email"
                    type="email"
                    autoComplete="email"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    className="block font-medium text-sm text-gray-700"
                    for="current_password"
                  >
                    <span>Current Password</span>
                  </label>
                  <input
                    className="border-gray-300 border h-10 p-3 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                    id="current_password"
                    type="password"
                    autocomplete="current-password"
                  />
                  <div className="mt-2" style={{ display: "none" }}>
                    <p className="text-sm text-red-600"></p>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    className="block font-medium text-sm text-gray-700"
                    for="password"
                  >
                    <span>New Password</span>
                  </label>
                  <input
                    className="border-gray-300 border h-10 p-3 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                    id="password"
                    type="password"
                    autocomplete="new-password"
                  />
                  <div className="mt-2" style={{ display: "none" }}>
                    <p className="text-sm text-red-600"></p>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-4">
                  <label
                    className="block font-medium text-sm text-gray-700"
                    for="password_confirmation"
                  >
                    <span>Confirm Password</span>
                  </label>
                  <input
                    className="border-gray-300 border h-10 p-3 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                    id="password_confirmation"
                    type="password"
                    autocomplete="new-password"
                  />
                  <div className="mt-2" style={{ display: "none" }}>
                    <p className="text-sm text-red-600"></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end px-4 py-3 bg-neutral-300 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = () => {
  return {};
};
const mapStateToProps = (state) => {
  return {
    darkmode: state.darkmode,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
