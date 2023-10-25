
const ContactUsSection = () => {
    return (
        <div className="contact-us-section mt-10 container px-5 py-3 mx-auto bg-gradient-to-br from-fuchsia-300 via-violet-300 to-purple-200">
            <div className="contact-info">
                <h2 className="text-3xl text-center font-bold my-5">Contact Us</h2>
                <p className="font-serif font-semibold">If you have any questions or need assistance, please feel free to contact us. Our team is here to help you.</p>
                <p>
                    <strong>Phone: 01861443532</strong> 
                </p>
                <p>
                    <strong>Email: <a href="kafikafi1922@gmail.com">kafikafi1922@gmail.com</a></strong> 
                </p>
                <p>
                    <strong>Address: Dhaka</strong> 
                </p>
            </div>
            <div className="contact-form">
                <h3 className="text-2xl text-center font-bold my-5" >Send us a message</h3>
                <form className="">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-group">
                        <label htmlFor="name">Name : </label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group ">
                        <label htmlFor="email">Email : </label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    </div>
                    
                    <div className="form-group mt-5">
                        <label htmlFor="message">Message : </label>
                        <textarea id="message" name="message" required rows="4"></textarea>
                    </div>
                    <button className="p-2 bg-slate-400 rounded-xl" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUsSection;