import React from 'react'
import './modal.css'

import ecommerces1 from '../../images/ecommerces/ecommerces1.jpg'
import ecommerces2 from '../../images/ecommerces/ecommerces2.jpg'
import ecommerces3 from '../../images/ecommerces/ecommerces3.jpg'
import ecommerces4 from '../../images/ecommerces/ecommerces4.jpg'
import ecommerces5 from '../../images/ecommerces/ecommerces5.jpg'

import whatsup1 from '../../images/whatsup/whatsup1.jpg'
import whatsup2 from '../../images/whatsup/whatsup2.jpg'
import whatsup3 from '../../images/whatsup/whatsup-responsive1.jpg'
import whatsup4 from '../../images/whatsup/whatsup-responsive2.jpg'

import imgShare1 from '../../images/imgShare/imgShare1.jpg'
import imgShare2 from '../../images/imgShare/imgShare2.jpg'
import imgShare3 from '../../images/imgShare/imgShare-responsive1.jpg'
import imgShare4 from '../../images/imgShare/imgShare-responsive2.jpg'

import trex1 from '../../images/T-Rex/t-rex1.jpg'

import defaultImg from '../../images/defaultImg.jpg'

function Modal(props) {
    const { project, close } = props
    return (
        <div className="bounceIn bg-dark projectDetail">
            <div className="d-flex justify-content-end font-3 m-3 text-danger">
            <i className="pointer hover-danger far fa-times-circle" onClick={ _ => close(false)}></i>
            </div>
            <div className="imgDetail d-flex justify-content-center ">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="zoomer carousel-item active">
                            <img src={
                                project.images && project.images[0] === "ecommerces1" ? ecommerces1 :
                                project.images && project.images[0] === "whatsup1" ? whatsup1 : 
                                project.images && project.images[0] === "imgShare1" ? imgShare1 : 
                                project.images && project.images[0] === "t-rex1" ? trex1 : 
                                defaultImg
                            } alt={project.name} />
                        </div>
                            {
                                project.images && project.images.map(image => {
                                    console.log(image)
                                    return <div className="zoomer carousel-item">
                                            <img src={
                                                project.name === "E-commerces" 
                                                ?
                                                image === "ecommerces2" ? ecommerces2 :
                                                image === "ecommerces3" ? ecommerces3 :
                                                image === "ecommerces4" ? ecommerces4 :
                                                ecommerces5
                                                :
                                                project.name === "WhatsUp"
                                                ?
                                                image === "whatsup2" ? whatsup2 :
                                                image === "whatsup3" ? whatsup3 :
                                                whatsup4
                                                :
                                                project.name === "ImgShare"
                                                ? 
                                                image === "imgShare2" ? imgShare2 :
                                                image === "imgShare3" ? imgShare3 :
                                                imgShare4
                                                : trex1
                                            } className="d-block w-100" alt={project.name} />
                                        </div>
                                })
                            }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next text-dark" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className=" p-1 d-flex justify-content-center bg-light">
                <h1>{project.name}</h1>
            </div>
            <div className="p-1 d-flex justify-content-center bg-light">
                <h1 className="p-2">{project.description}</h1>
            </div>
            <div className="p-1 bg-dark">
                <h1 className="d-flex justify-content-center text-light">Technologies used</h1>
                <ul className="d-flex flex-wrap">
                    {
                        project.technologies && project.technologies.map(technology => {
                            return <li className=" m-1 badge-pill badge-primary">{technology}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Modal
