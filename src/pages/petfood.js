import Layout from "@/components/Layout";
import Valueadded from "@/components/Valueadded";

export default function petfood() {
  return (
    <>
      <Layout>
        {/* <!-- TITLE --> */}
        <div className="index-title row justify-content-center mb-5">
          <h1 className="text-center col-md-6">
            PET FOOD
            <span className="py-4 d-inline-block">
              FEED FACTORS LTD IS THE LARGEST SUPPLIER OF ‘GRAIN FREE
              INGREDIENTS’ BOTH IN THE UK AND THE CONTINENT.
            </span>
          </h1>
        </div>
        {/* <!-- IMAGE --> */}
        <div className="container-fluid hero-image">
          <div className="row mb-md-5 pb-md-5 justify-content-center">
            <img
              src="./images/products/dog2.jpeg"
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
              We work closely with the UK’s Pet food manufactures to supply a
              large range of ingredients; covering the ‘Essentials’ to the more
              ‘Specialist’.
            </p>

            <h2 className="mt-5 pt-5 mt-md-0 pt-md-0">ESSENTIALS</h2>
            <p className="my-4">
              Feed Factors is largest importer of Sweet Potato Pellets in the
              UK. Our business model is to have substantial strategic stock so
              we can continue to deliver in times of market volatility.
            </p>
            <p className="my-4">
              We pioneered the import of Sweet Potato Pellets in bulk and pride
              ourselves on our policy ‘to never run out’. Read more of our first
              imported vessel here.
            </p>
            <h2>SPECIALIST</h2>
            <p className="my-4">
              Our specialist products include, Peas, Potato, Rice, Pumpkin
              Powder and Inactive Brewer’s Yeast.
            </p>
            <p className="my-4">
              We can offer our full range of material ranging from 1 Mt bags to
              a bulk tipper truck.
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
