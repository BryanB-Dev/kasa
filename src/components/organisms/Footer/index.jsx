import Logo from "../../../assets/images/logo-white.svg";
import "./style.scss";

export default function Footer() {

    return (
        <footer className="footer">
            <img src={Logo} alt='Logo' />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}