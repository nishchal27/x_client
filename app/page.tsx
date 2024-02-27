import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { GoHomeFill, GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { PiBellBold } from "react-icons/pi";
import { BiEnvelope } from "react-icons/bi";
import { RiFileList2Fill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHome />,
    activeIcon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <IoSearch />,
  },
  {
    title: "Notifications",
    icon: <PiBellBold />,
  },
  {
    title: "Messages",
    icon: <BiEnvelope />,
  },
  {
    title: "Lists",
    icon: <RiFileList2Fill />,
  },
  {
    title: "Profile",
    icon: <HiOutlineUser />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-8 px-4">
          <div className="text-3xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <BsTwitterX />
          </div>
          <div className="mt-4 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.title}
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full w-fit
                   px-5 py-2 cursor-pointer transition-all mt-2"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="active:font-semibold">{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <button className="bg-[#1d9bf0] p-3 text-lg rounded-full w-full ">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
