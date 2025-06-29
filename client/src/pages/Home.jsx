import Analytics from '../components/Analytics';
import './Home.css'

const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container_hero">
                        <div className="hero-content">
                            <p>We are the world's best IT company</p>
                            <h1>Welcome to Aman Solutions</h1>
                            <p className='heroLast_P'>At Aman Solutions, we are committed to delivering top-notch IT services and innovative solutions that help businesses grow and succeed. Our team of experts specializes in web development, software engineering, and cutting-edge technologies to provide you with reliable and efficient digital products.</p>
                            <div className="btn-group">
                                <a href="/contact"><button className="btn">Connect Now</button></a>
                                <a href="/service"><button className="btn">Learn Now</button></a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src="/images/home.png" alt="puzzle solve graphics" />
                        </div>
                    </div>
                </section>
            </main>
<Analytics/>
             <section className="section-hero">
                    <div className="container_hero">
                    <div className="hero-image">
                            <img src="/images/home1.png" alt="puzzle solve graphics" />
                        </div>
                        <div className="hero-content">
                           <p>Your Success Starts Here</p>
                           <h1>Get Started with Aman Solutions</h1>
                           <p className='heroLast_P'>We offer top-quality IT services and digital solutions to help your business grow. From web development to software engineering, our team is ready to turn your vision into reality. Let’s work together!</p>
                            <div className="btn-group">
                                <a href="/contact"><button className="btn">Connect Now</button></a>
                                <a href="/service"><button className="btn">Learn Now</button></a>
                            </div>
                        </div>
                        
                    </div>
                </section>
        </>
    );
}

export default Home;
