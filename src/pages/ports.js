import Layout from "../components/Layout";
import Valueadded from "../components/Valueadded";

export default function ports() {
  return (
    <>
      <Layout>
        <div className="index-title row justify-content-center mb-5">
          <h1 className="text-center col-md-6">
            PORTS AND STORAGE
            <span className="py-4 d-inline-block">
              FEED FACTORS HAS THE LARGEST COMMITTED STORAGE OF SPECIALIST
              COMMODITIES THROUGHOUT THE UK
            </span>
          </h1>
        </div>
        <div className="container-fluid hero-image">
          <div className="row mb-md-5 pb-md-5 justify-content-center">
            <img
              src="./images/products/ports.jpg"
              alt=""
              srcset=""
              className="col-md-8 px-0"
            />
          </div>
        </div>
        <div className="about-content container col-10 col-md-7">
          <div className="row">
            <p className="my-4 pt-5 pt-md-0">
              We’re ideally positioned to meet customer requirements; by
              reducing the time and distance on the roads, we’re increasing our
              efficiency, and our efforts of sustainability.
            </p>

            <p className="my-4">
              The storage network enables us to discharge our ships, store our
              cargoes in GAFTA and OFF approved warehouses, and deliver to our
              customers premises across the length of the UK.
            </p>
          </div>
        </div>
        <Valueadded />
      </Layout>
    </>
  );
}
