import React from 'react';
import self from '../../images/self/self.jpeg';
import './self.css'

function Self() {
    return (
        <div className="my-5">
                <div className="row rollerLeft pulse d-flex justify-content-center">
                    <img className="image" src={self} alt="justin colon" />
                </div>
                <div className="row p-5 d-flex justify-content-center">
                    <div className="card py-5 bg-light slideLeft">
                        <div className="card-title">
                            <h3 className="text-info font-2 text-center">Justin Colon</h3>
                        </div>
                        <div className="card-body">
                            <p>
                                Hi my name is Justin Colon and 
                                I'm a self-taught developer and current student of <b>Software Engineer</b>.
                                I'm currently live in Dominican Republic, 
                                and I love learn and to discover new things
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Self
