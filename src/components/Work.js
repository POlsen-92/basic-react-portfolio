import React from 'react';
import '../styles/Work.css';

function Work() {
    return (
        <section class="portfolio" id="portfolio">
            <h4>Portfolio</h4>
            <div class= "work">
                <a href="https://github.com/POlsen-92/Manatee-Clicker" target="_blank" rel="noreferrer">
                    <div class="main-work">
                        <figure>
                            <label>
                                <h5>Manatee Clicker</h5>
                                <p>JavaScript, Express</p>
                            </label>
                        </figure>
                    </div>
                </a>
                <div class="minor-work">
                    <a href="https://github.com/POlsen-92/WorkOut_Generator_App" target="_blank" rel="noreferrer">
                        <figure class="mw-1">
                            <label>
                                <h5>Workout App</h5>
                                <p>jQuery/Pure.CSS</p>
                            </label>
                        </figure>
                    </a>  
                    <a href="https://github.com/POlsen-92/Employee_Management_System" target="_blank" rel="noreferrer">
                        <figure class="mw-2">
                            <label>
                                <h5>Employee Management System</h5>
                                <p>MySQL2, Inquirer</p>
                            </label>
                        </figure>
                    </a>
                    <a href="https://github.com/POlsen-92/Coding_Quiz" target="_blank" rel="noreferrer">
                        <figure class="mw-3">
                            <label>
                                <h5>Coding Quiz</h5>
                                <p>HTML/CSS</p>
                            </label>
                        </figure>
                    </a>
                </div>
            </div>
        </section>
    );
  }


export default Work;