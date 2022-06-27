import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import MyExample from '../assets/MyExample.png';



function Header(props) {

    const [isOpen, setDrop] = useState(false);

    const toggleMenu = () => {
        setDrop(isOpen => !isOpen);
    }

    return (
            <div className='border-bottom bg-white'>
                <div className="container pt-3">
                    <div className="row">
                        <div className="col">
                            <Link to="/" className='text-decoration-none text-reset'>
                            <a className="navbar-brand d-flex" href="#">
                                <img className="me-2" src={logo} alt="" width="36" height="36"/>
                                <p className="fs-4">모여라!</p>
                            </a>
                            </Link>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <a className="nav-link" toggle-target="dropdown" href="#" role="button" onClick={()=>toggleMenu()}><img src={MyExample} alt="" width="36" height="36"/></a>
                            <ul className={(isOpen ? "d-block" : "d-none") + " dropdown-menu square mt-5"}>
                                <li><a className="dropdown-item" href="#">마이페이지</a></li>
                                <li><a className="dropdown-item" href="#">로그아웃</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Header;