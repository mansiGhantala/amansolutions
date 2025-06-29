import { useAuth } from "../store/auth"
import './Service.css'
const Service = () => {

  const {services} = useAuth();

  return (<>
  <section className="section-services">
    <div className="container">
      <h1 className="main-handing">Services</h1>
    </div>
    <div className="container grid grid-three-cols">

{services.length === 0 ? (
    <p>Loading Services...</p>
) : (
    services.map((curElem, index) => {
        const { price, description, provider, service } = curElem;

        return (
            <div className="card" key={index}>
                <div className="card-img">
                    <img src="/images/about.png" alt="our services info" width='200' />
                </div>
                <div className="card-details">
                    <div className="grid grid-two-cols">
                        <p>{provider}</p>
                        <p>{price}</p>
                    </div>
                    <h2>{service}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    })
)}

   
    </div>
  </section>
      

  </>
  )
}

export default Service