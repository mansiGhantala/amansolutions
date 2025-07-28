import { useAuth } from "../store/auth";
import './Service.css';

const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services.length === 0 ? (
            <p>Loading Services...</p>
          ) : (
            services.map((curElem, index) => {
              const { description, provider, service } = curElem;
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img src="/images/about.png" alt="service" />
                  </div>
                  <div className="card-details">
                    <div className="provider-name">
                      <p>{provider}</p>
                    </div>
                    <h2>{service}</h2>
                    <p className="description-text">{description}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
};

export default Service;
