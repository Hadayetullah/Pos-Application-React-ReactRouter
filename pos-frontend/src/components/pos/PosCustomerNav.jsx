import React from "react";
import { Link } from "react-router-dom";
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

const PosCustomerNav = () => {
  return (
    <nav className="left__nav__bottom flex justify-between h-[45px] items-center rounded-[3px] px-[20px] bg-[#e6e8ea] m-[10px]">
      <div className="left__nav__bottom-left flex items-center">
        <FontAwesomeIcon
          icon={faCircleUser}
          className="left__nav__bottom-icon text-[#6F6F6F] text-[27px] pos-md:text-[35px]"
        />
        <span className="ml-[10px]">No active customer!</span>
      </div>

      <Link to={`pos/add-customer`}>
        <FontAwesomeIcon
          icon={faCirclePlus}
          className="left__nav__bottom-icon text-[#6F6F6F] text-[27px] pos-md:text-[35px]"
        />
      </Link>
    </nav>
  );
};

export default PosCustomerNav;
