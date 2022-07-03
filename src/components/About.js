import React from 'react';
// import img from './img/back.jpg';
function About() {
    return (
        <div className="section" id="about">
            <div className="container-fluid">
                <div className='row'>
                <div className="col-md-6 main" data-aos="fade-up" 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
                    <h4>01</h4>
                    <h1 className="size-50">Know <br /> About me</h1>
                    <div className="hh-50"></div>
                    <p>Appropriately maintain standards compliant total linkage with cutting-edge action items.
                        Enthusiastically create seamless synergy rather than excellent value. Quickly promote premium
                        strategic theme areas vis-a-vis.</p>
                    <p>A fully enthusiastic and motivated person</p>
                    <div className="hh-50"></div>
                    <img src="images/signature.png" width="230" alt="" />
                    <div className="hh-50"></div>
                </div>
                <div className="col-md-6">
                    <img src="images/back.jpg" width="400" className="img-fluid" alt="hh" align="right"
                        data-aos="fade-right" 
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About