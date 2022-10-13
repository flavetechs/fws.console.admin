import { useEffect } from "react";

import { bindActionCreators } from "redux";
//circular

// AOS
import AOS from "aos";
import "aos";
import "../../../node_modules/aos/dist/aos.css";
//apexcharts

//swiper
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.scss";

//progressbar
//img

//Count-up
// store
import {
  NavbarstyleAction,
  getDirMode,
  getcustomizerMode,
  getcustomizerprimaryMode,
  getcustomizerinfoMode,
  SchemeDirAction,
  ColorCustomizerAction,
  getNavbarStyleMode,
  getSidebarActiveMode,
  SidebarActiveStyleAction,
  getDarkMode,
  ModeAction,
  SidebarColorAction,
  getSidebarColorMode,
  getSidebarTypeMode,
} from "../../store/setting/setting";
import { connect } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Products from "../../components/fws-clients/fws-product-list";

// install Swiper modules
SwiperCore.use([Navigation]);

const mapStateToProps = (state) => {
  return {
    darkMode: getDarkMode(state),
    customizerMode: getcustomizerMode(state),
    cololrinfomode: getcustomizerinfoMode(state),
    colorprimarymode: getcustomizerprimaryMode(state),
    schemeDirMode: getDirMode(state),
    sidebarcolorMode: getSidebarColorMode(state),
    sidebarTypeMode: getSidebarTypeMode(state),
    sidebaractivestyleMode: getSidebarActiveMode(state),
    navbarstylemode: getNavbarStyleMode(state),
  };
};
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      ModeAction,
      SchemeDirAction,
      SidebarColorAction,
      SidebarActiveStyleAction,
      NavbarstyleAction,
      ColorCustomizerAction,
    },
    dispatch
  ),
});

const ClientIndex = (props) => {
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded",
      disable: function () {
        var maxWidth = 996;
        return window.innerWidth < maxWidth;
      },
      throttleDelay: 10,
      once: true,
      duration: 700,
      offset: 10,
    });
    //   customizer
    const colorcustomizerMode = sessionStorage.getItem("color-customizer-mode");
    const colorcustomizerinfoMode = sessionStorage.getItem(
      "colorcustominfo-mode"
    );
    const colorcustomizerprimaryMode = sessionStorage.getItem(
      "colorcustomprimary-mode"
    );
    if (colorcustomizerMode === null) {
      props.ColorCustomizerAction(
        props.customizerMode,
        props.cololrinfomode,
        props.colorprimarymode
      );
      document.documentElement.style.setProperty(
        "--bs-info",
        props.cololrinfomode
      );
    } else {
      props.ColorCustomizerAction(
        colorcustomizerMode,
        colorcustomizerinfoMode,
        colorcustomizerprimaryMode
      );
      document.documentElement.style.setProperty(
        "--bs-info",
        colorcustomizerinfoMode
      );
    }
  });


  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-lg-3 col-md-6">
          <div className="card bg-info">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-light rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="text-end">
                  <h2 className="counter">
                    <span>5600</span>
                  </h2>
                  Doctors
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card" style={{ backgroundColor: "#f9cd39" }}>
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-light rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="text-end">
                  <h2 className="counter">
                    <span>5600</span>
                  </h2>
                  Nurses
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card" style={{ backgroundColor: "#fc114c" }}>
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-light rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <div className="text-end">
                  <h2 className="counter">
                    <span>3500</span>
                  </h2>
                  Patients
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card" style={{ backgroundColor: "#b3b3f9" }}>
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-light rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="text-end">
                  <h2 className="counter">
                    <span>4500</span>
                  </h2>
                  Pharmacists
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="my-3">Recommended Products</div>
        <Card >
          <Card.Body>
            <Row className="p-3">
              <Products />
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientIndex);
