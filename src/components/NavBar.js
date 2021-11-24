import React from 'react';
// import '../styles/reset.css';
// import '../styles/NavBar.css';

function NavBar() {
    return (
        <header title="skyline of portland,or">
            <nav>
                <h1>Paige Olsen</h1>
                <ul>    
                    <a href="#about_me"><li>About</li></a>
                    <a href="#portfolio"><li>Portfolio</li></a> 
                    <a href="#contact"><li>Contact</li></a>
                </ul>
            </nav>
            <figcaption>
                <h2>Keep Portland Weird</h2>
            </figcaption>
        </header>
    );
  }


export default NavBar;