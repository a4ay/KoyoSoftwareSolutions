import React from 'react'
import './Contact.css'
import contactPhp from '../../Forms/contact.php'
// import { Email, Item, Span, A, renderEmail } from 'react-html-email'
import WebText from '../../../TextData';

function Contact() {
    return (
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>{WebText.contactPage.contact.title}</h2>
            <p>{WebText.contactPage.contact.description}</p>
            </div>

            

            <div className="row mt-5">

            <div className="col-lg-4">
                <div className="info">
                <div className="address" style={{paddingTop: '15px'}}>
                    <i className={WebText.contactPage.contact.address.icon1}></i>
                    <h4>{WebText.contactPage.contact.address.title1}</h4>
                    <p>{WebText.contactPage.contact.address.info1}</p>
                </div>

                <div className="email" style={{paddingTop: '35px'}}>
                    <i className={WebText.contactPage.contact.address.icon2}></i>
                    <h4>{WebText.contactPage.contact.address.title2}</h4>
                    <p>{WebText.contactPage.contact.address.info2}</p>
                </div>

                <div className="phone" style={{paddingTop: '35px'}}>
                    <i className={WebText.contactPage.contact.address.icon3}></i>
                    <h4>{WebText.contactPage.contact.address.title3}</h4>
                    <p>{WebText.contactPage.contact.address.info3}</p>
                </div>

                </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
                <h1 style={{textAlign: 'center', marginBottom: '30px', fontWeight: '800', fontSize: '30px'}}>{WebText.contactPage.contact.form.title}</h1>
                
                <form action={contactPhp} method="post" className="php-email-form">
                <div className="form-row">
                    <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                    </div>
                    <div className="col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate"></div>
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div className="validate"></div>
                </div>
                {/* <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div> */}
                <div className="text-center"><button type="submit">{WebText.contactPage.contact.form.btn}</button></div>
                </form>

            </div>

            </div>
<br/><br/>
{/* Map */}
            <div className="container section-title">
                <h2>{WebText.contactPage.map.title}</h2>
                <p>{WebText.contactPage.map.description}</p>
                <iframe title={WebText.contactPage.map.title} style={{border:'0', width: '100%', height: '320px', marginTop: '35px'}} 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.2642564899743!2d75.50407131517214!3d32.38527728109204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIzJzA3LjAiTiA3NcKwMzAnMjIuNSJF!5e0!3m2!1sen!2sus!4v1596982748456!5m2!1sen!2sus" 
                    frameBorder="0" allowFullScreen >
                </iframe>
            </div>
            {/* <div>
                <iframe title="map" style={{border:'0', width: '100%', height: '270px'}} 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3369.2642564899743!2d75.50407131517214!3d32.38527728109204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIzJzA3LjAiTiA3NcKwMzAnMjIuNSJF!5e0!3m2!1sen!2sus!4v1596982748456!5m2!1sen!2sus" 
                    frameBorder="0" allowFullScreen>
                </iframe>
            </div> */}

        </div>
        </section>
    )
}

export default Contact
