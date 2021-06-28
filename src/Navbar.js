import './Navbar.css';

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
            <a class="nav-link" href="#">Our Impact</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Our Tech</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
            </li>
            </ul>
            </div>
            </nav>
         
        </>
    )
}

export default Navbar;
