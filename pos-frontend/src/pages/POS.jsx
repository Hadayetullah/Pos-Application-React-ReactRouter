import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const POS = () => {
  return (
    <div
      className="box-border"
      //   style={{
      //     height: `${height}px`,
      //   }}
    >
      <div className="pos-md:w-full pos-md:grid pos-md:grid-cols-1 pos-md:gap-[3px] pos-md:items-center pos-xl:grid-cols-[5fr_4fr] pos-xl:gap-0 pos-xl:items-baseline pos-2xl:grid-cols-[1fr_1fr]">
        <div
          //   className={`pos__left ${
          //     activeSection === true ? "pos__left-deactive" : ""
          //   }`}
          //   style={{
          //     height: `${height}px`,
          //   }}

          className="w-full bg-white overflow-hidden duration-300 translate-y-0 relative pos-2xl:max-w-full pos-xl:h-full"
        >
          <div
            // className="pos__left__main"
            // style={{
            //   height: `${height}px`,
            // }}
            className="w-full bg-white overflow-y-scroll duration-[0.3s] translate-y-0 pos-md:min-w-[580px] pos-md:max-w-full pos-md:overflow-y-hidden"
          >
            <div>
              <nav className="left__nav__top grid grid-cols-[max-content_1fr] gap-[0.75rem] items-center bg-white h-[60px] max-w-full p-2.5">
                POS
              </nav>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POS;
