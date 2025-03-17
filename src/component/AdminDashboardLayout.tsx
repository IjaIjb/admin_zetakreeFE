import { ReactNode, useState } from "react";
// import SidebarPage from "./Sidebar";
import Header from "./shared/Header";
import "react-toastify/dist/ReactToastify.css";
import SidebarPage from "./Sidebar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface DashboardLayoutProps {
  children: ReactNode;
}

const AdminDashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  // const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  // const [showNotification, setShowNotification] = useState<boolean>(false);
  // const [openM, setOpen] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("auth_token");

  //   if (!token) {
  //     navigate("/");
  //     toast.error("Please login to access the dashboard.");

  //   }
  // }, [navigate]);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
    setShowSideBar((prev) => !prev);
  };

  // open side Drawer
  const open = () => {
    setOpenDrawer(true);
    // setShowNotification(false);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div
        className={`${
          openDrawer ? "w-0 xl:w-[310px]" : " hidden lg:block"
        } relative left-0 top-0 h-screen`}
      >
        <SidebarPage
          toggle={toggleDrawer}
          DrawerOpen={openDrawer}
          open={open}
        />
      </div>

      {/* Background shadow for sidebar */}
      {(showSideBar || openDrawer) && (
        <div
          className={`w-full h-full block lg:hidden bg-[#747380D1] opacity-[82%] z-[90] fixed top-0 left-0`}
          onClick={() => {
            setOpenDrawer(false);
            setShowSideBar(false);
          }}
        ></div>
      )}

      <div className="w-[100%] bg-gradient-to-t from-[#0F123B] via-[#090D2E] to-[#020515] lg:px-0 px-3 h-screen flex flex-col">
        {/* Header - outside the scrollable area */}
        <div className="mb-7 sticky top-0 w-full backdrop-filter backdrop-blur-md z-50">
          <div className="flex lg:block gap-5 left-0 justify-between relative items-center">
            <button
              onClick={() => {
                // setShowNotification(false);
                setOpenDrawer(!openDrawer);
                setShowSideBar(!showSideBar);
              }}
              className="flex lg:hidden items-center gap-3"
            >
              {openDrawer ? (
                <AiOutlineClose className="w-4 h-4 md:w-6 md:h-6 font-bold" />
              ) : (
                <AiOutlineMenu className="w-6 h-6 md:w-6 md:h-6 text-white font-bold" />
              )}
            </button>
            <div className="lg:hidden bg-[#090F2F] shadow-xl relative w-full z-50 lg:px-[3%] pt-5 px-[1%]">
              <Header />
            </div>
            <div className="hidden lg:block bg-[#090F2F] shadow-xl relative z-50 lg:px-[3%] pt-5 pb-2 px-[1%]">
              <Header />
            </div>
          </div>
        </div>

        {/* Scrollable content area - only for children */}
        <div className="lg:mx-[3%] mx-[1%] scrollbar-hide  h-[calc(100vh-75px)] overflow-y-scroll">
          {/* <BreadcrumbsDisplay /> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
