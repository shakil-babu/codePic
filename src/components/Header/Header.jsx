import './Header.css';
import {FaCode} from 'react-icons/fa';
const Header = () => {
    return (
        <>
            <div className="header-area">
                <div className="header-logo">
                    <FaCode className='logo-icon'/> <h3>codePic.</h3>
                </div>
                <p>Create a beautiful shot of your source code its free 😍🥰.</p>
            </div>
        </>
    )
}

export default Header
