import React, { useEffect } from 'react'
import './home.css'
import { useLocation } from 'react-router-dom';

function HomeScreen(props) {
    const {setSelect} = props;
    const location = useLocation();
    
    useEffect(() => {
    },[location])

    useEffect(() => {
        setSelect('home');
    })

    return (
        <div className="slideDown d-flex justify-content-center title-center row text-primary">
                <div>
                    <h1 className="heartbeat
                                    text-dark
                                    text-center
                                    font-4 main-title">
                        <b className="font-5
                                        text-info">
                            Hi!
                        </b> i'm Justin Colon
                    </h1>
                    <h2 className="text-muted font-2 wiggle">Web developer</h2>
                </div>
        </div>
    )
}

export default HomeScreen
