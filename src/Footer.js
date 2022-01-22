import React from 'react';

function Footer() {
    return (
    <footer>
        <a className="socials" href="https://github.com/maryferrer" target="_blank" rel="noreferrer">
            <i className="fab fa-github-square" />
            <span className="sr-only">Github</span>
        </a>
        <a className="socials" href="https://www.linkedin.com/in/mary-ferrer-909700162/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin" />
            <span className="sr-only">LinkedIn</span>
        </a>
        <a href="mailto:mary.ferrer6@gmail.com" className="socials"><i class="fas fa-envelope" /><span className="sr-only">Email</span></a>
    </footer>
    )
};

export default Footer;