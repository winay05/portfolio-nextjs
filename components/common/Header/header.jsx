import { useEffect } from "react";
import { openModal } from "../Modal/modal";
import { HeaderWrapper } from "./header.css";

const Header = () => {
  const handleToggle = () => {
    const headerList = document.getElementById("header-list");
    const hamburgerBtn = document.getElementById("hamburger");

    if (headerList && hamburgerBtn) {
      headerList.classList.toggle("open");
      hamburgerBtn.classList.toggle("open");
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth > 768) {
          const headerList = document.getElementById("header-list");
          const hamburgerBtn = document.getElementById("hamburger");

          if (headerList && hamburgerBtn) {
            headerList.classList.remove("open");
            hamburgerBtn.classList.remove("open");
          }
        }
      },
      { passive: true }
    );
  }, []);
  const handleResumeClick = (e) => {
    if (window.innerWidth > 767) {
      e.preventDefault();
      openModal();
    }
  };
  return (
    <HeaderWrapper>
      <ul id="header-list" className="header-list">
        <li className="header-list__item">About</li>
        <li className="header-list__item">Experience</li>
        <li className="header-list__item">Projects</li>
        <li className="header-list__item">Contact</li>
        <li className="header-list__item">
          <a
            onClick={handleResumeClick}
            href="https://drive.google.com/file/d/1ruegUNTF5Qiiw2OSfsUZBT_ZzFyEh5_O/view"
            target={"_blank"}
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
      <button onClick={handleToggle} className="nav-toggle">
        <span id="hamburger" className="hamburger"></span>
      </button>
    </HeaderWrapper>
  );
};

export default Header;
