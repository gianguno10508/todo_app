import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TEInput, TERipple } from "tw-elements-react";
import Upload from "../assets/images/upload.png";
import { Typography } from "@material-ui/core";
import { getInforUser } from "../untils/functions";

const Register = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const [messageCallback, setMessageCallback] = useState();
  const handleImageClick = () => {
    document.getElementById("avatar").click();
  };
  const handleRedirectLogin = () => {
    navigate("/login");
  };
  const [inforuser, setInforuser] = useState({
    username: "",
    password: "",
    name: "",
  });
  const handleOnChange = (event) => {
    setInforuser({ ...inforuser, [event.target.name]: event.target.value });
  };
  const user = getInforUser();
  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [navigate, user]);
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", inforuser.username);
    formData.append("password", inforuser.password);
    formData.append("name", inforuser.name);
    formData.append("avatar", selectedFile);
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.msg !== "Fail!") {
        navigate("/login");
      } else {
        setMessageCallback("Account already exists");
      }
    } catch (error) {
      if (error.response.data) {
        setMessageCallback(error.response.data.errors[0].msg);
      }
    }
  };

  return (
    <section className="mx-auto max-w-7xl p-7 min-h-screen flex items-center">
      <div className="h-full">
        {/* <!-- Left column container with background--> */}
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="img"
            />
          </div>

          {/* <!-- Right column container --> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <form method="POST" onSubmit={handleSubmitRegister}>
              {/* <!-- Separator between social media sign in and email/password sign in --> */}
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <h2 className="mx-4 mb-0 text-center text-3xl font-semibold dark:text-white">
                  Register
                </h2>
              </div>
              <div className="avatar flex items-center justify-center flex-col mb-5">
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  required
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                {/* {selectedFile && ( */}
                <img
                  src={
                    selectedFile ? URL.createObjectURL(selectedFile) : Upload
                  }
                  alt="Preview"
                  onClick={handleImageClick}
                  style={{
                    cursor: "pointer",
                    width: 120,
                    height: 120,
                    borderRadius: "100%",
                  }}
                />
                <h2 className="text-bold text-xl">Your Avatar</h2>
              </div>
              {/* )} */}
              <TEInput
                type="text"
                label="Full name"
                name="name"
                size="lg"
                className="mb-6"
                onChange={handleOnChange}
                required
              ></TEInput>
              {/* <!-- Email input --> */}
              <TEInput
                type="email"
                label="Email address"
                name="username"
                size="lg"
                className="mb-6"
                required
                onChange={handleOnChange}
              ></TEInput>

              {/* <!-- Password input --> */}
              <TEInput
                type="password"
                label="Password"
                name="password"
                size="lg"
                className="mb-6"
                onChange={handleOnChange}
                required
              ></TEInput>

              {/* <!-- Re-password input --> */}

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#b1b1b1",
                  fontWeight: "400",
                  marginBottom: "20px",
                }}
              >
                * Password must be at least 6 characters long and include
                uppercase letters, special characters and numbers
              </p>
              {messageCallback && (
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#ff0000",
                    fontWeight: "700",
                    marginBottom: "20px",
                  }}
                  component={"p"}
                >
                  {messageCallback}
                </p>
              )}

              {/* <!-- Register button --> */}
              <div className="text-center lg:text-left">
                <TERipple rippleColor="light">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Register
                  </button>
                </TERipple>

                {/* <!-- Register link --> */}
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Have an account?
                  <button
                    onClick={handleRedirectLogin}
                    className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                  >
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
