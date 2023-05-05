import Layout from "@/components/Layout";
import Valueadded from "@/components/Valueadded";

export default function organic() {
  return (
    <>
      <Layout>
        {/* <!-- TITLE --> */}
        <div className="index-title row justify-content-center mb-5">
          <h1 className="text-center col-md-6">
            ORGANIC
            <span className="py-4 d-inline-block">
              WE ARE THE LARGEST ORGANIC GRAIN TRADING COMPANY IN THE UK!
            </span>
          </h1>
          <h3 className="h5 fw-normal text-center">
            (WE ALSO HAVE A PRESENCE THROUGHOUT EUROPE)
          </h3>
        </div>
        {/* <!-- IMAGE --> */}
        <div className="container-fluid hero-image">
          <div className="row mb-md-5 pb-md-5 justify-content-center">
            <img
              src="./images/products/organic.jpg"
              alt="leaf"
              srcset=""
              className="col-md-8 px-0"
            />
          </div>
        </div>
        {/* <!-- TEXT --> */}
        <div className="about-content container col-10 col-md-7">
          <div className="row">
            <p className="mt-5 pt-5 mt-md-0 pt-md-0 lh-lg">
              Feed Factors has over 15 years’ experience in supplying organics
              with long-standing relationships with numerous suppliers and many
              loyal customers. With a wealth of experience, sourcing a range of
              commodities from over 14 different countries throughout the globe,
              we can offer numerous origins to suit the needs of our buyers.
            </p>

            <p className="lh-lg my-5">
              From the farm to the fork we can provide traceability documents.
              With our catalogue of premium products we provide full
              traceability throughout the supply chain. This ensures the
              integrity of any product marketed as organic.
            </p>

            <p className="lh-lg mb-5 pb-5">
              Feed Factors Ltd, trades with full ‘Organic Food Federation’
              approval, ensuring quality and traceability throughout.
            </p>
          </div>
        </div>
        {/* <!-- PRODUCTS --> */}
        <div className="container my-5 products">
          <div className="row product-cards justify-content-around">
            <div className="pet-food col-md-5 mb-md-0 mb-5">
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
            <div className="animal-feed col-md-5">
              <div className="card grow text-bg-dark">
                <img
                  src="./images/homepage/chickens.jpg"
                  className="card-img"
                  alt="chickens"
                />
                <div className="card-img-overlay d-flex justify-content-center align-items-end">
                  <a href="/animalfeed" className="link-spanner"></a>
                  <a
                    href="/animalfeed"
                    className="fw-semibold fs-6 text-center text-decoration-none"
                  >
                    NON GM AND ANIMAL FEED
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
