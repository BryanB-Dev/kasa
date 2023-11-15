import Navbar from '../../molecules/Navbar';
import Logo from '../../../assets/images/logo.svg';
import "./style.scss";

export default function Header({ location }) {

    return (
        <header className='header'>
            <img src={Logo} alt='Logo' />
            <Navbar location={location} />
        </header>
    )
}