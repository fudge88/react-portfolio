import "./footer.css";
import { useContext } from "react";
import { modeContext } from "../../context";

function Footer() {
  const mode = useContext(modeContext);
  const darkMode = mode.state.darkMode;
  return (
    <div class="footer-basic">
      <div>
        <div
          class="social"
          style={{
            color: darkMode && "#ff4500",
          }}
        >
          <a
            style={{
              backgroundColor: darkMode && "white",
            }}
            href="#"
          >
            <i class="ionicons ion-android-download"></i>
          </a>
          <a
            style={{
              backgroundColor: darkMode && "white",
            }}
            href="#"
          >
            <i class="ionicons ion-ios-email"></i>
          </a>
          <a
            style={{
              backgroundColor: darkMode && "white",
            }}
            href="#"
          >
            <i class="icon ion-social-linkedin"></i>
          </a>
          <a
            style={{
              backgroundColor: darkMode && "white",
            }}
            href="#"
          >
            <i class="icon ion-social-github"></i>
          </a>
        </div>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a
              style={{
                color: darkMode && "white",
              }}
              href="#"
            >
              Home
            </a>
          </li>
          <li class="list-inline-item">
            <a
              style={{
                color: darkMode && "white",
              }}
              href="#"
            >
              About
            </a>
          </li>
          <li class="list-inline-item">
            <a
              style={{
                color: darkMode && "white",
              }}
              href="#"
            >
              Portfolio
            </a>
          </li>
          <li class="list-inline-item">
            <a
              style={{
                color: darkMode && "white",
              }}
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <p class="copyright">Fahra Akhlaq | Full Stack Developer</p>
      </div>
    </div>
  );
}

export default Footer;
