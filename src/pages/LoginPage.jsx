/* eslint-disable react/prop-types */
import { FaCode } from "react-icons/fa";
import LoginCover from "../assets/login page img.png";

const LoginPage = (props) => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#fbf7f4] p-3">
      <div className="m-5 grid h-[calc(100%-40px)] grid-cols-2 overflow-hidden rounded-lg border bg-white">
        <div className="left flex items-center justify-center">
          <div className="item flex w-[350px] flex-col items-center gap-5">
            <div className="text text-center">
              <div className="logo mb-10 flex items-center justify-center gap-2 text-3xl">
                <FaCode className="" />
                <span className="font-[600]">Ahsan</span>
                <span className="font-[800] text-[#6277ee]">DevHub</span>
              </div>
              <h2 className="mb-2 text-2xl font-bold uppercase">Login</h2>
              <p>Enter your admin panel username and password</p>
              {props.error && (
                <div className="mt-3 text-red-500">{props.error}</div>
              )}
            </div>
            <form
              onSubmit={props.handleSubmit}
              className="form grid w-full grid-cols-1 gap-3"
            >
              <input
                type="text"
                name="username"
                id="username"
                required
                onChange={props.handleUsernameChange}
                className="w-full rounded-lg border bg-[#f3f1ff] px-5 py-2 outline-none focus:border-[#6f5bf0]"
                placeholder="Username"
              />
              <input
                type="password"
                name="password"
                id="password"
                required
                onChange={props.handlePasswordChange}
                className="w-full rounded-lg border bg-[#f3f1ff] px-5 py-2 outline-none focus:border-[#6f5bf0]"
                placeholder="Password"
              />
              <input
                type="submit"
                value="Login"
                className="mx-auto mt-3 w-max cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-10 py-2 text-lg font-bold text-white transition-all hover:bg-gradient-to-l"
              />
            </form>
            <hr />
            <p className="text-center">
              Don&apos;t have account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Signup
              </a>{" "}
              to create new account!
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500">
          <div
            className="img h-full w-full"
            style={{
              backgroundImage: `url('${LoginCover}')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
