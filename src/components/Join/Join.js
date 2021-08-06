import React, { useState } from 'react'
import './Join.css'
import WebText from '../../TextData';

const Join = () => {
    const [isJob, setIsJob] = useState(false);
    const [isIntern, setIsIntern] = useState(false);

    return (
        <section>
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>{WebText.joinPage.home.title}</h2>
                    <p>{WebText.joinPage.home.description}</p>
                </div>

                {/* <div style={{textAlign: 'center', margin: '50px 0px'}}>
                    <h1 style={{margin: '50px 0px'}}>{isJob || isIntern ? WebText.joinPage.form.text1 : WebText.joinPage.form.text2}</h1>
                    {
                        !isJob && !isIntern &&
                        <div>
                            <button className="jobBtn" onClick={() => setIsJob(true)}>Job</button>
                            <button className="internBtn" onClick={() => setIsIntern(true)}>Intern</button>
                        </div>
                    }
                </div> */}

                {/* {
                    isJob && 
                    <iframe 
                        title="Job"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSerYW2y5ddzv39sdhnAFF1GEZfjeKh_kIEGkIgfZrGtWjPHOg/viewform?embedded=true" 
                        width="100%" 
                        height="900px" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0"
                    >Loading…</iframe>
                } */}

                {/* {
                    isIntern && 
                    <iframe 
                        title="Intern"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeTYTdvfchWGbNv7JsJMqyvSfAJ1lFFYphqV7roq_CYbLOSUg/viewform?embedded=true" 
                        width="100%" 
                        height="900px" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0"
                    >Loading…</iframe>
                } */}

                <br/>
                <br/>
                <iframe 
                    title="Apply Form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe8TFjcPYNOGnndIkAMm1Jr-UWJbnR5xyH8GUFkzx_zglNIRw/viewform?embedded=true" 
                    width="100%" 
                    height="1000px" 
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0"
                >Loading…</iframe>
                
            </div>
        </section>
    )
}

export default Join
