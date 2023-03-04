import React, { useState, useEffect, useRef } from "react";
import { Icon } from "semantic-ui-react";
import { feedbackData } from "../feedbackData";
import { Rate } from "antd";

import cartImg from "../Images/cartImg.png";
import randomPhoto from "../Images/randomPhoto.png";
import check from "../Images/check.png";
import yourTasksImg from "../Images/yourTasks.png";
import totalMembersImg from "../Images/totalMembers.png";
import aPicImg from "../Images/aPic.png";
import xImg1 from "../Images/xImg1.png";
import xImg2 from "../Images/xImg2.png";

import adidas from "../Images/adidas.png";
import chanel from "../Images/chanel.png";
import gucci from "../Images/gucci.png";
import lv from "../Images/lv.png";
import rolex from "../Images/rolex.png";
import burberry from "../Images/burberry.png";
import DnG from "../Images/DnG.png";

const Home = () => {
  const sliderImages = [adidas, chanel, gucci, lv, rolex, burberry, DnG];
  const cardsList1 = [
    "Public and private chat",
    "Event scheduler",
    "Appointment scheduling",
    "No prior credit card required",
    "Group video calls",
    "Charity Stream",
    "Public and private chat ",
    "Event scheduler ",
    "Appointment scheduling ",
    "No prior credit card required ",
    "Group video calls ",
    "Charity Stream ",
    "Public and private chat  ",
    "Event scheduler  ",
    "Appointment scheduling  ",
    "No prior credit card required  ",
    "Group video calls  ",
    "Charity Stream  ",
    "Public and private chat   ",
    "Event scheduler   ",
    "Appointment scheduling   ",
    "No prior credit card required   ",
    "Group video calls   ",
    "Charity Stream   ",
  ];
  const cardsList2 = [
    "Event scheduler",
    "Expert on demand call",
    "Email support 24/7",
    "Group video calls",
    "Activity Streams",
    "Charity Stream",
    "Event scheduler ",
    "Expert on demand call ",
    "Email support 24/7 ",
    "Group video calls ",
    "Activity Streams ",
    "Charity Stream ",
    "Event scheduler  ",
    "Expert on demand call  ",
    "Email support 24/7  ",
    "Group video calls  ",
    "Activity Streams  ",
    "Charity Stream  ",
    "Event scheduler   ",
    "Expert on demand call   ",
    "Email support 24/7   ",
    "Group video calls   ",
    "Activity Streams   ",
    "Charity Stream   ",
  ];
  const [index, setIndex] = useState(0);
  const sliderRef = useRef();
  let count = 0;

  const [ordersThisMonth, setOrdersThisMonth] = useState(0);
  const [teamProjects, setTeamProjects] = useState(0);
  const [activeProjects, setActiveProjects] = useState(0);
  const [totalBudget, setTotalBudget] = useState(0);
  const [incInOrders, setIncInOrders] = useState(0);

  /*Following array used in useState are temporary.
    They will be added in MongoDB later, may be during backend.
    */
/*
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Fred Marcos",
      department: "Finance",
    },
    {
      name: "Mark Tesla",
      department: "Marketing",
    },
    {
      name: "Elan Lanvend",
      department: "Tech",
    },
  ]);
  const [gitHubLinks, setGitHubLinks] = useState([
    {
      name: "Fred Marcos",
      department: "Finance",
    },
    {
      name: "Mark Tesla",
      department: "Marketing",
    },
  ]);
  const [yourTasks, setYourTasks] = useState([
    {
      task: "Get your soft done",
      status: "Completed",
    },
    {
      task: "Get your soft done",
      status: "Done",
    },
    {
      task: "Hire this guy",
      status: "Pending",
    },
  ]);
*/
  const handleLeftBtnClick1 = () => {
    let slider = document.getElementById("feedbackSlider1");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const handleRightBtnClick1 = () => {
    let slider = document.getElementById("feedbackSlider1");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const handleLeftBtnClick2 = () => {
    let slider = document.getElementById("feedbackSlider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const handleRightBtnClick2 = () => {
    let slider = document.getElementById("feedbackSlider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const toggleHamburger = () => {
    document.getElementById("slideoverBG").classList.toggle("invisible");
    document
      .getElementById("slideroverContainer")
      .classList.toggle("invisible");
    document.getElementById("slideover").classList.toggle("translate-x-full");
  };

  const removeAnimation = () => sliderRef.current.classList.remove("fade-anim");

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.addEventListener("animationend", removeAnimation);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      count = (count + 1) % sliderImages.length;
      setIndex(count);
      sliderRef.current.classList.add("fade-anim");
    }, 6000);

    setOrdersThisMonth(48);
    setTeamProjects(4);
    setActiveProjects(42);
    setTotalBudget(54);
    setIncInOrders(23);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="homeComponent bg-bgColor w-screen overflow-hidden"
      id="homeComp"
    >
      <div className="navbar flex justify-between items-center px-6 py-4 mx-4">
        <div className="brandName flex space-x-2">
          <div className="brandLogo bg-logoColor p-2 laptop:p-3 desktop:p-4 rounded-lg">
            <div className="line h-0.5 w-3.5 my-1.5 bg-white"></div>
            <div className="line h-0.5 w-3.5 my-1.5 bg-white"></div>
          </div>
          <div className="brandName font-bold m-auto text-xl laptop:text-2xl desktop:text-3xl">Pepper</div>
        </div>
        <div className="navbarMenu text-xl desktop:text-2xl hidden laptop:flex laptop:flex-row laptop:flex:col justify-center space-x-5 desktop:space-x-7 HD:space-x-10">
          <div>
            <a
              href="#god4l"
              className="text-headingColor no-underline hover:no-underline hover:text-headingColor"
            >
              About
            </a>
          </div>
          <div>
            <a
              href="#god4l"
              className="text-headingColor no-underline hover:no-underline hover:text-headingColor"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#god4l"
              className="text-headingColor no-underline hover:no-underline hover:text-headingColor"
            >
              Pricing
            </a>
          </div>
          <div>
            <a
              href="#god4l"
              className="text-headingColor no-underline hover:no-underline hover:text-headingColor"
            >
              Careers
            </a>
          </div>
          <div>
            <a
              href="#god4l"
              className="text-headingColor no-underline hover:no-underline hover:text-headingColor"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="loginDiv space-x-6 HD:space-x-8 px-6 hidden laptop:flex">
          <div className="cartDiv flex">
            <div className="cartIcon flex space-x-1 HD:space-x-2 m-auto">
              <img src={cartImg} alt="cart" width={"20em"} />
              <div className="cart m-auto text-logoColor text-lg HD:text-2xl">Cart</div>
            </div>
          </div>
          <button className="text-logoColor border border-logoColor rounded-xl px-3 py-2 HD:text-xl HD:px-4 HD:py3">
            Login
          </button>
          <button className="bg-logoColor text-white border border-logoColor HD:text-xl HD:px-4 HD:py3 rounded-xl px-3 py-2 mb-4 tablet:mb-0">
            Get Started
          </button>
        </div>
        
        <div className="hamburgerDiv flex space-x-4 px-6 laptop:hidden">
        <div className="cartDiv flex">
            <div className="cartIcon flex space-x-1 m-auto">
              <img src={cartImg} alt="cart" width={"20em"} />
              <div className="cart m-auto text-logoColor text-lg">Cart</div>
            </div>
          </div>
          <button
            className="hamburger bg-logoColor px-4 py-3 rounded-xl"
            onClick={toggleHamburger}
          >
            <div className="line h-0.5 w-4 my-1.5 bg-white"></div>
            <div className="line h-0.5 w-4 my-1.5 bg-white"></div>
            <div className="line h-0.5 w-4 my-1.5 bg-white"></div>
          </button>
        </div>

        <div
          className="mobileNavbar fixed inset-0 w-full z-50 h-screen invisible"
          id="slideroverContainer"
        >
          <div
            className="slideoverBG absolute duration-500 ease-out transition-all w-full h-screen bg-white opacity-50 right-0 top-0 translate-x-full"
            id="slideoverBG"
          ></div>
          <div
            className="absolute duration-500 ease-out transition-all w-full h-full bg-logoColor right-0 top-0 translate-x-full"
            id="slideover"
          >
            <div className="HBheader flex w-fit ml-auto mt-3 mr-3">
              <button onClick={toggleHamburger}>
                <Icon name="close" size="big" className="text-white" />
              </button>
            </div>
            <div className="HBcontent mt-10">
              <a
                href="#god4l"
                className="linkRouter no-underline hover:text-white hover:no-underline"
              >
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">
                  About
                </div>
              </a>
              <a
                href="#god4l"
                className="linkRouter no-underline hover:text-white hover:no-underline"
              >
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">
                  Blog
                </div>
              </a>
              <a
                href="#god4l"
                className="linkRouter no-underline hover:text-white hover:no-underline"
              >
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">
                  Pricing
                </div>
              </a>
              <a
                href="#god4l"
                className="linkRouter no-underline hover:text-white hover:no-underline"
              >
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">
                  Careers
                </div>
              </a>
              <a
                href="#god4l"
                className="linkRouter no-underline hover:text-white hover:no-underline"
              >
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">
                  Contact
                </div>
              </a>
              <a
                href="#god4l"
                className="linkRouter no-underline hover:text-white hover:no-underline"
              >
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">
                  Login
                </div>
              </a>
              <a
                href="#god4l"
                className="linkRouter no-underline hover:text-white hover:no-underline"
              >
                <div className="HBContentItem text-white text-2xl text-center py-5 hover:bg-HBhoverColor">
                  Get Started
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="headingDiv flex justify-center mt-16">
        <div className="heading w-5/6 text-center">
          <p className="text-4xl laptop:text-5xl HD:text-6xl font-bold mb-3 text-headingColor">
            Save more and get your finances right
          </p>
          <p className="text-xl laptop:text-2xl HD:text-3xl text-subHeadingColor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel vitae
            neque, mollitia quod sapiente quaerat.
          </p>
          <button className="requestADemo mt-10 w-48 HD:w-64 px-6 py-5 bg-logoColor rounded-3xl">
            <p className="btnTetx text-white text-lg HD:text-xl">Request a demo</p>
          </button>
        </div>
      </div>

      <div className="statisctics w-full px-1 mt-10 mb-36 HD:mt-36">
        <div className="bg-transparent flex justify-center space-x-24">
          <div className="stats bg-transparent flex items-center p-3 space-x-6">
            <div className="bg-headingColor flex h-fit space-x-2 py-4 px-5 rounded-xl">
              <div className="w-[80%] text-white">
                <p className="tablet:text-5xl font-semibold ">
                  {ordersThisMonth}
                </p>
                <p className="tablet:text-xl">New orders this month</p>
              </div>
              <div className="w-[20%] flex items-center bg-green-400 justify-center rounded-2xl px-7 py-3">
                <Icon name="line graph" size="big" className="text-green-900" />
              </div>
            </div>

            <div className="block">
              <div className="flex flex-col justify-center mt-4">
                <div className=" bg-headingColor flex space-x-2 py-5 px-6 rounded-xl">
                  <div className="text-white flex flex-col">
                    <p className="tablet:text-5xl font-semibold text-center">
                      {teamProjects}
                    </p>
                    <p className="tablet:text-xl">Team projects</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center mt-4">
                <div className=" bg-headingColor flex space-x-2 py-5 px-6 rounded-xl">
                  <div className="text-white flex flex-col">
                    <p className="tablet:text-5xl font-semibold text-center">
                      {activeProjects}
                    </p>
                    <p className="tablet:text-xl">+ Active projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats bg-transparent p-3 hidden laptop:flex">
            <div className="">
              <img src={totalMembersImg} alt="total members" />
            </div>
          </div>

          <div className="stats bg-transparent hidden p-3 desktop:block">
            <div className="bg-headingColor flex flex-col space-x-2 py-5 px-6 rounded-xl">
              <div className="text-center text-white tablet:text-xl font-semibold">
                Total Budget
              </div>
              <div className="flex justify-center my-10">
                <div
                  className="radial-progress text-white"
                  style={{ "--value": 54 }}
                >{`${totalBudget}%`}</div>
              </div>
              <div className="flex justify-between space-x-6">
                <p>Increase in orders</p>
                <div className="flex space-x-2">
                  <div className="flex items-center bg-green-400 justify-center rounded-xl px-2 py-1">
                    <Icon
                      name="line graph"
                      size="small"
                      className="text-green-900"
                    />
                  </div>
                  <p>{`${incInOrders}%`}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats bg-transparent p-3 hidden desktop:block">
            <div className="bg-headingColor flex flex-col space-x-2 py-4 px-5 rounded-xl">
              <div className="text-white tablet:text-3xl px-2 py-1 font-semibold">
                Github
              </div>
              <input
                type="text"
                className="bg-white text-white opacity-50 my-10 px-2 py-1"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="stats bg-transparent p-3 h-fit hidden HD:block">
            <div className="bg-headingColor flex flex-col space-x-2 py-4 px-5 rounded-xl">
              <div className="text-white tablet:text-3xl font-semibold">
                Your Task
              </div>
              <ul className="taskList mt-10">
                <li className="taskListItem flex">
                  <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                    <div className="img p-2 rounded-full bg-gray-900">
                      <img
                        src={check}
                        alt="check"
                        className="text-white w-18"
                      />
                    </div>
                    <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                      Create posts, reels, and stories.
                    </p>
                  </div>
                </li>
                <li className="taskListItem">
                  <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                    <div className="img p-2 rounded-full bg-gray-900">
                      <img
                        src={check}
                        alt="check"
                        className="text-white w-18"
                      />
                    </div>
                    <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                      Public your facebook post dynamically.
                    </p>
                  </div>
                </li>
                <li className="taskListItem">
                  <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                    <div className="img p-2 rounded-full bg-gray-900">
                      <img
                        src={check}
                        alt="check"
                        className="text-white w-18"
                      />
                    </div>
                    <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                      Schedule any twitter posts.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="teamInfo w-screen mt-20 text-center">
        <p className="mb-5 text-lg tablet:text-2xl HD:text-3xl">
          Trusted and loved by the world's best teams
        </p>
        <div className="flex justify-center">
          <div className="sliderRight w-10 ml-1 bg-gradient-to-r from-white to-gray-500">
            &#8205;
          </div>
          <div className="sliderRight w-10 bg-gradient-to-l from-white to-gray-500">
            &#8205;
          </div>

          <div ref={sliderRef} className="select-none relative px-10 py-5">
            <div>
              <img
                src={sliderImages[index]}
                alt=""
                className="featuredImg w-56  aspect-square"
              />
            </div>
          </div>

          <div ref={sliderRef} className="select-none relative px-10 py-5 hidden desktop:flex">
            <div>
              <img
                src={sliderImages[index+1]}
                alt=""
                className="featuredImg w-56  aspect-square"
              />
            </div>
          </div>

          <div ref={sliderRef} className="select-none relative px-10 py-5 hidden HD:flex">
            <div>
              <img
                src={sliderImages[index-1]}
                alt=""
                className="featuredImg w-56  aspect-square"
              />
            </div>
          </div>

          <div className="sliderRight w-10 ml-1 bg-gradient-to-r from-white to-gray-500">
            &#8205;
          </div>
          <div className="sliderRight w-10 bg-gradient-to-l from-white to-gray-500">
            &#8205;
          </div>
        </div>
      </div>

      <div className="overviewDiv bg-overviewDivColor rounded-3xl w-auto my-20 mx-12 laptop:mx-36 desktop:mx-56 HD:my-36 HD:mx-96">
        <div className="overviewDivHeader flex overflow-x-hidden">
          <img
            src={randomPhoto}
            alt="randomPhoto"
            className="randomPhoto absolute mt-5"
          />
          <div className="flex flex-col mt-10 mx-auto">
            <p className="overviewHeaderText relative text-white mx-14 text-2xl text-center font-semibold desktop:text-3xl HD:text-4xl">
              A nice and simple financial overview
            </p>
            <p className="overviewSubHeading text-white mx-12 mt-2 text-center text-sm desktop:text-xl HD:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              magnam fuga. Asperiores ita
            </p>
            <div className="overviewContent tablet:justify-around tablet:flex tablet:flex-row mx-12 my-8 rounded-3xl bg-overviewContentColor flex flex-col HD:px-36 HD:py-24 HD:space-x-12">
              <div className="text-center my-2.5">
                <p className="text-xl font-bold text-white desktop:text-3xl HD:text-4xl">120+</p>
                <p className="text-sm mt-1 text-white desktop:text-xl HD:text-2xl">Useful widgets</p>
              </div>
              <div className="text-center my-2.5">
                <p className="text-xl font-bold text-white desktop:text-3xl HD:text-4xl">20+</p>
                <p className="text-sm mt-1 text-white desktop:text-xl HD:text-2xl">Integrations</p>
              </div>
              <div className="text-center my-2.5">
                <p className="text-xl font-bold text-white desktop:text-3xl HD:text-4xl">65+</p>
                <p className="text-sm mt-1 text-white desktop:text-xl HD:text-2xl">Features out</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-row overflow-x-hidden">
        <div className="py-6 animate-marquee1 whitespace-nowrap flex flex-row">
          {cardsList1.map((item) => (
            <span key={item} className="mx-4 text-xl flex flex-row">
              <div className="card bg-white w-fit space-x-3 px-3 py-2 rounded-full flex flex-row items-center">
                <div className="img p-2 w-10 rounded-full bg-checkColor1">
                  <img src={check} alt="check" className="text-white w-24" />
                </div>
                <p className="checkText HD:text-2xl">{item}</p>
              </div>
            </span>
          ))}
        </div>
      </div>

      <div className="relative flex flex-row overflow-x-hidden">
        <div className="py-6 animate-marquee2 whitespace-nowrap flex flex-row">
          {cardsList2.map((item) => (
            <span key={item} className="mx-4 text-xl flex flex-row">
              <div className="card bg-white w-fit space-x-3 px-3 py-2 rounded-full flex flex-row items-center">
                <div className="img p-2 w-10 rounded-full bg-checkColor2">
                  <img src={check} alt="check" className="text-white w-24" />
                </div>
                <p className="checkText HD:text-2xl">{item}</p>
              </div>
            </span>
          ))}
        </div>
      </div>

      <div className="infoCardsDiv bg-transparent my-12 py-2">
        <div className="infoHeadingDiv flex justify-center mt-16">
          <div className="heading w-5/6 text-center">
            <p className="text-4xl laptop:text-5xl HD:text-6xl font-bold mb-3 text-headingColor">
              Supercharge your wrokflow to get started
            </p>
            <p className="text-xl laptop:text-2xl HD:text-3xl text-subHeadingColor">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              eius autem ratione, esse neque ea!
            </p>
          </div>
        </div>

        <div className="infoBodyDiv flex my-8 HD:my-16 mx-2 tablet:mx-4 laptop:mx-36 desktop:mx-56 HD:mx-96 justify-center">
          <div className="laptop:grid laptop:grid-rows-2 laptop:grid-flow-col gap-4">
            <div className="card bg-white my-4 p-10 laptop:w-[100%] rounded-3xl shadow-lg HD:shadow-xl">
              <div className="cardBody">
                <div className="iconDiv p-2 HD:p-4 rounded-2xl bg-checkColor1 w-fit mb-1">
                  <Icon name="mail" size="large" className="text-white" />
                </div>
                <p className="text-2xl laptop:text-3xl HD:text-4xl text-headingColor font-bold mt-6 mb-3">
                  Email Management
                </p>
                <p className="text-xl laptop:text-2xl HD:text-3xl text-subHeadingColor">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque inventore, cupiditate culpa accusantium sunt
                  suscipit.
                </p>
              </div>
            </div>

            <div className="card bg-white my-4 p-10 laptop:w-[100%] rounded-3xl shadow-lg HD:shadow-xl">
              <div className="head">
                <div className="iconDiv p-2 HD:p-4 rounded-2xl bg-checkColor1 w-fit mb-1">
                  <Icon name="user" size="large" className="text-white" />
                </div>
                <p className="text-2xl laptop:text-3xl HD:text-4xl text-headingColor font-bold mt-6 mb-3">
                  Personal Assisstance
                </p>
                <p className="text-xl laptop:text-2xl HD:text-3xl text-subHeadingColor">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque inventore, cupiditate culpa accusantium sunt
                  suscipit.
                </p>
              </div>
            </div>

            <div className="card bg-white my-4 p-10 laptop:w-[100%] rounded-3xl shadow-lg HD:shadow-xl">
              <div className="head">
                <div className="iconDiv p-2 HD:p-4 rounded-2xl bg-checkColor1 w-fit mb-1">
                  <Icon
                    name="calendar alternate"
                    size="large"
                    className="text-white"
                  />
                </div>
                <p className="text-2xl laptop:text-3xl HD:text-4xl text-headingColor font-bold mt-6 mb-3">
                  Campaign Calender
                </p>
                <p className="text-xl laptop:text-2xl HD:text-3xl text-subHeadingColor">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque inventore, cupiditate culpa accusantium sunt
                  suscipit.
                </p>
              </div>
            </div>

            <div className="card bg-white my-4 p-10 laptop:w-[100%] rounded-3xl shadow-lg HD:shadow-xl">
              <div className="head">
                <div className="iconDiv p-2 HD:p-4 rounded-2xl bg-checkColor1 w-fit mb-1">
                  <Icon name="payment" size="large" className="text-white" />
                </div>
                <p className="text-2xl laptop:text-3xl HD:text-4xl text-headingColor font-bold mt-6 mb-3">
                  Payment Feature
                </p>
                <p className="text-xl laptop:text-2xl HD:text-3xl text-subHeadingColor">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque inventore, cupiditate culpa accusantium sunt
                  suscipit.
                </p>
              </div>
            </div>

            <div className="card bg-white my-4 p-10 laptop:w-[100%] rounded-3xl shadow-lg HD:shadow-xl">
              <div className="head">
                <div className="iconDiv p-2 HD:p-4 rounded-2xl bg-checkColor1 w-fit mb-1">
                  <Icon name="add" size="large" className="text-white" />
                </div>
                <p className="text-2xl laptop:text-3xl HD:text-4xl text-headingColor font-bold mt-6 mb-3">
                  Utility app
                </p>
                <p className="text-xl laptop:text-2xl HD:text-3xl text-subHeadingColor">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque inventore, cupiditate culpa accusantium sunt
                  suscipit.
                </p>
              </div>
            </div>

            <div className="card bg-white my-4 p-10 laptop:w-[100%] rounded-3xl shadow-lg HD:shadow-xl">
              <div className="head">
                <div className="iconDiv p-2 HD:p-4 rounded-2xl bg-checkColor1 w-fit mb-1">
                  <Icon name="bell" size="large" className="text-white" />
                </div>
                <p className="text-2xl laptop:text-3xl HD:text-4xl text-headingColor font-bold mt-6 mb-3">
                  Sales Notification
                </p>
                <p className="text-xl laptop:text-2xl HD:text-3xl text-subHeadingColor">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Doloremque inventore, cupiditate culpa accusantium sunt
                  suscipit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center HD:my-36 mx-2 tablet:mx-4 laptop:mx-36 desktop:mx-56 HD:mx-96">
        <div className="bg-transparent laptop:space-x-10 w-full laptop:flex laptop:justify-around mt-20">
          <div className="imgDiv">
            <img src={yourTasksImg} alt="your tasks" className="" />
          </div>
          <div className="infoDiv laptop:w-[50%] px-6 laptop:px-12 py-8">
            <p className="text-4xl laptop:text-5xl HD:text-6xl text-headingColor font-bold">
              Manage and Track Your Projects
            </p>
            <p className="text-xl laptop:text-2xl HD:text-3xl mt-2 mb-2 laptop:mb-6 desktop:mb-10 HD:mb-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              modi doloremque placeat qui quod tempora.
            </p>
            <ul className="taskList mt-2">
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor1">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Create posts, reels, and stories.
                  </p>
                </div>
              </li>
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor1">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Public your facebook post dynamically.
                  </p>
                </div>
              </li>
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor1">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Schedule any twitter posts.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-transparent laptop:space-x-10 w-full laptop:flex laptop:flex-row laptop:justify-around mt-20">
          <div className="imgDiv laptop:order-1">
            <img src={totalMembersImg} alt="total memebrs" />
          </div>
          <div className="infoDiv laptop:w-[50%] px-6 laptop:px-12 py-8">
            <p className="text-4xl laptop:text-5xl HD:text-6xl text-headingColor font-bold">
              Easy manage your team's tasks
            </p>
            <p className="text-xl laptop:text-2xl HD:text-3xl mt-2 mb-2 laptop:mb-6 desktop:mb-10 HD:mb-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              modi doloremque placeat qui quod tempora.
            </p>
            <ul className="taskList mt-2">
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor2">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Create posts, reels, and stories.
                  </p>
                </div>
              </li>
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor2">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Public your facebook post dynamically.
                  </p>
                </div>
              </li>
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor2">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Schedule any twitter posts.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-transparent laptop:space-x-10 w-full laptop:flex laptop:justify-around mt-20">
          <div className="imgDiv">
            <img src={aPicImg} alt="a pic" className="" />
          </div>
          <div className="infoDiv laptop:w-[50%] px-6 laptop:px-12 py-8">
            <p className="text-4xl laptop:text-5xl HD:text-6xl text-headingColor font-bold">
              Simple financial overview for you
            </p>
            <p className="text-xl laptop:text-2xl HD:text-3xl mt-2 mb-2 laptop:mb-6 desktop:mb-10 HD:mb-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              modi doloremque placeat qui quod tempora.
            </p>
            <ul className="taskList mt-2">
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor1">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Create posts, reels, and stories.
                  </p>
                </div>
              </li>
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor1">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Public your facebook post dynamically.
                  </p>
                </div>
              </li>
              <li className="taskListItem">
                <div className="card w-fit space-x-3 py-2 rounded-full flex flex-row items-center">
                  <div className="img p-2 rounded-full bg-checkColor1">
                    <img src={check} alt="check" className="text-white w-18" />
                  </div>
                  <p className="checkText text-xl laptop:text-2xl HD:text-3xl">
                    Schedule any twitter posts.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-8 HD:my-16 mx-2 tablet:mx-4 laptop:mx-6 desktop:mx-12 HD:mx-96">
        <div className="feedbackDiv mx-6 laptop:mx-12 my-12 laptop:my-24 laptop:px-12">
          <div className="laptop:w-[70%]">
            <p className="text-5xl font-bold text-headingColor">
              Don't take our words for it - listen to our clients
            </p>
          </div>
          <p className="mt-6 text-xl laptop:w-[40%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium temporibus fugit velit nesciunt voluptas omnis.
          </p>
        </div>

        <div className="feedbackSlider flex">
          <button
            className="leftBtn cursor-pointer hover:scale-125 transition ease-linear duration-75"
            onClick={handleLeftBtnClick1}
          >
            <div className="pl-1 laptop:pl-4 flex m-auto">
              <Icon name="angle left" size="big" />
            </div>
          </button>
          <div
            className="relative flex overflow-x-auto mx-2 scroll-smooth scrollbar-hide"
            id="feedbackSlider1"
          >
            <div className="py-6 flex">
              {feedbackData.map((data) => (
                <div
                  key={data.id}
                  className="feedbackCard bg-white mx-4 rounded-2xl laptop:px-8 px-4 laptop:py-4 py-2 laptop:w-96 w-56 shadow-lg"
                >
                  <div className="w-[90%]">
                    <p className="desc text-justify mb-4 text-base desktop:text-lg HD:text-2xl">
                      {data.feedback}
                    </p>
                    <Rate
                      disabled
                      count={5}
                      defaultValue={data.rating}
                      style={{ color: "rgba(0, 245, 155, 1)" }}
                      tooltips={[
                        "Very Bad",
                        "Bad",
                        "Good",
                        "Very Good",
                        "Excellent",
                      ]}
                    />
                    <p className="name font-xl desktop:text-2xl HD:text-3xl font-semibold mt-2">
                      {data.name}
                    </p>
                    <p className="identification text-base desktop:text-lg HD:text-2xl">
                      {data.identification}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="rightBtn cursor-pointer hover:scale-125 transition ease-linear duration-75"
            onClick={handleRightBtnClick1}
          >
            <div className="pr-1 laptop:pr-4 flex m-auto">
              <Icon name="angle right" size="big" />
            </div>
          </button>
        </div>

        <div className="feedbackSlider flex">
          <button
            className="leftBtn cursor-pointer hover:scale-125 transition ease-linear duration-75"
            onClick={handleLeftBtnClick2}
          >
            <div className="pl-1 laptop:pl-4 flex m-auto">
              <Icon name="angle left" size="big" />
            </div>
          </button>
          <div
            className="relative flex overflow-x-auto mx-2 scroll-smooth scrollbar-hide"
            id="feedbackSlider2"
          >
            <div className="py-6 flex">
              {feedbackData.map((data) => (
                <div
                  key={data.id}
                  className="feedbackCard bg-white mx-4 rounded-2xl laptop:px-8 px-4 laptop:py-4 py-2 laptop:w-96 w-56 shadow-lg"
                >
                  <div className="w-[90%]">
                    <p className="desc text-justify mb-4 text-base desktop:text-lg HD:text-2xl">
                      {data.feedback}
                    </p>
                    <Rate
                      disabled
                      count={5}
                      defaultValue={data.rating}
                      style={{ color: "rgba(0, 245, 155, 1)" }}
                      tooltips={[
                        "Very Bad",
                        "Bad",
                        "Good",
                        "Very Good",
                        "Excellent",
                      ]}
                    />
                    <p className="name font-xl desktop:text-2xl HD:text-3xl  font-semibold mt-2">
                      {data.name}
                    </p>
                    <p className="identification text-base desktop:text-lg HD:text-2xl">
                      {data.identification}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="rightBtn cursor-pointer hover:scale-125 transition ease-linear duration-75"
            onClick={handleRightBtnClick2}
          >
            <div className="pr-1 laptop:pr-4 flex m-auto">
              <Icon name="angle right" size="big" />
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col laptop:flex laptop:flex-row laptop:justify-around">
        <div className="mx-6 laptop:mx-12 my-12 laptop:my-48 laptop:px-12">
          <div className="">
            <p className="text-5xl font-bold text-headingColor">
              Build a powerfull website for your startup.
            </p>
          </div>
          <p className="text-subHeadingColor mt-6 text-xl laptop:w-[75%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium temporibus fugit velit nesciunt voluptas omnis.
          </p>
          <button className="bg-logoColor rounded-2xl text-semibold text-white text-base my-12 laptop:my-20 py-4 px-8">
            Read more
          </button>
        </div>

        <div className="mx-6 laptop:mx-12 my-12 laptop:my-48 laptop:px-12 laptop:flex items-cente">
          <div className="flex flex-col items-center justify-center">
            <div className="card shadow-lg rounded-2xl bg-white my-6 p-6 laptop:w-[80%] w-full">
              <div className="icon bg-logoColor p-2 desktop:p-3 HD:p-4 w-fit rounded-lg mb-10">
                <Icon name="user" size="large" className="text-white" />
              </div>
              <p className="font-bold text-2xl desktop:text-3xl HD:text-4xl mb-1">7,000 Happy users</p>
              <p className="text-base desktop:text-lg HD:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, doloremque nobis ullam possimus quod aperiam?
              </p>
            </div>
            <div className="card shadow-lg rounded-2xl bg-white my-6 p-6 laptop:w-[80%] w-full">
              <div className="icon bg-logoColor p-2 desktop:p-3 HD:p-4 w-fit rounded-lg mb-10">
                <Icon name="talk" size="large" className="text-white" />
              </div>
              <p className="font-bold text-2xl desktop:text-3xl HD:text-4xl mb-1">24/7 Support</p>
              <p className="text-base desktop:text-lg HD:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, doloremque nobis ullam possimus quod aperiam?
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="card shadow-lg rounded-2xl bg-white my-6 p-6 laptop:w-[80%] w-full">
              <div className="icon bg-logoColor p-2 desktop:p-3 HD:p-4 w-fit rounded-lg mb-10">
                <Icon
                  name="telegram plane"
                  size="large"
                  className="text-white"
                />
              </div>
              <p className="font-bold text-2xl desktop:text-3xl HD:text-4xl mb-1">Global Community</p>
              <p className="text-base desktop:text-lg HD:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, doloremque nobis ullam possimus quod aperiam?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="bg-headingColor xDiv m-0 p-0 rounded-3xl overflow-hidden">
          <img src={xImg1} alt="x-img-1" className="xImg1 top-0 left-0" />
          <div className="content p-10 text-center text-white tablet:px-36 tablet:py-14 laptop:px-48 laptop:py-16 HD:px-72 HD:py-36">
            <p className="text-4xl HD:text-6xl font-bold">
              Focus on the analytics that matter
            </p>
            <p className="text-base desktop:text-lg HD:text-2xl my-1 laptop:my-2 HD:my-6">
              Grow faster with a website that helps you convert more customers.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="invisible w-[20%]">&#8205;</div>

            <div className="btnDiv w-[90%] laptop:w-[60%] mb-10 pb-10 flex flex-col laptop:flex laptop:flex-row align-top justify-center laptop:space-x-6">
              <button className="bg-logoColor text-white border border-logoColor rounded-xl px-3 HD:px-10 py-2 HD:py-6 mb-4 tablet:mb-4 HD:text-2xl">
                Get started now
              </button>
              <button className="text-white border border-white rounded-xl px-3 HD:px-10 py-2 HD:py-6 mb-4 tablet:mb-4 HD:text-2xl">
                Compare plans
              </button>
            </div>
            <div className="w-[20%] flex items-end tablet:translate-x-10 laptop:translate-x-14 HD:translate-x-44">
              <img src={xImg2} alt="x-img-2" className="xImg2" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer block relative bg-headingColor w-full mt-24 p-10 laptop:p-20">
        <div className="footerContent laptop:flex laptop:justify-between laptop:space-x-6">
          <div>
            <div className="brandName flex space-x-3">
              <div className="brandLogo bg-logoColor px-3 HD:px-4 py-1 HD:py-2 rounded-lg">
                <div className="line h-1.5 w-5 my-2 bg-white"></div>
                <div className="line h-1.5 w-5 my-2 bg-white"></div>
              </div>
              <div className="brandName font-bold m-auto text-2xl HD:text-4xl text-white">
                Pepper
              </div>
            </div>
            <div className="mt-4 text-white text-lg HD:text-xl">
              <p>
                Pepper is one of the most reliable delivery platform management
                service to automate your network.
              </p>
              <button className="rounded-2xl mt-4 HD:mt-10 py-3 HD:py-6 px-4 HD:px-8 text-base HD:text-2xl bg-logoColor text-white">
                Get Started
              </button>
              <div className="mt-10 mb-16 flex text-right space-x-3">
                <Icon name="linkedin" size="big" className="text-white" />
                <Icon name="twitter" size="big" className="text-white" />
                <Icon name="mail" size="big" className="text-white" />
              </div>
            </div>
          </div>

          <div className="flex space-x-6 HD:space-x-8">
            <div className="w-[50%] HD:w-[60%] text-white">
              <p className="font-semibold text-xl HD:text-3xl mb-3 HD:mb-7">Pages main</p>
              <ul>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Home</li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Blog</li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Blog Template</li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Pricing</li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">
                  Pricing Ecommerce
                </li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">About</li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Careers</li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">
                  Careers Template
                </li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Contact</li>
              </ul>
            </div>
            <div className="w-[50%] HD:w-[60%] text-white">
              <p className="font-semibold text-xl HD:text-3xl mb-3 HD:mb-7">Template pages</p>
              <ul>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Style guide</li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Licenses</li>
                <li className="footerListItem text-sm my-1 HD:text-xl HD:my-2">Change log</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-white my-10 HD:my-16">
          <p className="text-sm HD:text-xl">
            Made with <span className="text-checkColor2">&hearts;</span> by{" "}
            <span className="text-checkColor2">Amandeep Singh</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
