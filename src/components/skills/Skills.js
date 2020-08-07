import React from 'react';
import './skill.css'

function Skills() {
    return (
        <div className="w-100 slideDown">
            <div className="list my-5">
                <div className="skill">
                    <div className="item"><p>HTML</p><span className="html">90</span></div>
                    <div className="item"><p>CSS</p><span className="css">80</span></div>
                    <div className="item"><p>JAVASCRIPT</p><span className="javascript">80</span></div>
                    <div className="item"><p>React</p><span className="react">75</span></div>
                    <div className="item"><p>Redux</p><span className="redux">70</span></div>
                    <div className="item"><p>Nodejs</p><span className="nodejs">70</span></div>
                    <div className="item"><p>English</p><span className="english">75</span></div>
                    <div className="item"><p>Spanish</p><span className="spanish">100</span></div>
                </div>
            </div>
        </div>
    )
}

export default Skills
