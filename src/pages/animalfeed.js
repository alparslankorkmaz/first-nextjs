import Layout from "../components/Layout";
import Valueadded from "../components/Valueadded";

export default function animalfeed() {
  return (
    <>
      <Layout>
        {/* <!-- TITLE --> */}
        <div className="index-title row justify-content-center mb-5">
          <h1 className="text-center col-md-6">
            NON GM AND ANIMAL FEED
            <span className="py-4 d-inline-block">
              FEED FACTORS HAS BEEN IMPORTING SOYBEANS INTO THE UK FOR THE LAST
              35 YEARS.
            </span>
          </h1>
        </div>
        {/* <!-- IMAGE --> */}
        <div className="container-fluid hero-image">
          <div className="row mb-md-5 pb-md-5 justify-content-center">
            <img
              src="./images/products/chickens.jpg"
              alt=""
              srcset=""
              className="col-md-8 px-0"
            />
          </div>
        </div>
        {/* <!-- TEXT --> */}
        <div className="about-content container col-10 col-md-7 pb-5">
          <div className="row justify-content-between">
            <p className="mt-5 pt-5 mt-md-0 pt-md-0 pb-4 lh-lg">
              Feed Factors has been importing soybeans into the UK for the last
              35 years. It continues to support and service the needs of the
              customers throughout the country.
            </p>

            <p className="my-4">
              Feed Factors also import and distribute Non-GM Soya meal. We have
              the ability to deliver containers, curtain sider trucks - carrying
              1mt totes, bulk blower lorries and 29mt bulk tippers.
            </p>
            <p className="my-4">
              Fishmeal is sourced throughout the major producing countries
              across the world which is stored in our Liverpool facility.
            </p>
          </div>
        </div>
        {/* <!-- PRODUCTS --> */}
        <div className="container my-5 products">
          <div className="row product-cards justify-content-around">
            <div className="organic col-md-5 mb-md-0 mb-5">
              <div className="card grow text-bg-dark">
                <img
                  src="./images/homepage/leaf.jpg"
                  className="card-img"
                  alt="leaf"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-end">
                  <a href="/organic" className="link-spanner"></a>

                  <a
                    href="/organic"
                    className="fw-semibold fs-6 text-center text-decoration-none"
                  >
                    ORGANIC
                  </a>
                </div>
              </div>
            </div>
            <div className="petfood col-md-5">
              <div className="card grow text-bg-dark">
                <img
                  src="./images/homepage/dog.jpg"
                  className="card-img"
                  alt="dog"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-end">
                  <a href="/petfood" className="link-spanner"></a>

                  <a
                    href="/petfood"
                    className="fw-semibold fs-6 text-center text-decoration-none"
                  >
                    PET FOOD
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Valueadded />
      </Layout>
    </>
  );
}
