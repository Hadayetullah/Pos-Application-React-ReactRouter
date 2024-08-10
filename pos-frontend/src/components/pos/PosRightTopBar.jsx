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

const PosRightTopBar = () => {
  return (
    <nav className="right__nav__top max-w-full flex justify-between items-center justify-items-center h-[50px] shadow-[0px_2px_9px_-3px_hex(#333)]">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="right__nav__top-search float-left w-[30px] h-[30px] my-[20px] text-[#676767] pos-md:ml-[30px]"
      />
      {/* <input onChange={(e)=>handelSearch(e)} type="text" className="right__nav__top-input" placeholder='Search Products...' /> */}
      {/* <SearchProducts
        data={state.pos.products}
        handleSelectData={handleSelectData}
      /> */}
      <FontAwesomeIcon
        icon={faQrcode}
        className="right__nav__top-qr float-right ml-auto mr-[20px] w-[35px] h-[35px] text-[#676767]"
      />
    </nav>
  );
};

export default PosRightTopBar;
