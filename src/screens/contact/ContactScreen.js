import React, { useEffect } from 'react';
import './contactScreen.css';

function ContactScreen(props) {

    const {setSelect} = props

    useEffect(() => {
        setSelect('contact')
    })

    return (
        <div className="contact-box my-7 slideDown d-flex font-3 justify-content-center">
            <div className="bg-dark pulse formBox p-5">
                <div>
                    <h1 className="title font-4 text-primary">Tell me something</h1>
                </div>
                <div className=" p-5 my-5">
                    <p>Are you interested in working with me or just have a question?</p>
                    <p className="text-light text-center">Send me a email: <span><a href="mailto:justinoctavio2001@gmail.com">justinoctavio2001@gmail.com</a></span></p>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen
