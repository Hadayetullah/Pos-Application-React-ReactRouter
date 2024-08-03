import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFileLines,
  faTruck,
  faLayerGroup,
  faCirclePlus,
  faCircleUser,
  faMagnifyingGlass,
  faQrcode,
  faCircleMinus,
  faDollarSign,
  faGear,
  faHandBackFist,
  faPercent,
  faMoneyBill1Wave,
  faEllipsisVertical,
  faMessage,
  faFlag,
  faAnglesUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleXmark,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";

const PosTopLeftNav = () => {
  return (
    <nav className="left__nav__top grid grid-cols-[max-content_1fr] gap-[0.75rem] items-center bg-white h-[60px] max-w-full p-2.5">
      <FontAwesomeIcon
        icon={faBars}
        className="pos__left__bar text-[25px] p-[5px_0_0_20px] text-[#6F6F6F] pos-md:m-[1px 25px 0px 25px] pos-md:text-[#e6e8ea] pos-md:text-[33px] pos-md:font-black pos-md:p-0 pos-xl:m-[1px_15px_0_25px] pos-xl:text-[30px]"
      />
      <div className="left__nav__top-items grid grid-cols-[1fr_1fr_1fr_1fr] gap-[1px] pos-md:inline-flex pos-md:gap-x-4 pos-md:justify-between pos-md:min-w-full pos-md:grid pos-md:gap-x-1">
        <button className="left__nav__top-item inline-flex items-center flex-col-reverse text-[#6F6F6F] border-0 cursor-pointer bg-[#e6e8ea] h-[50px] justify-center rounded pos-md:flex-row pos-md:justify-items-center pos-md:p-[0_13px] pos-md:font-bold pos-md:h-[40px] pos-md:gap-x-2 pos-lg:w-full pos-xl:p-0 pos-xl:h-[35px] pos-xl:gap-x-1">
          <FontAwesomeIcon icon={faFileLines} className="left__nav__top-icon" />
          <span className="text-[13px] font-semibold pos-md:text-[17px] pox-xl:text-[14px]">
            Note
          </span>
        </button>
        <button className="left__nav__top-item inline-flex items-center flex-col-reverse text-[#6F6F6F] border-0 cursor-pointer bg-[#e6e8ea] h-[50px] justify-center rounded pos-md:flex-row pos-md:justify-items-center pos-md:p-[0_13px] pos-md:font-bold pos-md:h-[40px] pos-md:gap-x-2 pos-lg:w-full pos-xl:p-0 pos-xl:h-[35px] pos-xl:gap-x-1">
          <FontAwesomeIcon icon={faTruck} className="left__nav__top-icon" />
          <span className="text-[13px] font-semibold pos-md:text-[17px] pox-xl:text-[14px]">
            Shipping
          </span>
        </button>
        <button className="left__nav__top-item inline-flex items-center flex-col-reverse text-[#6F6F6F] border-0 cursor-pointer bg-[#e6e8ea] h-[50px] justify-center rounded pos-md:flex-row pos-md:justify-items-center pos-md:p-[0_13px] pos-md:font-bold pos-md:h-[40px] pos-md:gap-x-2 pos-lg:w-full pos-xl:p-0 pos-xl:h-[35px] pos-xl:gap-x-1">
          <FontAwesomeIcon
            icon={faLayerGroup}
            className="left__nav__top-icon"
          />
          <span className="text-[13px] font-semibold pos-md:text-[17px] pox-xl:text-[14px]">
            Hold Orders
          </span>
        </button>
        <button className="left__nav__top-item inline-flex items-center flex-col-reverse text-[#6F6F6F] border-0 cursor-pointer bg-[#e6e8ea] h-[50px] justify-center rounded pos-md:flex-row pos-md:justify-items-center pos-md:p-[0_13px] pos-md:font-bold pos-md:h-[40px] pos-md:gap-x-2 pos-lg:w-full pos-xl:p-0 pos-xl:h-[35px] pos-xl:gap-x-1">
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="left__nav__top-icon"
          />
          <span className="text-[13px] font-semibold pos-md:text-[17px] pox-xl:text-[14px]">
            New Item
          </span>
        </button>
      </div>
    </nav>
  );
};

export default PosTopLeftNav;
