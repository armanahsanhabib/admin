/* eslint-disable react/prop-types */
import { FaCode } from "react-icons/fa";
import { FiLogOut, FiPlusSquare } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiFileEditLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import UserPhoto from "../../assets/ahsan habib.jpg";

const Sidebar = (props) => {
  const location = useLocation();

  const NavItem = (props) => {
    return (
      <li>
        <a
          className={`flex w-full items-center gap-2 rounded-lg px-4 py-2 transition-all hover:bg-[#58b4ff] hover:font-semibold hover:text-white ${
            location.pathname === props.href
              ? "bg-[#58b4ff] font-semibold text-white"
              : "bg-[#f3efec]"
          }`}
          href={props.href}
        >
          <div className="icon text-xl">{props.icon}</div>
          {props.title}
        </a>
      </li>
    );
  };

  return (
    <div className="flex w-[350px] flex-col justify-between p-5 pr-0">
      <div className="top flex flex-col gap-8">
        <div className="logo mt-5 flex items-center justify-center gap-2 text-xl">
          <FaCode className="text-2xl" />
          <span className="font-[600]">Ahsan</span>
          <span className="font-[800] text-[#6277ee]">DevHub</span>
        </div>
        <div className="profile flex flex-col items-center">
          <img
            src={UserPhoto}
            alt="dummy profile"
            className="h-[80px] rounded-full border-[5px] border-white"
          />
          <div className="text text-center">
            <h2 className="text-xl font-bold text-gray-800">
              Mr. {props.userData.fullName}
            </h2>
            <p className="text-sm text-gray-500">{props.userData.email}</p>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col gap-4">
            <NavItem
              title="Mailbox"
              href="/"
              icon={<MdOutlineMarkEmailUnread />}
            />
            <NavItem title="Send Mail" href="/send-mail" icon={<LuSend />} />
            <NavItem
              title="My Portfolio"
              href="/my-portfolio"
              icon={<RiFileEditLine />}
            />
            <NavItem
              title="Add New Portfolio"
              href="/add-portfolio"
              icon={<FiPlusSquare />}
            />
          </ul>
        </nav>
      </div>
      <div className="bottom">
        <button
          type="button"
          onClick={() => props.logout()}
          className="flex w-full items-center gap-2 rounded-lg bg-[#f3efec] px-4 py-2 font-semibold transition-all hover:gap-3 hover:bg-[#fa944c] hover:text-white"
        >
          <FiLogOut className="text-xl" />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
