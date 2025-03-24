import { createContext, useContext, useEffect, useRef, useState } from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAngleUp,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../public/assets/logo.svg";
import landingLogo from "../public/assets/hero-icon.png";
import landing1 from "../public/assets/hero-slider-1.jpg";
import landing2 from "../public/assets/hero-slider-2.jpg";
import landing3 from "../public/assets/hero-slider-3.jpg";
import separator from "../public/assets/separator.svg";
import imgPattern from "../public/assets/img-pattern.svg";
import imgService1 from "../public/assets/service-1.jpg";
import imgService2 from "../public/assets/service-2.jpg";
import imgService3 from "../public/assets/service-3.jpg";
import imgShape1 from "../public/assets/shape-1.png";
import imgShape2 from "../public/assets/shape-2.png";
import imgBanner from "../public/assets/about-banner.jpg";
import imgAbs from "../public/assets/about-abs-image.jpg";
import badge1 from "../public/assets/badge-2.png";
import badge2 from "../public/assets/badge-2-bg.png";
import shapeStory from "../public/assets/shape-3.png";
import specialDish from "../public/assets/special-dish-banner.jpg";
import specialBadge from "../public/assets/badge-1.png";
import dishShape from "../public/assets/shape-9.png";
import specialShape from "../public/assets/shape-4.png";
import selectionShape1 from "../public/assets/shape-5.png";
import selectionShape2 from "../public/assets/shape-6.png";
import imgMenu1 from "../public/assets/menu-1.png";
import imgMenu2 from "../public/assets/menu-2.png";
import imgMenu3 from "../public/assets/menu-3.png";
import imgMenu4 from "../public/assets/menu-4.png";
import imgMenu5 from "../public/assets/menu-5.png";
import imgMenu6 from "../public/assets/menu-6.png";
import imgAvatar from "../public/assets/testi-avatar.jpg";
import imgQuote from "../public/assets/testimonial-bg.jpg";
import imgGetTableShape from "../public/assets/shape-7.png";
import formPattern from "../public/assets/form-pattern.png";
import ourStrengthShape from "../public/assets/shape-8.png";
import ourStrengthImg1 from "../public/assets/features-icon-1.png";
import ourStrengthImg2 from "../public/assets/features-icon-2.png";
import ourStrengthImg3 from "../public/assets/features-icon-3.png";
import ourStrengthImg4 from "../public/assets/features-icon-4.png";
import imgEvent1 from "../public/assets/event-1.jpg";
import imgEvent2 from "../public/assets/event-2.jpg";
import imgEvent3 from "../public/assets/event-3.jpg";
import imgFooter from "../public/assets/footer-bg.jpg";
import imgFormFooter from "../public/assets/footer-form-bg.png";
const newContextApi = createContext();
function App() {
  const links = ["home", "menus", "about us", "our chefs", "contact"].map(
    (e, i) => {
      return (
        <a
          href={`#${e}`}
          key={i}
          className={`nav-link${
            i === 0 ? " active text-primary relative" : ""
          } text-white uppercase font-bold text-sm duration-300 hover:text-primary pb-2.5 relative`}
        >
          {e}
        </a>
      );
    }
  );
  const menuBars = [1, 2, 3].map((e) => {
    return (
      <motion.span
        initial={{ width: "25%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 0.5,
          delay: e * 0.25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="bg-white w-full h-[2px]"
        key={e}
      ></motion.span>
    );
  });
  const menuLinks = ["home", "menus", "about us", "our chefs", "contact"].map(
    (e, i) => {
      return (
        <a
          href=""
          key={i}
          className={`menu-link ${
            i === 0 ? "active pl-8 text-primary" : ""
          } capitalize border-b-2 border-white/25 py-4 duration-300 md:hover:pl-8 hover:text-primary relative`}
        >
          {e}
        </a>
      );
    }
  );
  const landingData = [
    {
      img: landing1,
      p1: "Tradational & Hygine",
      heading: "For the love of delicious food",
      desc: "Come with family & feel the joy of mouthwatering food",
    },
    {
      img: landing2,
      p1: "delightful experience",
      heading: "Flavors Inspired by the Seasons",
      desc: "Come with family & feel the joy of mouthwatering food",
    },
    {
      img: landing3,
      p1: "amazing & delicious",
      heading: "Where every flavor tells a story",
      desc: "Come with family & feel the joy of mouthwatering food",
    },
  ].map((e, i) => {
    return (
      <motion.div
        key={i}
        className={`absolute w-full h-full top-0 left-0 grid place-content-center place-items-center overflow-hidden`}
      >
        <motion.img
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.5 }}
          transition={{ duration: 20 }}
          src={e.img}
          className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
        />
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-primary font-bold capitalize tracking-widest text-lg relative"
        >
          {e.p1}
        </motion.p>
        <img src={separator} alt="" className="w-[150px] my-5 relative" />
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl max-w-[650px] text-balance text-center relative"
        >
          {e.heading}
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white font-bold mt-5 text-center text-balance relative"
        >
          {e.desc}
        </motion.p>
        <motion.button
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          data-text="view our menu"
          className="landing-btn capitalize px-10 py-2.5 bg-transparent border-2 border-primary cursor-pointer text-primary font-bold mt-5 relative overflow-hidden"
        >
          view our menu
        </motion.button>
      </motion.div>
    );
  });
  const dishesData = [
    {
      img: imgService1,
      title: "BreakFast",
    },
    {
      img: imgService2,
      title: "Appetizers",
    },
    {
      img: imgService3,
      title: "Drinks",
    },
  ].map((e, i) => {
    return (
      <div
        className={`dish-card text-center relative cursor-pointer ${
          i === 1 ? "xl:translate-y-1/6" : ""
        }`}
        key={i}
      >
        <img
          src={imgPattern}
          alt=""
          className="w-[150px] absolute top-[-40px] left-1/2 -translate-x-1/2 duration-300"
        />
        <div className="relative overflow-hidden w-fit mx-auto">
          <img src={e.img} alt="" />
        </div>
        <h1 className="relative text-white font-bold text-3xl tracking-widest mt-14">
          {e.title}
        </h1>
        <button className="relative font-bold text-primary tracking-widest text-sm cursor-pointer duration-300 hover:text-white mb-10 mt-5">
          View Menu
        </button>
      </div>
    );
  });
  const selectionData = [
    {
      img: imgMenu1,
      title: "Greek Salad",
      type: "seasonal",
      price: "$25.50",
      desc: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    },
    {
      img: imgMenu2,
      title: "Butternut Pumpkin",
      type: "regular",
      price: "$10.00",
      desc: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    },
    {
      img: imgMenu3,
      title: "Olivas Rellenas",
      type: "regular",
      price: "$25.00",
      desc: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    },
    {
      img: imgMenu4,
      title: "Lasagne",
      type: "regular",
      price: "$40.00",
      desc: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    },
    {
      img: imgMenu5,
      title: "Tokusen Wagyu",
      type: "new",
      price: "$39.00",
      desc: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
      img: imgMenu6,
      title: "Opu Fish",
      type: "regular",
      price: "$49.00",
      desc: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    },
  ].map((e, i) => {
    return (
      <div key={i} className="flex gap-5 items-center">
        <img
          src={e.img}
          alt=""
          className="object-contain w-[75px] cursor-default duration-300 hover:scale-110 hover:blur-[1px]"
        />
        <div>
          <div className="flex gap-2 items-center">
            <h1 className="text-primary font-bold duration-300 cursor-pointer hover:text-primary/50">
              {e.title}
            </h1>
            <p className="bg-primary text-black text-[12px] text-center uppercase content-center font-bold px-2 py-0.5 rounded-sm cursor-default">
              {e.type}
            </p>
            <div className="selection-card-line flex-1 relative"></div>
            <p className="text-primary font-bold text-lg">{e.price}</p>
          </div>
          <p className="text-white/60 w-[80%] mt-2.5">{e.desc}</p>
        </div>
      </div>
    );
  });
  const ourStrengthData = [
    {
      img: ourStrengthImg1,
      title: "Hygienic Food",
      desc: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      img: ourStrengthImg2,
      title: "Fresh Environment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      img: ourStrengthImg3,
      title: "Skilled Chefs",
      desc: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
      img: ourStrengthImg4,
      title: "Event & Party",
      desc: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
  ].map((e, i) => {
    return (
      <div
        key={i}
        className={`our-strength-card bg-second-black${
          i % 2 == 0 ? "/50" : ""
        } p-5 text-center`}
      >
        <img src={e.img} alt="" className="mx-auto mb-2.5 duration-300" />
        <h1 className="text-white font-bold tracking-widest">{e.title}</h1>
        <p className="text-white/75 mt-2.5">{e.desc}</p>
      </div>
    );
  });
  const upComingEventsData = [
    {
      img: imgEvent1,
      date: "15/09/2022",
      title: "Food, Flavour",
      desc: "Flavour so good you’ll try to eat with your eyes.",
    },
    {
      img: imgEvent2,
      date: "08/09/2022",
      title: "Healthy Food",
      desc: "Flavour so good you’ll try to eat with your eyes.",
    },
    {
      img: imgEvent3,
      date: "03/09/2022",
      title: "Recipie",
      desc: "Flavour so good you’ll try to eat with your eyes.",
    },
  ].map((e, i) => {
    return (
      <div key={i} className="up-coming-events-card relative overflow-hidden">
        <img
          src={e.img}
          alt=""
          className="object-contain w-full duration-300"
        />
        <p className="absolute text-primary bg-black p-1 text-[12px] font-bold tracking-widest top-[10px] left-[10px] rounded-sm">
          {e.date}
        </p>
        <div className="absolute bottom-0 w-full text-center p-2.5">
          <h1 className="text-primary font-bold tracking-widest">{e.title}</h1>
          <p className="text-white/80 sm:text-xl">{e.desc}</p>
        </div>
      </div>
    );
  });
  const footerLinks = [
    "home",
    "menus",
    "about us",
    "our chefs",
    "contact",
    "facebook",
    "instagram",
    "twitter",
    "youtube",
    "google map",
  ].map((e, i) => {
    return (
      <p
        key={i}
        className="footer-link text-white/75 w-fit mx-auto font-bold tracking-widest uppercase text-sm duration-300 hover:text-primary cursor-pointer relative mb-2.5"
      >
        {e}
      </p>
    );
  });
  const [isIntro, setIsIntro] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  const [landing, setLanding] = useState(0);
  const [landingTimer, setLandingTimer] = useState(0);
  const [lastScroll, setLastScroll] = useState(window.scrollY);
  const navRef = useRef(null);

  if (landing === landingData.length) {
    setLanding(0);
  } else if (landing < 0) {
    setLanding(landingData.length - 1);
  }
  if (landingTimer === landingData.length) {
    setLandingTimer(0);
  } else if (landingTimer < 0) {
    setLandingTimer(landingData.length - 1);
  }
  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 1000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLandingTimer((prev) => prev + 1);
      setLanding((prev) => prev + 1);
    }, 5000);
  }, [landingTimer]);

  return (
    <>
      <newContextApi.Provider
        value={{
          isIntro,
          setIsIntro,
          isMenu,
          setIsMenu,
          menuLinks,
          navRef,
          links,
          menuBars,
          lastScroll,
          setLastScroll,
          landingData,
          landing,
          setLanding,
          dishesData,
          selectionData,
          ourStrengthData,
          upComingEventsData,
          footerLinks,
        }}
      >
        <Intro />
        <Menu />
        <div className="h-screen overflow-hidden">
          <TopBar />
          <NavBar />
          <Landing />
        </div>
        <Dishes />
        <Story />
        <SpecialDish />
        <Selection />
        <Quote />
        <GetTable />
        <OurStrength />
        <UpComingEvents />
        <Footer />
        <ScrollToTop />
      </newContextApi.Provider>
    </>
  );
}
export default App;
const Intro = () => {
  const { isIntro } = useContext(newContextApi);
  return (
    isIntro && (
      <motion.div
        animate={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-primary fixed w-screen h-screen grid place-content-center place-items-center z-50"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-20 h-20 border-2 border-white border-b-black rounded-full"
        ></motion.div>
        <h1 className="preload-text text-center mt-5 uppercase text-7xl font-extrabold tracking-wider">
          grilli
        </h1>
      </motion.div>
    )
  );
};
const Menu = () => {
  const { isMenu, setIsMenu, menuLinks } = useContext(newContextApi);
  return (
    <AnimatePresence>
      {isMenu && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed w-screen h-screen bg-black/50 z-50"
        >
          <div className="bg-main-black max-w-[350px] h-full p-5 overflow-y-auto">
            <div
              onClick={() => setIsMenu(false)}
              className="text-white w-8 h-8 text-center content-center border-2 border-white rounded-full cursor-pointer hover:border-primary hover:text-primary duration-300 ml-auto"
            >
              X
            </div>
            <div className="mt-5 flex justify-center">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col  text-white font-bold text-sm mt-10">
              {menuLinks}
            </div>
            <div className="mt-5">
              <h1 className="text-primary text-5xl text-center capitalize">
                visit us
              </h1>
              <p className="text-white/75 mt-5 text-center text-balance text-lg">
                Restaurant St, Delicious City, London 9578, UK
              </p>
              <p className="text-white/75 mt-5 text-center text-balance text-sm">
                Open: 9.30 am - 2.30pm
              </p>
              <a
                href="mailto:booking@restaurant.com"
                className="text-white/75 my-5 block text-center duration-300 hover:text-primary"
              >
                booking@restaurant.com
              </a>
              <a
                href="tel:+11234567890"
                className="text-white/75 block text-center duration-300 hover:text-primary"
              >
                +1 123 456 7890
              </a>
              <div className="my-5 w-5 h-5 border-2 border-primary rotate-45 mx-auto"></div>
              <p className="capitalize text-center font-bold text-white">
                booking request
              </p>
              <a
                href="tel:+88123123456"
                className="menu-tel block text-center text-white/75 text-2xl my-5 duration-300 hover:text-primary relative pb-5"
              >
                +88-123-123456
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const TopBar = () => {
  return (
    <div className="hidden lg:flex justify-between items-center p-2.5 border-b-2 border-white/25 z-10 relative bg-transparent text-white">
      <div className="flex gap-5 items-center">
        <p>
          <FontAwesomeIcon icon={faLocationDot} className="mr-1.5" />
          Restaurant St, Delicious City, London 9578, UK
        </p>
        <div className="w-2.5 h-2.5 border-2 border-primary rotate-45"></div>
        <p>
          <FontAwesomeIcon icon={faClock} className="mr-1.5" />
          Daily : 8.00 am to 10.00 pm
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <p className="cursor-pointer duration-300 hover:text-primary">
          <FontAwesomeIcon icon={faPhone} className="mr-1.5" />
          +1 123 456 7890
        </p>
        <div className="w-2.5 h-2.5 border-2 border-primary rotate-45"></div>
        <p className="cursor-pointer duration-300 hover:text-primary">
          <FontAwesomeIcon icon={faEnvelope} className="mr-1.5" />
          booking@resturant.com
        </p>
      </div>
    </div>
  );
};
const NavBar = () => {
  const { navRef, links, menuBars, setIsMenu, lastScroll, setLastScroll } =
    useContext(newContextApi);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        navRef.current.classList.add("top-[-100%]");
        navRef.current.classList.replace("bg-transparent", "bg-main-black");
      } else if (window.scrollY === 0) {
        navRef.current.classList.remove("top-[-100%]", "top-0");
        navRef.current.classList.replace("bg-main-black", "bg-transparent");
      } else {
        navRef.current.classList.replace("top-[-100%]", "top-0");
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, navRef, setLastScroll]);

  return (
    <div
      ref={navRef}
      className="bg-transparent flex lg:justify-between items-center p-2.5 gap-3 z-20 fixed w-full transition-all duration-500"
    >
      <div className="max-lg:flex-1">
        <img src={logo} alt="" />
      </div>
      <div className="hidden lg:flex gap-5">{links}</div>
      <button
        data-text="find a table"
        className="table-btn hidden md:block bg-primary text-black font-bold uppercase py-1.5 px-4 md:py-3 md:px-8 cursor-pointer border-2 border-primary duration-300 relative overflow-hidden"
      >
        find a table
      </button>
      <div
        onClick={() => setIsMenu(true)}
        className="lg:hidden w-10 flex flex-col gap-2 cursor-pointer"
      >
        {menuBars}
      </div>
    </div>
  );
};
const Landing = () => {
  const { landing, setLanding, landingData } = useContext(newContextApi);
  return (
    <div className="w-full h-full bg-black/50 absolute top-0 left-0">
      {landingData[landing]}
      <div className="absolute bottom-[40px] right-[40px] w-[105px] h-[105px]">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 7 }}
          className="bg-transparent absolute w-full h-full border-2 border-white rotate-45 top-0 left-0"
        ></motion.div>
        <div className="flex flex-col justify-center items-center gap-2.5 bg-primary w-full h-full relative">
          <img src={landingLogo} alt="" />
          <span className="capitalize font-bold">book a table</span>
        </div>
      </div>
      <div
        onClick={() => setLanding((prev) => prev - 1)}
        className="max-md:hidden w-[40px] h-[40px] border-2 border-primary rotate-45 absolute left-[30px] top-1/2 -translate-y-1/2 duration-300 hover:bg-primary text-primary hover:text-black cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="absolute top-1/2 left-1/2 -translate-1/2 -rotate-45"
        />
      </div>
      <div
        onClick={() => setLanding((prev) => prev + 1)}
        className="max-md:hidden w-[40px] h-[40px] border-2 border-primary rotate-45 absolute right-[30px] top-1/2 -translate-y-1/2 duration-300 text-primary hover:text-black hover:bg-primary cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          className="absolute top-1/2 left-1/2 -translate-1/2 -rotate-45"
        />
      </div>
    </div>
  );
};
const Dishes = () => {
  const { dishesData } = useContext(newContextApi);
  return (
    <div className="bg-main-black py-[120px] overflow-hidden relative">
      <motion.img
        animate={{ y: -100 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        src={imgShape1}
        alt=""
        className="absolute bottom-0 left-0"
      />
      <motion.img
        animate={{ y: 100 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        src={imgShape2}
        alt=""
        className="absolute top-0 right-0"
      />
      <p className="text-primary text-center font-bold tracking-widest text-lg relative">
        Flavors For Royalty
      </p>
      <img src={separator} alt="" className="w-[150px] mx-auto my-5 relative" />
      <h1 className="text-white text-center font-bold text-5xl tracking-widest text-balance max-w-[600px] mx-auto relative">
        We Offer Top Notch
      </h1>
      <p className="text-white/80 text-center font-bold tracking-widest text-balance text-lg max-w-[400px] mx-auto my-5 relative">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry lorem Ipsum has been the industrys standard dummy text ever.
      </p>
      <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {dishesData}
      </div>
    </div>
  );
};
const Story = () => {
  const moveDivRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      moveDivRef.current.style.top = `${e.clientY * 0.01}px`;
      moveDivRef.current.style.left = `${e.clientX * 0.01}px`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="bg-second-black max-sm:px-14 py-[120px] sm:px-28 grid gap-24 lg:grid-cols-2 relative overflow-hidden">
      <img
        src={shapeStory}
        alt=""
        className="absolute left-0 top-1/2 -translate-y-1/2"
      />
      <div className="relative">
        <p className="text-primary font-bold tracking-widest text-center text-lg">
          Our Story
        </p>
        <img src={separator} alt="" className="w-[150px] mx-auto my-5" />
        <h1 className="text-5xl text-white text-center max-w-[400px] text-balance mx-auto mb-5">
          Every Fla vor Tells a Story
        </h1>
        <p className="text-white/90 text-center font-bold text-balance max-w-[400px] mx-auto mb-5">
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to make a type specimen book It has survived not only five
          centuries, but also the leap into.
        </p>
        <p className="text-white font-extrabold text-center text-lg">
          Book Through Call
        </p>
        <p className="story-tel text-primary font-extrabold text-2xl cursor-pointer text-center mb-10 relative">
          +80 (400) 123 4567
        </p>
        <button
          data-text="read more"
          className="story-btn text-primary border-2 border-primary px-10 py-2.5 uppercase cursor-pointer font-extrabold text-sm mx-auto block relative overflow-hidden"
        >
          read more
        </button>
      </div>
      <div className={`flex justify-center relative`}>
        <div ref={moveDivRef} className={`relative`}>
          <img src={imgBanner} alt="" className="" />
          <img
            src={imgPattern}
            alt=""
            className="max-sm:w-[50px] sm:w-[100px] absolute left-[-30px] bottom-[-40px]"
          />
          <img
            src={imgAbs}
            alt=""
            className="absolute max-sm:w-[125px] sm:w-[200px] max-sm:bottom-[-20px] sm:bottom-[-10px] max-sm:left-[-40px] sm:left-[-80px]"
          />
          <img
            src={badge1}
            alt=""
            className="absolute top-[-30px] right-[-30px]"
          />
          <motion.img
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={badge2}
            alt=""
            className="absolute top-[-30px] right-[-30px]"
          />
        </div>
      </div>
    </div>
  );
};
const SpecialDish = () => {
  return (
    <div className="bg-main-black grid gap-5 lg:grid-cols-2 relative">
      <div>
        <img src={specialDish} alt="" />
      </div>
      <div className="py-20 px-5 content-center relative z-10">
        <div className="relative">
          <p className="text-primary font-bold ml-10 mb-2">Special Dish</p>
          <img src={separator} alt="" className="w-[100px] ml-10" />
          <motion.img
            animate={{ y: -10 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            src={specialBadge}
            alt=""
            className="absolute top-0 left-0"
          />
          <h1 className="text-5xl text-white font-bold my-5">
            Lobster Tortellini
          </h1>
          <p className="text-white/80 max-w-[400px] text-balance mb-5">
            Lorem Ipsum is simply dummy text of the printingand typesetting
            industry lorem Ipsum has been the industrys standard dummy text ever
            since the when an unknown printer took a galley of type.
          </p>
          <div>
            <span className="text-white/50 text-lg font-bold mr-5">$40.00</span>
            <span className="text-primary text-lg font-bold">$20.00</span>
          </div>
          <button
            data-text="view all menu"
            className="special-btn border-2 border-primary text-primary py-2.5 px-10 uppercase font-bold text-sm tracking-widest cursor-pointer mt-5 relative overflow-hidden"
          >
            view all menu
          </button>
        </div>
      </div>
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        src={dishShape}
        alt=""
        className="absolute bottom-[-80px] right-[50px] w-[200px] max-sm:hidden z-10"
      />
      <motion.img
        animate={{ y: 20 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        src={specialShape}
        alt=""
        className="absolute bottom-[100px] right-0"
      />
    </div>
  );
};
const Selection = () => {
  const { selectionData } = useContext(newContextApi);
  return (
    <div className="bg-second-black py-10 relative overflow-hidden">
      <motion.img
        animate={{ y: -100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        src={selectionShape1}
        alt=""
        className="absolute left-0 bottom-0"
      />
      <motion.img
        animate={{ y: 100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        src={selectionShape2}
        alt=""
        className="absolute right-0 bottom-0"
      />
      <p className="text-primary text-center font-bold tracking-widest text-lg relative">
        Special Selection
      </p>
      <img src={separator} alt="" className="w-[150px] mx-auto my-5 relative" />
      <h1 className="text-white text-center text-3xl lg:text-5xl relative mb-5">
        Delicious Menu
      </h1>
      <div className="relative grid max-xl:place-content-center xl:grid-cols-11 xl:gap-5 max-sm:px-0 max-md:px-8 md:px-16">
        <div className="col-span-5 p-5 space-y-10">
          {selectionData[0]}
          {selectionData[1]}
          {selectionData[2]}
        </div>
        <div className="selection-line relative max-xl:hidden"></div>
        <div className="col-span-5 p-5 space-y-10">
          {selectionData[3]}
          {selectionData[4]}
          {selectionData[5]}
        </div>
      </div>
      <p className="relative text-white text-center my-5 font-bold">
        During winter daily from <span className="text-primary">7:00 pm </span>
        to <span className="text-primary">9:00 pm</span>
      </p>
      <button
        data-text="view more"
        className="selection-btn border-2 border-primary text-primary py-2.5 px-10 uppercase font-bold text-sm tracking-widest cursor-pointer relative overflow-hidden mx-auto block"
      >
        view more
      </button>
    </div>
  );
};
const Quote = () => {
  return (
    <div
      className="bg-cover pt-10 pb-60"
      style={{ backgroundImage: `url(${imgQuote})` }}
    >
      <p className="text-center text-white text-7xl">”</p>
      <p className="text-center text-balance text-white max-sm:text-2xl text-5xl max-w-[800px] mx-auto">
        I wanted to thank you for inviting me down for that amazing dinner the
        other night. The food was extraordinary.
      </p>
      <div className="flex gap-2 justify-center mt-7">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="border-2 border-primary w-[10px] h-[10px] block"
        ></motion.span>
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="border-2 border-primary w-[10px] h-[10px] block"
        ></motion.span>
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="border-2 border-primary w-[10px] h-[10px] block"
        ></motion.span>
      </div>
      <img
        src={imgAvatar}
        alt=""
        className="rounded-full mx-auto object-contain w-[100px] mt-10 mb-5"
      />
      <p className="text-primary text-center font-bold text-lg">Sam Jhonson</p>
    </div>
  );
};
const GetTable = () => {
  return (
    <div className="bg-main-black pb-24 relative px-5">
      <motion.img
        animate={{ filter: "blur(1px)", scale: 0.95 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        src={imgGetTableShape}
        alt=""
        className="absolute bottom-0 right-0"
      />
      <div className="grid lg:grid-cols-7 mx-auto max-w-[1000px] relative top-[-150px]">
        <form className="bg-second-black lg:col-span-5 p-5">
          <h1 className="text-center text-white font-bold text-3xl md:text-5xl">
            Online Reservation
          </h1>
          <p className="my-5 text-center text-white text-sm">
            Booking request{" "}
            <span className="text-primary font-extrabold cursor-pointer duration-300 hover:text-primary/80">
              +88-123-123456
            </span>{" "}
            or fill out the order form
          </p>
          <div className="grid lg:grid-cols-3 gap-3">
            <div className="lg:col-span-3 grid lg:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-main-black border-[1px] border-white/30 outline-0 px-2.5 py-1.5 duration-300 focus:border-primary text-white placeholder:text-[12px] placeholder:text-white placeholder:duration-300 focus:placeholder:opacity-0"
              />
              <input
                placeholder="Your Phone"
                type="text"
                className="bg-main-black border-[1px] border-white/30 outline-0 px-2.5 py-1.5 duration-300 focus:border-primary text-white placeholder:text-[12px] placeholder:text-white placeholder:duration-300 focus:placeholder:opacity-0"
              />
            </div>
            <select
              name=""
              id=""
              className="bg-main-black col-span-1 text-white border-[1px] border-white/30 outline-0 px-2.5 py-1.5 cursor-pointer duration-300 focus:border-primary"
            >
              <option value="">1 Person</option>
              <option value="">2 Person</option>
              <option value="">3 Person</option>
              <option value="">4 Person</option>
              <option value="">5 Person</option>
              <option value="">6 Person</option>
              <option value="">7 Person</option>
            </select>
            <input
              type="date"
              className="form-date bg-main-black col-span-1 uppercase text-white border-[1px] border-white/30 outline-0 px-2.5 py-1.5 font-bold cursor-pointer duration-300 focus:border-primary"
            />
            <select
              name=""
              id=""
              className="bg-main-black col-span-1 text-white border-[1px] border-white/30 outline-0 px-2.5 py-1.5 cursor-pointer duration-300 focus:border-primary"
            >
              <option value="">08:00 am</option>
              <option value="">09:00 am</option>
              <option value="">10:00 am</option>
              <option value="">11:00 am</option>
              <option value="">12:00 am</option>
              <option value="">01:00 pm</option>
              <option value="">02:00 pm</option>
              <option value="">03:00 pm</option>
              <option value="">04:00 pm</option>
              <option value="">05:00 pm</option>
              <option value="">06:00 pm</option>
              <option value="">07:00 pm</option>
              <option value="">08:00 pm</option>
              <option value="">09:00 pm</option>
              <option value="">10:00 pm</option>
              <option value="">11:00 pm</option>
              <option value="">12:00 pm</option>
            </select>
            <textarea
              placeholder="Message"
              className="bg-main-black border-[1px] resize-none min-h-[100px] border-white/30 outline-0 px-2.5 py-1.5 duration-300 focus:border-primary text-white placeholder:text-[12px] placeholder:text-white placeholder:duration-300 focus:placeholder:opacity-0 lg:col-span-3"
            ></textarea>
            <button
              data-text="book a table"
              type="submit"
              className="form-btn bg-primary lg:col-span-3 px-2.5 py-3 uppercase text-sm font-bold border-[1px] border-primary cursor-pointer relative overflow-hidden"
            >
              book a table
            </button>
          </div>
        </form>
        <div
          className="bg-second-black lg:col-span-2 bg-cover p-5"
          style={{ backgroundImage: `url(${formPattern})` }}
        >
          <h1 className="text-center text-white text-lg md:text-4xl">
            Contact Us
          </h1>
          <p className="text-center text-white text-[12px] md:text-sm font-bold my-5">
            Booking Request
          </p>
          <p className="form-tel text-center text-primary font-bold text-lg md:text-3xl cursor-pointer relative mb-7">
            +88-123-123456
          </p>
          <div></div>
          <p className="text-sm text-center text-white font-bold my-2.5">
            Location
          </p>
          <p className="text-center text-white/60 font-bold mb-5 text-sm ">
            Restaurant St, Delicious City,
            <br /> London 9578, UK
          </p>
          <p className="text-sm text-center text-white font-bold my-2.5">
            Lunch Time
          </p>
          <p className="text-center text-white/60 font-bold mb-5 text-sm ">
            Monday to Sunday
            <br /> 11.00 am - 2.30pm
          </p>
          <p className="text-sm text-center text-white font-bold my-2.5">
            Dinner Time
          </p>
          <p className="text-center text-white/60 font-bold mb-5 text-sm ">
            Monday to Sunday
            <br /> 05.00 pm - 10.00pm
          </p>
        </div>
      </div>
    </div>
  );
};
const OurStrength = () => {
  const { ourStrengthData } = useContext(newContextApi);
  return (
    <div className="bg-main-black pb-10 relative px-5 pt-2">
      <p className="text-center text-primary font-bold tracking-widest">
        Why Choose Us
      </p>
      <img src={separator} alt="" className="w-[125px] my-5 mx-auto" />
      <h1 className="text-white text-center font-bold text-5xl tracking-widest">
        Our Strength
      </h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto my-10 relative z-10">
        {ourStrengthData}
      </div>
      <motion.img
        animate={{ filter: "blur(1px)", scale: 0.95 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        src={ourStrengthShape}
        alt=""
        className="absolute bottom-0 left-0"
      />
    </div>
  );
};
const UpComingEvents = () => {
  const { upComingEventsData } = useContext(newContextApi);
  return (
    <div className="bg-second-black py-20 px-14">
      <p className="text-center text-primary font-bold tracking-widest">
        Recent Updates
      </p>
      <img src={separator} alt="" className="w-[125px] mx-auto my-2.5" />
      <h1 className="text-center text-white text-5xl font-bold tracking-widest">
        Upcoming Event
      </h1>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mt-10 mx-auto max-w-[1000px]">
        {upComingEventsData}
      </div>
      <button
        data-text="view our blog"
        className="up-coming-events-btn block mx-auto px-5 py-2.5 border-[1px] border-primary uppercase font-bold text-primary text-sm mt-10 tracking-widest cursor-pointer relative overflow-hidden"
      >
        view our blog
      </button>
    </div>
  );
};
const Footer = () => {
  const { footerLinks } = useContext(newContextApi);
  return (
    <div
      className="py-20 px-2.5 bg-cover"
      style={{ backgroundImage: `url(${imgFooter})` }}
    >
      <div className="grid gap-5 md:grid-cols-4">
        <div className="max-md:order-2 flex flex-col gap-2.5 justify-center">
          {footerLinks[0]}
          {footerLinks[1]}
          {footerLinks[2]}
          {footerLinks[3]}
          {footerLinks[4]}
        </div>
        <div
          className="bg-second-black/70 md:col-span-2 max-md:order-1 text-center py-10 px-2.5 bg-cover"
          style={{
            backgroundImage: `url(${imgFormFooter})`,
          }}
        >
          <img src={logo} alt="" className="mx-auto w-[150px] mb-5" />
          <p className="text-white/60 mb-1.5 font-bold">
            Restaurant St, Delicious City, London 9578, UK
          </p>
          <p className="text-white/60 mb-1.5 cursor-pointer duration-300 hover:text-primary font-bold">
            booking@grilli.com
          </p>
          <p className="text-white/60 mb-1.5 cursor-pointer duration-300 hover:text-primary font-bold">
            Booking Request: +88-123-123456
          </p>
          <p className="text-white/60 mb-1.5 font-bold">
            Open : 09:00 am - 01:00 pm
          </p>
          <div className="flex gap-2 justify-center mt-7">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="border-2 border-primary w-[10px] h-[10px] block"
            ></motion.span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="border-2 border-primary w-[10px] h-[10px] block"
            ></motion.span>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="border-2 border-primary w-[10px] h-[10px] block"
            ></motion.span>
          </div>
          <h1 className="text-white text-4xl mt-5">Get News & Offers</h1>
          <p className="text-white/60 mt-2 mb-10">
            Subscribe us & Get <span className="text-white">25% Off</span>.
          </p>
          <form action="" className="flex justify-center">
            <input
              type="text"
              placeholder="Your Email"
              className="bg-second-black text-white border-[1px] border-r-0 border-white/50 px-2.5 py-2.5 outline-0 duration-300 focus:border-primary placeholder:duration-300 focus:placeholder:opacity-0 placeholder:text-sm placeholder:text-white"
            />
            <button
              type="submit"
              data-text="subscribe"
              className="footer-form-btn text-primary border-[1px] border-primary text-[10px] px-2 uppercase py-2.5 font-bold tracking-widest cursor-pointer overflow-hidden relative"
            >
              subscribe
            </button>
          </form>
        </div>
        <div className="max-md:order-3 max-md:text-center flex flex-col justify-center gap-2.5">
          {footerLinks[5]}
          {footerLinks[6]}
          {footerLinks[7]}
          {footerLinks[8]}
          {footerLinks[9]}
        </div>
      </div>
      <p className="text-center text-white/80 font-bold text-sm mt-14">
        © {new Date().getFullYear()} Grilli. All Rights Reserved | Crafted by{" "}
        <span className="text-primary duration-300 hover:text-primary/70 cursor-pointer underline">
          NoorEldin
        </span>
      </p>
    </div>
  );
};
const ScrollToTop = () => {
  const [scrollValue, setScrollValue] = useState("hide");
  useEffect(() => {
    const handleScrollToTop = () => {
      if (window.scrollY > 100) {
        setScrollValue("show");
      } else {
        setScrollValue("hide");
      }
    };
    window.addEventListener("scroll", handleScrollToTop);
    return () => window.removeEventListener("scroll", handleScrollToTop);
  }, []);
  return (
    <motion.div
      animate={scrollValue === "show" ? { x: 0 } : { x: "100vh" }}
      transition={{ duration: 0.3 }}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-[30px] right-[30px] w-[40px] h-[40px] cursor-pointer border-2 border-primary rounded-full text-center content-center text-primary duration-300 hover:text-black hover:bg-primary z-40`}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </motion.div>
  );
};
