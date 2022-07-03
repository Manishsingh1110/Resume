import React from 'react'

function Experience() {
    return (
        <div className="section" id="experience">
            <div className="container">
                <div className="col-md-12">
                    <h4>04</h4>
                    <h1 className="size-50">My <br /> Experience</h1>
                    <div className="hh-50"></div>
                </div>
                <div className="col-md-11">
                    <ul className="timeline">
                        <li className="timeline-event" data-aos="fade-up">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">January 2022 - March 2022</p>
                                <h3>Data analyst</h3>
                                <h4>Kserve BPO</h4>
                                <p><strong>3 Months</strong>
                                    <br/>My responsibility was to verify and clean the data...
                                </p>
                            </div>
                        </li>
                        <li className="timeline-event" data-aos="fade-up" data-aos-delay=".2">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">September 2021-January 2022</p>
                                <h3>Data Operator</h3>
                                <h4>New Star Technology</h4>
                                <p><strong>6 Months</strong>
                                    <br/>My responsibility was to create and maintain company's database...</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience