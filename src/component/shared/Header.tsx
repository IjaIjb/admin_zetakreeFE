import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadscrumbDisplay from "./BreadscrumbDisplay";
import { FaRegBell } from "react-icons/fa";
// import { logoutUser } from "@/store/redux/actions/AuthAction";
// import { useAppDispatch } from "@/store/redux/store";



const Header = () => {
  // const dispatch = useAppDispatch(); // Access `dispatch`
  // const navigate = useNavigate();

  // const [open, setOpen] = useState(false);

  // const onOpenModal = () => {
  //   // e.preventDefault();
  //   setOpen(true);
  // };
  // const onCloseModal = () => setOpen(false);

  // const handleDetails = () => {
  //   onOpenModal(); // Open the modal
  // };

  // const [userData, setUserData] = useState<UserData | null>(null);

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("user");
  //   if (storedUserData) {
  //     setUserData(JSON.parse(storedUserData));
  //   }
  // }, []);

  //
  // const handleLogout = () => {
  //   dispatch(logoutUser());
  //   // Clear user data from localStorage
  //   localStorage.removeItem("auth_token");
  //   localStorage.removeItem("user");

  //   // Redirect to login page
  //   navigate("/");

  //   toast.success("You have successfully logged out.");
  // };

  return (
    <div className="z-50 relative">
      {/* desktop screen */}
      {/* {loading ? (
        <div className="flex justify-center items-center h-screen">
        loading...
        </div>
      ) : ( */}
      <div className="lg:flex hidden relative justify-between z-50 items-center gap-[150px] ">
        <BreadscrumbDisplay />

        <div className="flex z-50 items-center gap-10">
          <div className="relative">
            {/* <img src="/images/Bell.svg" alt="/" /> */}
            <FaRegBell className="text-gray-400 w-8 h-8" />
            <div className="absolute -top-3 -right-3 flex justify-center items-center text-white  bg-black h-7 w-7 rounded-full">
              13
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col">
              <h3 className="text-gray-400 text-[14px]">Joseph</h3>
              <h5 className="text-gray-200 text-[12px]">Super Admin</h5>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      {/* mobile screen */}
      <div className=" lg:hidden ">
        <div className="flex relative justify-between z-50 items-center  ">
          <BreadscrumbDisplay />

          <div className="flex z-50 items-center gap-10">
            <div className="relative">
              {/* <img src="/images/Bell.svg" alt="/" /> */}
              <FaRegBell className="text-gray-400 w-8 h-8" />
              <div className="absolute -top-3 -right-3 flex justify-center items-center text-white  bg-black h-7 w-7 rounded-full">
                13
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col">
                <h3 className="text-gray-400 text-[14px]">Joseph</h3>
                <h5 className="text-gray-200 text-[12px]">Super Admin</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Header;
