import "./nav.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

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
        isMobile ? "-230px" : "-100px",
      ];
    }
    prevScrollPosition = currentScrollPosition;
  };
  return (
    <div id="navbar">
      <a className="nav-item">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          S
        >
          Introduction
        </Link>
      </a>
      <a className="nav-item">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          About
        </Link>
      </a>
      <a className="nav-item">
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
      </a>
      <a className="nav-item">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
      </a>
    </div>
  );
}

export default Nav;
