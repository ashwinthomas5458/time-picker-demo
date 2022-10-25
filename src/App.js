import "./styles/bootstrap.min.css";
import "./styles/app.css";

import React, { useEffect, useState } from "react";
import TimePicker from "@ashwinthomas/react-time-picker-dropdown";

function App() {
  const defaultValue = "10 : 00: 00 am";
  const placeholder = "hh : mm : ss a";
  const allowBackdrop = true;
  const showClockIcon = true;
  const showCloseIcon = true;
  const useTwelveHourFormat = true;

  const [timechange, setTimeChange] = useState(null);
  const [timeInput, setTimeInput] = useState(null);
  const [copyFeedbackOne, setCopyFeedbackOne] = useState(false);
  const [copyFeedbackTwo, setCopyFeedbackTwo] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const handleTimeChange = (val) => {
    setTimeChange(val);
  }

  const handleTimeInput = (val) => {
    setTimeInput(val);
  }

  const triggerCopyFeedback = (key) => {
    if (key === 1) {
      setCopyFeedbackOne(true);
      setTimeout(() => {
        setCopyFeedbackOne(false);
      }, 800);
    }
    else if (key === 2) {
      setCopyFeedbackTwo(true);
      setTimeout(() => {
        setCopyFeedbackTwo(false);
      }, 800);
    }
  }

  const handleInstallationCopy = () => {
    if (window.navigator) {
      window.navigator.clipboard.writeText("$ npm i @ashwinthomas/react-time-picker-dropdown").then(() => {
        console.log("copied");
        triggerCopyFeedback(1);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  const handleDataCopy = () => {
    let data = `import TimePicker from '@ashwinthomas/react-time-picker-dropdown';

    render() {
      <TimePicker
            defaultValue="10:10:00"
            onTimeChange={handleTimeChange}        
        />
    }`
    if (window.navigator) {
      window.navigator.clipboard.writeText(data).then(() => {
        console.log("copied");
        triggerCopyFeedback(2);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.pageYOffset>(window.innerHeight/3)){
      setNavActive(true);
      }
      else{
       setNavActive(false); 
      }
    });
  },[]);

  return (
    <div className="container-fluid tp-main-wrapper d-flex flex-column px-0">
      <header className="container-fluid position-fixed tp-header-wrap d-flex px-0">
        <div className={navActive? "d-flex tp-nav-bar justify-content-center w-100 tp-nav-active": "d-flex tp-nav-bar justify-content-center w-100"}>
          <div className="tp-container align-items-center">
          <a className="tp-nav-link d-flex" href="https://ashwinthomas.in">
            <svg width="50" height="32" viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="t-logo-bg" d="M7.62185 8.74134C8.00464 8.24559 8.41891 7.79575 8.86451 7.39154L7.62185 8.74134Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M5.56261 12.7415L12.4154 5.29731C13.0702 5.07604 13.7509 4.9243 14.4574 4.84223L5.017 15.0973C5.14659 14.2701 5.32836 13.4849 5.56261 12.7415Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M4.81074 17.0844C4.78786 17.5009 4.77649 17.9265 4.77649 18.3614C4.77649 18.5353 4.77838 18.7077 4.78203 18.8788L17.6228 4.93013C17.1509 4.84515 16.6569 4.79398 16.141 4.77649L4.81074 17.0844Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M18.9313 5.27166L4.87882 20.5368C4.93013 21.0626 5.00068 21.5738 5.09047 22.0699L20.0827 5.78403C19.7183 5.58345 19.3345 5.41276 18.9313 5.27166Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M21.1075 6.434L5.41014 23.4858C5.53273 23.9346 5.67325 24.3697 5.8314 24.7913L21.9988 7.22872C21.7273 6.94098 21.4302 6.67612 21.1075 6.434Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M22.7482 8.17795C22.8628 8.35244 22.9703 8.53319 23.0711 8.72021V7.82709L25.5826 5.09878H27.2057L19.1086 13.8946C18.0278 13.9185 17.1382 14.3101 16.4399 15.0692C15.789 15.7766 15.4319 16.7393 15.3685 17.9574L6.97246 27.0779C6.75338 26.7317 6.54697 26.3683 6.35325 25.9876L22.7482 8.17795Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M7.67681 28.0758C7.92767 28.3948 8.19195 28.6955 8.46949 28.978L15.9069 20.8987C15.7045 20.5187 15.558 20.0901 15.4676 19.6128L7.67681 28.0758Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M20.5387 14.1042C20.9289 14.2397 21.2851 14.4402 21.6074 14.7063L30.4518 5.09878H28.8287L20.5387 14.1042Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M32.0749 5.09878L22.3991 15.6094C22.6212 15.9677 22.7884 16.3738 22.9004 16.828L33.4647 5.35227V5.09878H32.0749Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M33.4647 7.11531L23.0709 18.4058C23.0663 19.2585 22.9288 19.9957 22.6583 20.6172L33.4647 8.87836V7.11531Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M33.4647 10.6414L13.9717 31.8163C14.459 31.8942 14.9592 31.9386 15.4718 31.95L33.4647 12.4046V10.6414Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M33.4647 14.1676L17.1719 31.8663C17.9236 31.7719 18.6226 31.6003 19.2689 31.3513L33.4647 15.9307V14.1676Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M33.4647 17.6939L23.0711 28.9844V30.7474L33.4647 19.4569V17.6939Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M33.4647 21.2201L23.8874 31.6238H25.5105L33.4647 22.9832V21.2201Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M33.4647 24.7464L27.1334 31.6238H28.7567L33.4647 26.5096V24.7464Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M33.4647 28.2726L30.3798 31.6238H32.0028L33.4647 30.0357V28.2726Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M37.3507 27.5776C37.4126 28.057 37.5396 28.5067 37.7318 28.9265L44.3703 21.7152C44.0365 21.6739 43.6886 21.6533 43.3264 21.6533C43.144 21.6533 42.9654 21.6585 42.7904 21.6685L37.3507 27.5776Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M40.8186 22.0472L37.4212 25.7379C37.6343 24.7337 38.1448 23.8738 38.9525 23.1584C39.4886 22.6683 40.1106 22.2979 40.8186 22.0472Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M45.7146 22.0181L38.3942 29.9701C38.5611 30.1695 38.7471 30.3601 38.9525 30.5421C39.0518 30.6299 39.1539 30.7139 39.259 30.7938L46.8481 22.55C46.4972 22.3334 46.1194 22.1561 45.7146 22.0181Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M47.7929 23.2867L40.3086 31.4168C40.6957 31.5916 41.112 31.727 41.5575 31.8232L48.5635 24.2127C48.3521 23.882 48.0953 23.5732 47.7929 23.2867Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M49.0984 25.3947L43.022 31.9953C43.1223 31.9984 43.2237 32 43.3264 32C43.8266 32 44.2998 31.9618 44.746 31.8857L49.2987 26.9402C49.299 26.918 49.2992 26.8958 49.2992 26.8737C49.2992 26.3482 49.2322 25.8552 49.0984 25.3947Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M48.5432 29.5239L47.4443 30.7178C47.5153 30.6611 47.5848 30.6025 47.653 30.5421C48.0068 30.2288 48.3034 29.8893 48.5432 29.5239Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M12.632 31.5086L20.998 22.4207C20.4742 22.693 19.88 22.8291 19.2147 22.8291C19.1434 22.8291 19.073 22.8275 19.0033 22.8244L11.4264 31.0553C11.8182 31.2327 12.2201 31.3839 12.632 31.5086Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M10.3353 30.4773L17.6544 22.5266C17.2852 22.3675 16.9486 22.1453 16.6447 21.8603L9.35371 29.7804C9.60603 29.9841 9.86739 30.1752 10.1379 30.3539C10.2034 30.3958 10.2693 30.437 10.3353 30.4773Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path className="t-logo-bg" d="M23.9597 5.09878L23.0711 6.06405V5.09878H23.9597Z" fill="#2C2C2C" fillOpacity="0.6" />
              <path fillRule="evenodd" clipRule="evenodd" d="M12.4276 2.93937C10.6344 2.93937 9.05263 3.4099 7.64095 4.34214L7.63283 4.3475L7.62464 4.35275C6.23194 5.2462 5.08593 6.58224 4.21295 8.43907C3.38172 10.2421 2.93937 12.4354 2.93937 15.0613C2.93937 17.6828 3.38021 19.893 4.21298 21.7306C5.08325 23.5506 6.22965 24.8933 7.63285 25.8222C9.044 26.7253 10.6289 27.1833 12.4276 27.1833C13.9487 27.1833 15.1804 26.8813 16.1751 26.3372C17.1961 25.7474 17.9492 24.9734 18.4703 24.0057L21.234 24.7025V26.8541H28.6882V3.26858H21.234V5.4202L18.4703 6.11698C17.9504 5.15146 17.2013 4.39687 16.1872 3.83914L16.175 3.83241L16.1629 3.82546C15.1709 3.25509 13.9445 2.93937 12.4276 2.93937ZM18.2946 1.68331V0.32921H31.6276V29.7935H18.2946V28.4727C18.0804 28.6202 17.8582 28.7601 17.6281 28.8924L17.616 28.8994L17.6037 28.9061C16.0923 29.7374 14.3492 30.1227 12.4276 30.1227C10.0912 30.1227 7.94773 29.5164 6.0375 28.291L6.0293 28.2857L6.02116 28.2804C4.10784 27.0168 2.62529 25.2298 1.55404 22.9836L1.54822 22.9715L1.54263 22.9592C0.497796 20.6605 0 18.015 0 15.0613C0 12.1086 0.497522 9.47492 1.54617 7.20285L1.5503 7.1939C2.61944 4.91766 4.10371 3.12168 6.02927 1.88399C7.93902 0.625073 10.0856 0 12.4276 0C14.3545 0 16.1024 0.40325 17.616 1.27034C17.8504 1.39972 18.0767 1.53739 18.2946 1.68331ZM12.0515 10.7742C13.0691 9.66811 14.3957 9.12381 15.9078 9.12381C17.42 9.12381 18.7466 9.66811 19.7642 10.7742C20.807 11.9076 21.234 13.4042 21.234 15.0613C21.234 16.7185 20.807 18.2151 19.7642 19.3485C18.7466 20.4546 17.42 20.9989 15.9078 20.9989C14.3957 20.9989 13.0691 20.4546 12.0515 19.3485C11.0087 18.2151 10.5817 16.7185 10.5817 15.0613C10.5817 13.4042 11.0087 11.9076 12.0515 10.7742ZM15.9078 12.0632C15.1625 12.0632 14.6393 12.3027 14.2147 12.7643C13.8152 13.1985 13.5211 13.8967 13.5211 15.0613C13.5211 16.226 13.8152 16.9241 14.2147 17.3584C14.6393 17.82 15.1625 18.0595 15.9078 18.0595C16.6532 18.0595 17.1764 17.82 17.601 17.3584C18.0005 16.9241 18.2946 16.226 18.2946 15.0613C18.2946 13.8967 18.0005 13.1985 17.601 12.7643C17.1764 12.3027 16.6532 12.0632 15.9078 12.0632ZM40.0195 19.8231C38.4822 19.8231 37.4066 20.2399 36.6374 20.9431L36.6289 20.9509L36.6202 20.9586C35.8472 21.6432 35.4694 22.4767 35.4694 23.5738C35.4694 24.6292 35.8397 25.4506 36.6202 26.1419C37.3884 26.8223 38.4703 27.2303 40.0195 27.2303C41.5299 27.2303 42.599 26.8264 43.3718 26.1419C44.1524 25.4506 44.5226 24.6292 44.5226 23.5738C44.5226 22.4767 44.1448 21.6432 43.3718 20.9586L43.3631 20.9509L43.3546 20.9431C42.5808 20.2356 41.5178 19.8231 40.0195 19.8231ZM34.6627 18.7658C36.0871 17.4679 37.9241 16.8838 40.0195 16.8838C42.0913 16.8838 43.9097 17.4722 45.3293 18.7658C46.7454 20.0241 47.462 21.6648 47.462 23.5738C47.462 25.4656 46.7349 27.0897 45.3207 28.3423C43.8988 29.6017 42.0834 30.1697 40.0195 30.1697C37.9318 30.1697 36.0978 29.6058 34.6713 28.3423C33.2571 27.0897 32.53 25.4656 32.53 23.5738C32.53 21.6648 33.2466 20.0241 34.6627 18.7658Z" fill="#2C2C2C" />
            </svg>
          </a>
          </div>
        </div>
      </header>
      <main className="container-fluid px-0 d-flex flex-column">
        <div className="container-fluid px-0 d-flex tp-cover-wrapper position-relative justify-content-center">
          <svg className="tp-cover-bg position-absolute d-none d-md-block" width="530" height="826" viewBox="0 0 530 826" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="432.5" cy="393.5" r="432.5" fill="#E2E2E2" />
          </svg>
          <div className="tp-container tp-cover-container d-flex flex-column justify-content-center">
            <h1 className="tp-title">React time picker dropdown.</h1>
            <h3 className="tp-title">Time picker component for your react app.</h3>
            <div className="tp-btn-wrapper">
              <a className="tp-btn tp-primary-btn position-relative" href="https://www.npmjs.com/package/@ashwinthomas/react-time-picker-dropdown">
                <div className="tp-primary-btn-background position-absolute"></div>
                Install
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 tp-trial-wrapper d-flex justify-content-center">
          <div className="tp-container tp-trial-container">
            <h3 className="tp-title">Try it out</h3>
            <TimePicker
              defaultValue={defaultValue}
              onInputChange={handleTimeInput}
              onTimeChange={handleTimeChange}
              placeholder={placeholder}
              allowBackdrop={allowBackdrop}
              showClockIcon={showClockIcon}
              showCloseIcon={showCloseIcon}
              useTwelveHourFormat={useTwelveHourFormat}
            />
            <div className="tp-code-wrapper d-flex flex-column">
              <div className="tp-code-content d-flex flex-column">
                <div className="d-flex">
                  <span className="tp-code-t1">&lt;</span><span className="tp-code-t2">TimePicker</span>
                </div>
                <div className="d-flex ps-3 pt-1">
                  <span className="tp-code-t1">defaultValue</span><span className="tp-code-t1">=</span><span className="tp-code-t4">"</span><span className="tp-code-t5">{defaultValue ? defaultValue : "null"}</span><span className="tp-code-t4">"</span>
                </div>
                <div className="d-flex ps-3 pt-1">
                  <span className="tp-code-t1">placeholder</span><span className="tp-code-t1">=</span><span className="tp-code-t4">"</span><span className="tp-code-t5">{placeholder ? placeholder : "null"}</span><span className="tp-code-t4">"</span>
                </div>
                <div className="d-flex ps-3 pt-1">
                  <span className="tp-code-t1">useTwelveHourFormat</span><span className="tp-code-t1">=</span><span className="tp-code-t3">{`{`}</span><span className="tp-code-t4">{useTwelveHourFormat ? "true" : "false"}</span><span className="tp-code-t3">{`}`}</span>
                </div>
                <div className="d-flex ps-3 pt-1">
                  <span className="tp-code-t1">showClockIcon</span><span className="tp-code-t1">=</span><span className="tp-code-t3">{`{`}</span><span className="tp-code-t4">{showClockIcon ? "true" : "false"}</span><span className="tp-code-t3">{`}`}</span>
                </div>
                <div className="d-flex ps-3 pt-1">
                  <span className="tp-code-t1">showCloseIcon</span><span className="tp-code-t1">=</span><span className="tp-code-t3">{`{`}</span><span className="tp-code-t4">{showCloseIcon ? "true" : "false"}</span><span className="tp-code-t3">{`}`}</span>
                </div>
                <div className="d-flex ps-3 pt-1">
                  <span className="tp-code-t1">allowBackdrop</span><span className="tp-code-t1">=</span><span className="tp-code-t3">{`{`}</span><span className="tp-code-t4">{allowBackdrop ? "true" : "false"}</span><span className="tp-code-t3">{`}`}</span>
                </div>
                <div className="d-flex pt-1">
                  <span className="tp-code-t1">/</span><span className="tp-code-t1">&gt;</span>
                </div>
              </div>
            </div>
            <div className="w-100 t-output-wrapper">
              <div className="row">
                <div className="col-lg-6">
                  <div className="w-100">
                    <div className="row gy-3">
                      <div className="col-lg-6">
                        <div className="w-100 d-flex flex-column">
                          <label htmlFor="time-change" className="tp-label">onTimeChange</label>
                          <input id="time-change" className="tp-input" value={timechange} readOnly={true} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="w-100 d-flex flex-column">
                          <label htmlFor="time-change" className="tp-label">onInputChange</label>
                          <input id="time-change" className="tp-input" value={timeInput} readOnly={true} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 tp-content-wrapper d-flex justify-content-center">
          <div className="tp-container tp-content-container">
            <h3 className="tp-title">Installation</h3>
            <div className="tp-code-wrapper my-3 position-relative">
              <svg className="position-absolute tp-copy-btn" onClick={handleInstallationCopy} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" fill="#323232" />
              </svg>
              <div className={copyFeedbackOne ? "tp-copy-feedback tp-feedback-active" : "tp-copy-feedback"}>
                Text Copied.
              </div>
              <div className="tp-code-content d-flex flex-column">
                <span className="tp-code-t5">npm i @ashwinthomas/react-time-picker-dropdown</span>
              </div>
            </div>
            <h3 className="tp-title pt-5">Usage</h3>
            <div className="tp-code-wrapper my-3 position-relative">
              <svg className="position-absolute tp-copy-btn" onClick={handleDataCopy} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" fill="#323232" />
              </svg>
              <div className={copyFeedbackTwo ? "tp-copy-feedback tp-feedback-active" : "tp-copy-feedback"}>
                Text Copied.
              </div>
              <div className="tp-code-content d-flex flex-column">
                <div className="d-flex mb-4">
                  <span className="tp-code-t1">import</span><span className="tp-code-t2 ps-3">TimePicker</span><span className="tp-code-t1 ps-3">from</span><span className="tp-code-t5 ps-3">"@ashwinthomas/react-time-picker-dropdown"</span><span className="tp-code-t4">;</span>
                </div>
                <div className="d-flex pt-1">
                  <span className="tp-code-t1">render</span><span className="tp-code-t5">()</span><span className="tp-code-t4">{`{`}</span>
                </div>
                <div className="d-flex pt-1 ps-4">
                  <span className="tp-code-t1">&lt;</span><span className="tp-code-t2">TimePicker</span>
                </div>
                <div className="d-flex ps-5 pt-1">
                  <span className="tp-code-t1">defaultValue</span><span className="tp-code-t1">=</span><span className="tp-code-t4">"</span><span className="tp-code-t5">10:00:00</span><span className="tp-code-t4">"</span>
                </div>
                <div className="d-flex ps-5 pt-1">
                  <span className="tp-code-t1">onTimeChange</span><span className="tp-code-t1">=</span><span className="tp-code-t4">{`{`}</span><span className="tp-code-t3">handleTimeChange</span><span className="tp-code-t4">{`}`}</span>
                </div>
                <div className="d-flex pt-1 ps-4">
                  <span className="tp-code-t1">/</span><span className="tp-code-t1">&gt;</span>
                </div>
                <div className="d-flex pt-1">
                  <span className="tp-code-t4">{`}`}</span>
                </div>
              </div>
            </div>
            <p className="tp-desc">
              You can import the <span className="fw-bold">TimePicker</span> from <span className="fw-bold">@ashwinthomas/react-time-picker-dropdown</span>. Currently appearance customizisation using props is limited to clock and close icon visibility, however you can use the timepicker class names to change the default appearance. Time selection using the timepicker component can also be done using a keyboard by making use of the <span className="fw-bold">arrowkeys</span> and <span className="fw-bold">enter</span> key, and an <span className="fw-bold">esc</span> key can be used to close the dropdown.
            </p>
            <h3 className="tp-title pt-5">Props</h3>
            <div className="pt-4 w-100">
              <div className="table-responsive-lg">
                <table className="table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Prop name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Default value</th>
                      <th scope="col">Example values</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>defaultValue</td>
                      <td>Sets default input value supports formats hh:mm:ss a and hh:mm:ss</td>
                      <td>null</td>
                      <td>"10:10:00 am"</td>
                    </tr>
                    <tr>
                      <td>placeholder</td>
                      <td>Can be used to set input placeholder</td>
                      <td>"00 : 00 : 00"</td>
                      <td>"hh : mm : ss"</td>
                    </tr>
                    <tr>
                      <td>useTwelveHourFormat</td>
                      <td>Use useTwelveHourFormat props to switch between 24 / 12 hour format</td>
                      <td>false</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>onTimeChange</td>
                      <td>Function called when user picks a time. (Returns null if the input value is invalid.)</td>
                      <td>n/a</td>
                      <td>{`(value)=>alert("Time selected is: ", value)`}</td>
                    </tr>
                    <tr>
                      <td>onInputChange</td>
                      <td>Function called when picker value changed using the dropdown</td>
                      <td>n/a</td>
                      <td>{`(value)=>alert("Display time changed: ", value)`}</td>
                    </tr>
                    <tr>
                      <td>showCloseIcon</td>
                      <td>showCloseIcon can be used to toggle close icon visibility</td>
                      <td>true</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>showClockIcon</td>
                      <td>showClockIcon can be used to toggle clock icon visibility</td>
                      <td>true</td>
                      <td>true</td>
                    </tr>
                    <tr>
                      <td>allowBackdrop</td>
                      <td>allowBackdrop can be used to toggle backdrop</td>
                      <td>false</td>
                      <td>false</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="container-fluid d-flex align-items-center justify-content-center py-4 tp-footer">
        <h6 className="mb-0">React time picker dropdown | Ashwin Thomas</h6>
      </footer>
    </div>
  );
}

export default App;
