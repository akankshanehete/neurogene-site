import './Contact.css';


const Contact = () => {
    return (
        <div className='contact-wrapper ' id='contact'>
            <h1 className='contact-tit'>GET IN TOUCH</h1>
            <section class="get-in-touch">
            
            <form class="contact-form row">
                <div class="form-field">
                    <input id="name" class="input-text js-input" type="text" required/>
                    <label class="label" for="name">Name</label>
                </div>
                <div class="form-field ">
                    <input id="email" class="input-text js-input" type="email" required/>
                    <label class="label" for="email">E-mail</label>
                </div>
                <div class="form-field ">
                    <input id="message" class="input-text js-input" type="text" required/>
                    <label class="label" for="message">Message</label>
                </div>
                
            </form>
            <div className='text-center'>
            <button className='btn btn-outline-dark sub-btn'>Submit</button>
            <p>Designed and Built by Akanksha Nehete </p>
            </div>
            </section>

            
       
        </div>
    );
}

export default Contact;
