import React from 'react';

function Info() {
    return (
        <div className="Info">
            <img src="./Amterdam-boat2.jpg" alt="Mary Ferrer" className="picture" />
            <h1>Mary Ferrer</h1>
            <h2>Front-end Developer</h2>
            <a href="https://maryferrer.github.io" className="website" target="_blank" rel="noreferrer">maryferrer.github.io</a>
            <section className="info--links">
                <a href="mailto:mary.ferrer6@gmail.com" className="email"><i class="fas fa-envelope"></i>Email</a>
                <a href="/mferrer resume.pdf" className="resume" target="_blank">Resume</a>
            </section>
        </div>
    )
}

export default Info;
