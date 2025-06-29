import Analytics from '../components/Analytics';
import { useAuth } from '../store/auth';
import './About.css';

const About = () => {

        const { user } = useAuth();    
    
    return (<>
        <section className="section-about">
            <div className="container-about">
                <div className="about-content">
                   <p> {user? `${user.username} ! `: ``}Welcome to the Aman Solutions 
                  </p> 
                    <h1>Why Choose Us?</h1>
                    <ul>
                        <li><strong>Expertise:</strong> Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</li>
                        <li><strong>Customization:</strong> We understand that every business is unique. That's why we create solutions tailored to your specific needs and goals.</li>
                        <li><strong>Customer-Centric Approach:</strong> We prioritize your satisfaction and provide top-notch support to address your IT concerns.</li>
                        <li><strong>Affordability:</strong> We offer competitive pricing without compromising the quality of our services.</li>
                        <li><strong>Reliability:</strong> Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.</li>
                    </ul>

                    <div className="btn-group">
                        <a href="/contact"><button className="btn">Connect Now</button></a>
                        <a href="/service"><button className="btn">Learn More</button></a>
                    </div>
                </div>

                <div className="about-image">
                    <img src="/images/about.png" alt="About illustration" />
                </div>
            </div>
        </section>
<Analytics/>
   </> );
}

export default About;
