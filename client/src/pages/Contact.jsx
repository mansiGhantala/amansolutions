import { useState } from 'react';
import { useAuth } from '../store/auth';
import './Contact.css';
import { toast } from 'react-toastify';
const defaultContactFromData = {
     username: "",
        email: "",
        message: "",
};

const Contact = () => {

    const [contact, setContact] = useState(defaultContactFromData);

    const [userData, setUserData] = useState(true);

    const { user, API} = useAuth();

    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });
        setUserData(false);
    }

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(contact); 
        try {
            // const response = await fetch("http://localhost:5000/api/form/contact" ,{
            const response = await fetch(`${API}/api/form/contact` ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
      },
            body: JSON.stringify(contact),
    });

        if(response.ok){
            setContact(defaultContactFromData);
            const data = await response.json();
            console.log(data);
            // alert("Message send successfully");
            toast.success("Message send successfully");
        }
    } catch (error) {
        // alert("Messagea not send");
        toast.error("Message not send");
        console.log(error);
    }
};

return (
    <main>
        <section className="section-contact">
            <div className="container_contact">
                <div className="contact-image">
                    <img src="/images/contact.png" alt="Contact Support" />
                </div>
                <div className="contact-form">
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor='username'>Username</label>
                            <input type="text" name="username" id='username' placeholder="Enter your name" value={contact.username} onChange={handleInput} required autoComplete='off' />
                        </div>

                        <div className="form-group">
                            <label htmlFor='email'>Email</label>
                            <input type="email" name="email" id='email' placeholder="Enter your email" value={contact.email} onChange={handleInput} required autoComplete='off' />
                        </div>

                        <div className="form-group">
                            <label htmlFor='message'>Message</label>
                            <textarea name="message" id='message' cols='30' rows="6" placeholder="Write your message" value={contact.message} onChange={handleInput} required autoComplete='off'></textarea>
                        </div>

                        <button type="submit" className="btn-submit">Submit</button>
                    </form>
                </div>
            </div>

        </section>
        <section className="section-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7438.411854736735!2d72.8980636!3d21.223681199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f621b2e5dcb%3A0x46d9d0ad29e659d0!2sA-109%2C%20Siddharth%20Nagar%20Society%2C%20Nana%20Varachha%2C%20Surat%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1750307741300!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </main>
);
};

export default Contact;
