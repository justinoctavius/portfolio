import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function NextButton(props) {
    const { select } = props
    const [next, setNext] = useState('');

    useEffect(() => {
        if(select === "about"){
            setNext('projects')
        }else if(select === "projects"){
            setNext('contact')
        }else if(select === "contact"){
            setNext('')
        }else{
            setNext('about')
        }
    },[select])
    
    return (
        <Link to={`/${next}`} className="font-2 m-1 btn btn-primary pulse">Next</Link>
    )
}

export default NextButton
