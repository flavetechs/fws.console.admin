import React, { useEffect } from "react";
import { Row, Col, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
//circular
import Circularprogressbar from "../../components/circularprogressbar.js";

// AOS
import AOS from "aos";
import "../../../node_modules/aos/dist/aos";
import "../../../node_modules/aos/dist/aos.css";
//apexcharts
import Chart from "react-apexcharts";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.scss";

//progressbar
import Progress from "../../components/progress.js";
//img
import shapes1 from "../../assets/images/shapes/01.png";
import shapes2 from "../../assets/images/shapes/02.png";
import shapes3 from "../../assets/images/shapes/03.png";
import shapes4 from "../../assets/images/shapes/04.png";
import shapes5 from "../../assets/images/shapes/05.png";

//Count-up
import CountUp from "react-countup";
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

const Index = (props) => {
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

  const chart1 = {
    options: {
      chart: {
        fontFamily:
          '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      colors: [props.colorprimarymode, props.cololrinfomode],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
          offsetX: -5,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        labels: {
          minHeight: 22,
          maxHeight: 22,
          show: true,
          style: {
            colors: "#8A92A6",
          },
        },
        lines: {
          show: false, //or just here to disable only x axis grids
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug"],
      },
      grid: {
        show: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 0.4,
          opacityTo: 0.1,
          stops: [0, 50, 80],
          colors: [props.colorprimarymode, props.cololrinfomode],
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    series: [
      {
        name: "total",
        data: [94, 80, 94, 80, 94, 80, 94],
      },
      {
        name: "pipline",
        data: [72, 60, 84, 60, 74, 60, 78],
      },
    ],
  };

  //chart2
  const chart2 = {
    options: {
      colors: [props.colorprimarymode, props.cololrinfomode],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 10,
            size: "50%",
          },
          track: {
            margin: 10,
            strokeWidth: "50%",
          },
          dataLabels: {
            show: false,
          },
        },
      },
      labels: ["Apples", "Oranges"],
    },
    series: [55, 75],
  };
  const chart3 = {
    options: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: [props.colorprimarymode, props.cololrinfomode],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "28%",
          endingShape: "rounded",
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S", "M", "T", "W"],
        labels: {
          minHeight: 20,
          maxHeight: 20,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      yaxis: {
        title: {
          text: "",
        },
        labels: {
          minWidth: 19,
          maxWidth: 19,
          style: {
            colors: "#8A92A6",
          },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
    series: [
      {
        name: "Successful deals",
        data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35],
      },
      {
        name: "Failed deals",
        data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55],
      },
    ],
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="text-center">AVG Impressions</div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div>
                  <h2 className="counter">
                    <span>2.648</span>
                  </h2>
                  26.84%
                </div>
                <div className="border  bg-soft-danger rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className="progress bg-soft-danger shadow-none w-100"
                  style={{ height: "6px" }}
                >
                  <div
                    className="progress-bar bg-danger"
                    data-toggle="progress-bar"
                    role="progressbar"
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "50%", transition: "width 2s ease 0s" }}
                  ></div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="text-center">AVG Engagements Rate</div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div>
                  <h2 className="counter">
                    <span>2.648</span>
                  </h2>
                  26.84%
                </div>
                <div className="border bg-soft-info rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className="progress bg-soft-info shadow-none w-100"
                  style={{ height: "6px" }}
                >
                  <div
                    className="progress-bar bg-info"
                    data-toggle="progress-bar"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "70%", transition: "width 2s ease 0s" }}
                  ></div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="text-center">AVG Reach</div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div>
                  <h2 className="counter">
                    <span>2.648</span>
                  </h2>
                  26.84%
                </div>
                <div className="border bg-soft-success rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className="progress bg-soft-success shadow-none w-100"
                  style={{ height: "6px" }}
                >
                  <div
                    className="progress-bar bg-success"
                    data-toggle="progress-bar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%", transition: "width 2s ease 0s" }}
                  ></div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="text-center">AVG Transport</div>
              <div className="d-flex align-items-center justify-content-between mt-3">
                <div>
                  <h2 className="counter">
                    <span>2.648</span>
                  </h2>
                  26.84%
                </div>
                <div className="border  bg-soft-primary rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className="progress bg-soft-primary shadow-none w-100"
                  style={{ height: "6px" }}
                >
                  <div
                    className="progress-bar bg-primary"
                    data-toggle="progress-bar"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "60%", transition: "width 2s ease 0s" }}
                  ></div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-lg-3 col-md-6">
          <div className="card bg-soft-info">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-soft-info rounded p-3">
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
          <div className="card bg-soft-warning">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-soft-warning rounded p-3">
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
          <div className="card bg-soft-danger">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-soft-danger rounded p-3">
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
          <div className="card bg-soft-primary">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-soft-primary rounded p-3">
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
        <div className="col-lg-3 col-md-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-info text-white rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="text-end">
                  Customers
                  <h2 className="counter">
                    <span>75</span>
                  </h2>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-warning text-white rounded p-3">
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
                  Products
                  <h2 className="counter">
                    <span>60</span>
                  </h2>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-success text-white rounded p-3">
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
                  User
                  <h2 className="counter">
                    <span>80</span>
                  </h2>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div className="bg-danger text-white rounded p-3">
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
                  Category
                  <h2 className="counter">
                    <span>45</span>
                  </h2>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card border-bottom border-4 border-0 border-primary">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span>Worked Today</span>
                </div>
                <div>
                  <span>08:00 Hr</span>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card border-bottom border-4 border-0 border-info">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span>Worked Week</span>
                </div>
                <div>
                  <span>40:00 Hr</span>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card border-bottom border-4 border-0 border-danger">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span>Worked Issue</span>
                </div>
                <div>
                  <span className="counter">
                    <span>1200</span>
                  </span>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card border-bottom border-4 border-0 border-warning">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span>Worked Income</span>
                </div>
                <div>
                  <span className="counter">
                    $<span>54000</span>
                  </span>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex justify-content-between align-itmes-center">
                <div>
                  <div className="p-3 rounded bg-soft-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h1>21K</h1>
                  <p className="mb-0">Order Served</p>
                </div>
                <div>
                  <div className="badge bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                         fillRule="evenodd"
                        d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                         clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>3.48%</span>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex align-items-center justify-content-between">
                <div className=" bg-soft-success rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h1 className="counter text-success">
                    <span>250</span>M
                  </h1>
                  <p className="text-success mb-0">Total Earning</p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="d-flex align-items-center">
                <div className=" bg-soft-info rounded p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div className="ms-5">
                  <h5 className="mb-1">Positive Reviews</h5>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      color="orange"
                      fill="orange"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      color="orange"
                      fill="orange"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      color="orange"
                      fill="orange"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      color="orange"
                      fill="orange"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      color="orange"
                      fill="orange"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                  </div>
                  <h6 className="text-info">4.5/5</h6>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <h2 className="counter">
                $<span>3450</span>
              </h2>
              <p className="mb-2">Your Current Balance</p>
              <h6>20% ($520)</h6>
              <a
                className="mt-4 btn btn-danger d-block rounded"
                href="/hope-ui/react/build/dashboard/widget/widgetbasic"
              >
                Add credit
              </a>
              <div className="mt-3">
                <div className="pb-3">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="mb-0">Insurance</p>
                    <h4>18</h4>
                  </div>
                  <div
                    className="progress bg-soft-info shadow-none w-100"
                    style={{ height: "10px" }}
                  >
                    <div
                      className="progress-bar bg-info"
                      data-toggle="progress-bar"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: " 60%",
                        transition: "width 2s ease 0s",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="pb-3">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="mb-0">Savings</p>
                    <h4>124</h4>
                  </div>
                  <div
                    className="progress bg-soft-success shadow-none w-100"
                    style={{ height: "10px" }}
                  >
                    <div
                      className="progress-bar bg-success"
                      data-toggle="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%", transition: "width 2s ease 0s" }}
                    ></div>
                  </div>
                </div>
                <div className="pb-3">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="mb-0">Investment</p>
                    <h4>74</h4>
                  </div>
                  <div
                    className="progress bg-soft-primary shadow-none w-100"
                    style={{ height: "10px" }}
                  >
                    <div
                      className="progress-bar bg-primary"
                      data-toggle="progress-bar"
                      role="progressbar"
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "55%", transition: "width 2s ease 0s" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <p className="mb-0">Progress</p>
                    <h4>89</h4>
                  </div>
                  <div
                    className="progress bg-soft-success shadow-none w-100"
                    style={{ height: "10px" }}
                  >
                    <div
                      className="progress-bar bg-success"
                      data-toggle="progress-bar"
                      role="progressbar"
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "89%", transition: "width 2s ease 0s" }}
                    ></div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card ">
                {" "}
                <div className="card-body ">
                  {" "}
                  <div className="d-flex flex-column align-items-between">
                    <div>
                      <div className="d-flex">
                        <div className="bg-primary text-white p-3 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span>CUSTOMER</span>
                      <div>
                        <h3 className="counter">
                          <span>60,586</span>
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="badge bg-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                             fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                             clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>3.48%</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="card ">
                {" "}
                <div className="card-body ">
                  {" "}
                  <div className="d-flex flex-column align-items-between">
                    <div>
                      <div className="d-flex">
                        <div className="bg-warning text-white p-3 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth="2"
                              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span>SALES</span>
                      <div>
                        <h3 className="counter">
                          <span>80,586</span>
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="badge bg-warning">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                             fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                             clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>3.48%</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card ">
                {" "}
                <div className="card-body ">
                  {" "}
                  <div className="d-flex flex-column align-items-between">
                    <div>
                      <div className="d-flex">
                        <div className="bg-info text-white p-3 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth="2"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span>PROFIT</span>
                      <div>
                        <h3 className="counter">
                          <span>80</span>%
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="badge bg-info">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                             fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                             clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>3.48%</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="card ">
                {" "}
                <div className="card-body ">
                  {" "}
                  <div className="d-flex flex-column align-items-between">
                    <div>
                      <div className="d-flex">
                        <div className="bg-danger text-white p-3 rounded">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25px"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                               strokeLinecap="round"
                               strokeLinejoin="round"
                               strokeWidth="2"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span>LOSS</span>
                      <div>
                        <h3 className="counter">
                          <span>15</span>%
                        </h3>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="badge bg-danger">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                             fillRule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                             clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>3.48%</span>
                      </div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card ">
            {" "}
            <div className="card-body p-3">
              {" "}
              <h5>Assets</h5>
              <div className="text-center">
                <h1 className="counter">
                  -<span>108.56</span>K
                </h1>
                <p className="mb-0">Lorem ipsum dolor sit amet</p>
              </div>{" "}
            </div>{" "}
          </div>
          <div className="card ">
            {" "}
            <div className="card-body p-3">
              {" "}
              <h5>Liabilities</h5>
              <div className="text-center">
                <h1 className="counter">
                  -<span>425.20</span>K
                </h1>
                <p className="mb-0">Lorem ipsum dolor sit amet</p>
              </div>{" "}
            </div>{" "}
          </div>
          <div className="card ">
            {" "}
            <div className="card-body p-3">
              {" "}
              <h5>Working Capital</h5>
              <div className="text-center">
                <h1 className="counter">
                  -<span>380.40</span>K
                </h1>
                <p className="mb-0">Lorem ipsum dolor sit amet</p>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-md-6">
              <div className="card ">
                {" "}
                <div className="card-body ">
                  {" "}
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>
                        <b>Revenue</b>
                      </span>
                      <div className="mt-2">
                        <h2 className="counter">
                          $<span>35000</span>
                        </h2>
                      </div>
                    </div>
                    <div>
                      <span className="badge bg-primary">Monthly</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <span>Total Revenue</span>
                    </div>
                    <div>
                      <span>35%</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      className="progress bg-soft-primary shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-primary"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                       style={{ width: "70%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="card ">
                {" "}
                <div className="card-body ">
                  {" "}
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>
                        <b>Orders</b>
                      </span>
                      <div className="mt-2">
                        <h2 className="counter">
                          <span>2500</span>
                        </h2>
                      </div>
                    </div>
                    <div>
                      <span className="badge bg-warning">Anual</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <span>New Orders</span>
                    </div>
                    <div>
                      <span>24%</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      className="progress bg-soft-warning shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-warning"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="24"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "24%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card ">
                {" "}
                <div className="card-body ">
                  {" "}
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>
                        <b>Leads</b>
                      </span>
                      <div className="mt-2">
                        <h2 className="counter">
                          $<span>35000</span>
                        </h2>
                      </div>
                    </div>
                    <div>
                      <span className="badge bg-danger">Today</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <span>New Leads</span>
                    </div>
                    <div>
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      className="progress bg-soft-danger shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-danger"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "50%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            <div className="col-md-6">
              <div className="card ">
                {" "}
                <div className="card-body ">
                  {" "}
                  <div className="d-flex justify-content-between">
                    <div>
                      <span>
                        <b>Conversion</b>
                      </span>
                      <div className="mt-2">
                        <h2 className="counter">
                          <span>35</span>%
                        </h2>
                      </div>
                    </div>
                    <div>
                      <span className="badge bg-info">This Month</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <span>This Month</span>
                    </div>
                    <div>
                      <span className="counter">30%</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      className="progress bg-soft-info shadow-none w-100"
                      style={{ height: "6px" }}
                    >
                      <div
                        className="progress-bar bg-info"
                        data-toggle="progress-bar"
                        role="progressbar"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "30%", transition: "width 2s ease 0s" }}
                      ></div>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card ">
            {" "}
            <div className="card-body ">
              {" "}
              <div className="border-bottom text-center pb-3">
                <img
                  src="https://templates.iqonic.design/hope-ui/react/build/static/media/01.156de087.png"
                  alt="profile-pic"
                  className="theme-color-default-img  img-fluid avatar-80 mb-4"
                />
                <img
                  src="https://templates.iqonic.design/hope-ui/react/build/static/media/avtar_1.2b0f5677.png"
                  alt="profile-pic"
                  className="theme-color-purple-img img-fluid avatar-80 mb-4"
                />
                <img
                  src="https://templates.iqonic.design/hope-ui/react/build/static/media/avtar_2.839c445e.png"
                  alt="profile-pic"
                  className="theme-color-blue-img img-fluid avatar-80 mb-4"
                />
                <img
                  src="https://templates.iqonic.design/hope-ui/react/build/static/media/avtar_4.027f8ab6.png"
                  alt="profile-pic"
                  className="theme-color-green-img img-fluid avatar-80 mb-4"
                />
                <img
                  src="https://templates.iqonic.design/hope-ui/react/build/static/media/avtar_5.4fb8c4d3.png"
                  alt="profile-pic"
                  className="theme-color-yellow-img img-fluid avatar-80 mb-4"
                />
                <img
                  src="https://templates.iqonic.design/hope-ui/react/build/static/media/avtar_3.54ad9669.png"
                  alt="profile-pic"
                  className="theme-color-pink-img img-fluid avatar-80 mb-4"
                />
                <div>
                  <h5 className="mb-3">Bini Jets</h5>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in
                  arcu turpis. Nunc
                </p>
                <button type="button" className="btn btn-info mb-2">
                  Assign
                </button>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <div>
                  <h2 className="counter">
                    <span>4500</span>
                  </h2>
                  <div>Operations</div>
                </div>
                <div>
                  <h2 className="mb-0">3.9</h2>
                  <div>Medical Rating</div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
