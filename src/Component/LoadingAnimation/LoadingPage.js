import LoadingAnimation from "./LoadingAnimation";
import "../../Stylesheet/loadingPage.css"

const LoadingPage = () => {
  return (
    <div className="loadingPageFull">
      {/* <div className="ripple"> */}
          <LoadingAnimation />
      {/* </div> */}
    </div>
  );
};

export default LoadingPage;
