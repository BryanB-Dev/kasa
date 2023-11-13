import Navbar from '../../molecules/Navbar';
import Logo from '../../../assets/images/logo.svg';

export default function Header() {

    return (
        <div>
            <img src={Logo} />
            <Navbar />
        </div>
    )
}