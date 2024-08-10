import DisplaySelectedContentsHeader from "../components/pos/DisplaySelectedContentsHeader";
import PosCustomerNav from "../components/pos/PosCustomerNav";
import PosRightTopBar from "../components/pos/PosRightTopBar";
import PosTopLeftNav from "../components/pos/PosTopLeftNav";

const POS = () => {
  return (
    <div
      className="box-border"
      //   style={{
      //     height: `${height}px`,
      //   }}
    >
      <div className="pos grid pos-md:w-full pos-md:grid-cols-1 pos-md:gap-[3rem] pos-md:items-center pos-xl:grid-cols-[5fr_4fr] pos-xl:gap-0 pos-xl:items-[initial] pox-xl:m-0 pox-xl:w-[initial] pos-xl:h-[100vh] pos-2xl:grid-cols-[1fr_1fr]">
        {/* POS LEFT */}
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
            <PosTopLeftNav />
            <PosCustomerNav />

            <div className="body__left w-full bg-[#fafafa]">
              <DisplaySelectedContentsHeader />
            </div>
          </div>
        </div>

        {/* POS RIGHT */}
        <div
          // className={`pos__right ${
          //   activeSection === true ? "pos__right-active" : ""
          // }`}
          className="w-full h-[100vh] duration-[0.3s] translate-y-0 overflow-y-scroll pos-md:max-w-full pos-md:block pos-md:overflow-hidden pos-xl:h-[100vh] pos-xl:border-l pos-xl:border-solid pos-xl:border-[#999999]"
        >
          <PosRightTopBar />
        </div>
      </div>
    </div>
  );
};

export default POS;
