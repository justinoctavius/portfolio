import React from 'react';
import { Link} from 'react-router-dom';
import './navbar.css';
import { ClassHelper } from '../../events'
function Navbar(props) {

    const { select } = props

    return (
        <div className="slideRight p-3">
            <ul className="nav d-flex justify-content-between">
                    <li className={select === "home" ? "bounceIn active nav-item" : "nav-item"} id={"home"}>
                        <Link className="nav-link hover-warning" 
                              to="/" 
                              onMouseOver={e => ClassHelper.setClass(e.currentTarget, "shake")}
                              onMouseLeave={e => ClassHelper.removeOne(e.currentTarget, "shake")}
                              onAnimationEnd={e => ClassHelper.removeOne(e.currentTarget, ' bounceIn')}
                              >Home</Link>
                    </li>
                <div className="d-flex">
                    <li className={select === "about" ? "bounceIn active nav-item" : "nav-item"} id={"about"}>
                        <Link className="nav-link hover-warning" 
                              to="/about" 
                              onMouseOver={e => ClassHelper.setClass(e.currentTarget, "shake")}
                              onMouseLeave={e => ClassHelper.removeOne(e.currentTarget, "shake")}
                              onAnimationEnd={e => ClassHelper.removeOne(e.currentTarget, ' bounceIn')}
                              >About</Link>
                    </li>
                    <li className={select === "projects" ? "bounceIn active nav-item" : "nav-item"} id={"projects"}>
                        <Link className="nav-link hover-warning" 
                              to="/projects"
                              onMouseOver={e => ClassHelper.setClass(e.currentTarget, "shake")}
                              onMouseLeave={e => ClassHelper.removeOne(e.currentTarget, "shake")}
                              onAnimationEnd={e => ClassHelper.removeOne(e.currentTarget, ' bounceIn')}
                              >Projects</Link>
                    </li>
                    <li className={select === "contact" ? "bounceIn active nav-item" : "nav-item"} id={"contact"}>
                        <Link className="nav-link hover-warning"
                              onMouseOver={e => ClassHelper.setClass(e.currentTarget, "shake")}
                              onMouseLeave={e => ClassHelper.removeOne(e.currentTarget, "shake")}
                              onAnimationEnd={e => ClassHelper.removeOne(e.currentTarget, ' bounceIn')}
                              to="/contact">Tell me something</Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar
