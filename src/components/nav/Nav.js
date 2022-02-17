import "./nav.css";
import { useMediaQuery } from "react-responsive";

function Nav() {
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  let prevScrollPosition = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPosition = window.pageYOffset;
    if (prevScrollPosition > currentScrollPosition) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = [
        isMobile ? "-210px" : "-100px",
      ];
    }
    prevScrollPosition = currentScrollPosition;
  };
  return (
    <div id="navbar">
      <a className="nav-item" href="#home">
        About
      </a>
      <a className="nav-item" href="#news">
        Portfolio
      </a>
      <a className="nav-item" href="#contact">
        Contact
      </a>
    </div>
  );
}

export default Nav;
