import React, { useEffect } from 'react'
import './aboutScreen.css'
import Skills from '../../components/skills/Skills'
import Self from '../../components/self/Self'

function AboutScreen(props) {

    const {setSelect} = props

    useEffect(() => {
        setSelect('about')
    })

    return (
        <div className="container my-7">
            <div className="slideRight row justify-content-center text-primary">
               <h1 className=" font-5 title">About</h1>
            </div>
            <div className="row text-center justify-content-center">
                <div className="col-sm-3">
                    <div className="zoomer icon font-5 text-primary">
                        <i className="fas fa-tachometer-alt"></i>
                    </div>
                    <div className="description">
                        <h1 className="text-dark">Fast</h1>
                        <div className="text-muted">
                            <p className="font-2">
                            Fast load times and lag free interaction, my highest priority.
                            </p>
                        </div>
                    </div>                    
                </div>
                <div className="col-sm-3">
                    <div className="zoomer icon font-5 text-primary">
                    <i className="fas fa-mobile-alt"></i>                                 
                    </div>
                    <div className="description">
                        <h1 className="text-dark">Responsive</h1>
                        <div className="text-muted">
                            <p className="font-2">
                            My layouts will work on any device, big or small.
                            </p>
                        </div>
                    </div>   
                </div>
                <div className="col-sm-3">
                    <div className="zoomer icon font-5 text-primary">
                        <i className="far fa-lightbulb"></i>   
                    </div>
                    <div className="description">
                        <h1 className="text-dark">Intuitive</h1>
                        <div className="text-muted">
                            <p className="font-2">
                            Strong preference for easy to use, intuitive UX/UI.
                            </p>
                        </div>
                    </div>   
                </div>
                <div className="col-sm-3">
                    <div className="zoomer icon font-5 text-primary">
                        <i className="fas fa-rocket"></i>                 
                    </div>
                    <div className="description">
                        <h1 className="text-dark">Dynamic</h1>
                        <div className="text-muted">
                            <p className="font-2">
                            Websites don't have to be static, I love making pages come to life.
                            </p>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <Skills />
                </div>
                <div className="col-md-5">
                    <Self />
                </div>
            </div>
        </div>
    )
}

export default AboutScreen
