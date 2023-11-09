import Navbar from '../../atoms/Navbar';
import Logo from '../../../assets/images/logo.svg';

export default function Header() {

    return (
        <div>
            <img src={Logo} />
            <Navbar />
        </div>
    )
}