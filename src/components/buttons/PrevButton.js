import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function PrevButton(props) {
    const { select } = props

    const [prev, setPrev] = useState('');

    useEffect(() => {
        if(select === "home"){
            setPrev('contact')
        }else if(select === "projects"){
            setPrev('about')
        }else if(select === "contact"){
            setPrev('projects')
        }else{
            setPrev('')
        }
    },[select])
    
    return (
        <Link to={`/${prev}`} className="font-2 m-1 btn btn-primary pulse">Prev</Link>
    )
}

export default PrevButton
