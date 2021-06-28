import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
            <a class="navbar-brand" href="#">NEUROGENE</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
            <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" >
            <Link
                activeClass="active"
                to="impact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
            >Our Impact
            </Link>

            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
            <Link
                activeClass="active"
                to="tech"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
            >Our Tech
            </Link>
            
            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={400}
            >Contact Us
            </Link>
            </a>
            </li>
            </ul>
            </div>
            </nav>
         
        </>
    )
}

export default Navbar;
