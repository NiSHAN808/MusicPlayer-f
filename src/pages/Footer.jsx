import React, { useState } from "react";

function Footer() {
  const [isVisibleSupport, setIsViSupport] = useState(true); // true == hidden
  const [isVisibleOther, setIsViOther] = useState(true);
  const [isVisibleAbout, setIsViAbout] = useState(true);

  const toggleSupport = () => {
    setIsViSupport(!isVisibleSupport);
  };
  const toggleOther = () => {
    setIsViOther(!isVisibleOther);
  };
  const toggleAbout = () => {
    setIsViAbout(!isVisibleAbout);
  };
  return (
    <footer>
      <div className="inline-block w-full bg-blue-800  text-white inline-block p-[3rem]  ">
        <div className="flex justify-around max-[700px]:flex-col">
          <div className="inline-block">
            <header className="text-[2.5rem] flex justify-between">
              Support
              <button
                onClick={toggleSupport}
                className="hidden max-[700px]:flex"
              >
                {isVisibleSupport ? (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                ) : (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 14l-5-5-5 5h10z" />
                  </svg>
                )}
              </button>
            </header>
            <ul className={isVisibleSupport ? "max-[700px]:hidden" : " "}>
              <li className="mt-[1.8rem]">Contact us</li>
              <li className="mt-[1.8rem]">Return policy</li>
              <li className="mt-[1.8rem]">Terms & conditions</li>
              <li className="mt-[1.8rem]">Feedback</li>
            </ul>
          </div>

          <div className="inline-block">
            <header className="text-[2.5rem] flex justify-between">
              Other
              <button onClick={toggleOther} className="hidden max-[700px]:flex">
                {isVisibleOther ? (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                ) : (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 14l-5-5-5 5h10z" />
                  </svg>
                )}
              </button>
            </header>
            <ul className={isVisibleOther ? "max-[700px]:hidden" : " "}>
              <li className="mt-[1.8rem]">Investors</li>
              <li className="mt-[1.8rem]">Developer</li>
            </ul>
          </div>

          <div className="inline-block">
            <header className="text-[2.5rem] flex justify-between">
              About
              <button onClick={toggleAbout} className="hidden max-[700px]:flex">
                {isVisibleAbout ? (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                ) : (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 14l-5-5-5 5h10z" />
                  </svg>
                )}
              </button>
            </header>
            <ul className={isVisibleAbout ? "max-[700px]:hidden" : " "}>
              <li className="mt-[1.8rem]">Carrer</li>
              <li className="mt-[1.8rem]">Refer a friend</li>
              <li className="mt-[1.8rem]">Terms & conditions</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-content mt-[3rem] pt-[3rem] inline-flex justify-center items-center  flex-col">
          <div className="flex justify-around w-[20rem] ">
            <img src="/icon/x.png" className="w-[2rem]" />
            <img src="/icon/fb.png" className="w-[2rem]" />
            <img src="/icon/pin.png" className="w-[2rem]" />
            <img src="/icon/insta.png" className="w-[2rem]" />
          </div>

          <h6 className="pt-[3rem]">
            © 2025 NiSHAN, Company . All Rights Reserved
          </h6>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
