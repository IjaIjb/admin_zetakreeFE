import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaUsersCog, FaChartBar, FaRegCreditCard, FaRobot, FaUserMd } from "react-icons/fa";
import { IoGiftSharp } from "react-icons/io5";
import { MdNotifications, MdSecurity, MdSettings } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  toggle: () => void;
  DrawerOpen: boolean;
  open: () => void;
};

// Navigation menu structure based on the admin panel features
const navItems = [
  { id: "home", name: "Dashboard", icon: "/images/overview.svg", path: "/dashboard/home" },
  { id: "user-management", name: "User Management", icon: <FaUsersCog />, path: "/dashboard/user-management" },
  { id: "statistics", name: "Statistics & Analytics", icon: <FaChartBar />, path: "/dashboard/statistics" },
  { id: "subscription", name: "Subscription & Payments", icon: <FaRegCreditCard />, path: "/dashboard/subscription" },
  { id: "ai-health", name: "AI & Health Data", icon: <FaRobot />, path: "/dashboard/ai-health" },
  { id: "teleconsultation", name: "Teleconsultation", icon: <FaUserMd />, path: "/dashboard/teleconsultation" },
  { id: "rewards", name: "Rewards & Referrals", icon: <IoGiftSharp />, path: "/dashboard/rewards" },
  { id: "content", name: "Content & Communication", icon: <MdNotifications />, path: "/dashboard/content" },
  { id: "compliance", name: "Compliance & Security", icon: <MdSecurity />, path: "/dashboard/compliance" },
  { id: "system", name: "System & Settings", icon: <MdSettings />, path: "/dashboard/system" },
];

const SidebarPage = (props: Props) => {
  const url = useLocation();
  const { pathname } = url;
  const pathnames = pathname.split("/").filter((x: any) => x);
  const [userData, setUserData] = useState<any>(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Extract the active section from the path
    const currentPath = pathnames[1] || "home";
    setActiveSection(currentPath);
    
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [pathnames]);

  return (
    <aside
      className={`${
        props.DrawerOpen ? "" : ""
      } relative w-[305px] z-[100] bg-[#11162F] scrollbar-hide overflow-y-auto pl-3 pb-8 border-r border-[#ECEDEF] h-screen`}
    >
      <div className="flex items-center justify-between px-2 md:px-4">
        <div className="flex justify-center py-4">
          <Link to={"/"}>
            <img
              aria-hidden
              src="/logo.svg"
              alt="Zetakree logo"
              className="w-14 h-14"
            />
          </Link>
        </div>
        <button
          onClick={() => {
            props.toggle();
          }}
          className=""
        >
          {props.DrawerOpen ? (
            <AiOutlineClose className="w-4 h-4 md:w-6 md:h-6 font-bold text-white " />
          ) : (
            <AiOutlineMenu className="w-4 h-4 md:w-6 md:h-6 font-bold hidden " />
          )}
        </button>
      </div>

      {/* Admin profile section */}
      <div className="px-6 py-4 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
            {userData?.name ? userData.name.charAt(0).toUpperCase() : 'A'}
          </div>
          <div>
            <h4 className="text-white font-medium">{userData?.name || "Admin User"}</h4>
            <p className="text-gray-400 text-sm">{userData?.role || "Administrator"}</p>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="mt-3 flex flex-col gap-3">
        {navItems.map((item) => (
          <div key={item.id} className="">
            <Link to={item.path} className="relative gap-1">
              <div
                className={`${
                  (pathnames.includes(item.id) || 
                  (item.id === "home" && (pathnames.length === 1 || 
                  (pathnames.length === 2 && pathnames[1] === "home"))))
                    ? "bg-[#0C8B01] text-[#FFFFFF]"
                    : "bg-[#9F9F9F33] text-[#FFFFFF] hover:bg-[#9F9F9F55]"
                } gap-x-3 flex items-center px-6 rounded-l-lg py-[14px] transition-colors duration-200`}
              >
                {typeof item.icon === 'string' ? (
                  <img
                    aria-hidden
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={16}
                    height={16}
                  />
                ) : (
                  <div className="text-lg">{item.icon}</div>
                )}
                <h5 className="text-[15px] font-[500]">{item.name}</h5>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Sidebar footer */}
      <div className="px-6 pt-8 mt-auto">
        <div className="p-4 bg-[#060D26] rounded-lg">
          <h4 className="text-[#0C8B01] font-medium mb-2">Need Help?</h4>
          <p className="text-gray-400 text-sm mb-3">Contact our support team for assistance</p>
          <Link to="/dashboard/support" className="block text-center py-2 px-4 bg-[#0C8B01] text-white rounded-md text-sm font-medium hover:bg-[#097001] transition-colors">
            Contact Support
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default SidebarPage;