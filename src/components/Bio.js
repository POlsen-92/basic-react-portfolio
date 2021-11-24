import React from 'react';
import coverPhoto from '../images/cover_photo.jpg';

function Bio() {
    return (
        <main>
            <br /> <br />
            <section className="about_me" id="about_me">
                <h3>About Me</h3>
                <div className="intro">
                    <img src={coverPhoto} alt="woman smiles at camera" />
                    <br />
                    <p>
                        My name is Paige Olsen, I'm 28 years old and a parent to two adorable children with my husband. My family lives a couple miles north of Portland, Oregon; the city where I was born and raised. 
                        <br />
                        For the last several years I've worked in the fitness industry utilizing my Bachelors of Science in Nutrition and Exercise Physiology. Last year I went back to school to complete a second Bachelors of Science in Biology but by the end of the year I'd begun to learn computer coding beginning with CSS, HTML and JavaScript. 
                        <br />
                        I'm now working through a coding bootcamp run through the University of Washington in order to solidify my skills and will be finished in December of 2021. 
                    </p>
                </div>
            </section>
            <br /> <br />
        </main>
    );
  }


export default Bio;