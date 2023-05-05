import Layout from "../components/Layout";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="scroll-container">
          {/* <!-- INDEX TITLE --> */}
          <div className="index-title row justify-content-center mb-5">
            <h1 className="text-center col-md-6 fading expandable">
              TRADING, IMPORTING AND DISTRIBUTION OF AGRICULTURAL COMMODITIES.
              <span className="py-4 d-block">WE ARE FEED FACTORS.</span>
            </h1>
          </div>

          <div className="container-fluid">
            {/* <!-- VIDEO --> */}
            <div className="video-container align-items-center">
              <div className="row mb-md-5 pb-md-5 justify-content-center">
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  className="col-md-10 pb-5 mb-5 px-0"
                >
                  <source src="./video/feed-factors.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- HOME CONTENT --> */}
        <div className="home-content row justify-content-center">
          <img
            data-aos="fade-right"
            className="py-5 px-0 d-none d-md-block home-img"
            src="./images/homepage/wheat-field.jpg"
            alt="wheat field"
            id="wheatbg"
          />
          <img
            data-aos="fade-right"
            className="py-5 px-0 d-block d-md-none home-img"
            src="./images/homepage/wheatmobile.jpg"
            alt="wheat field"
          />
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="home-info d-flex"
          >
            <div className="row justify-content-evenly align-items-center">
              <div className="col-md-4 p-4 my-sm-0 my-md-4">
                <h2 className="lh-base">
                  FEED FACTORS LTD IS THE LARGEST IMPORTER OF ORGANIC GRAINS,
                  OILSEEDS, AND PULSES IN THE UK, AS WELL AS BEING THE LEADING
                  IMPORTER OF ‘GRAIN FREE’ INGREDIENTS FOR THE PET FOOD
                  INDUSTRY.
                </h2>
                <p className="mt-md-3" id="tmark">
                  Feed Factors Ltd is a wholly owned subsidiary of
                  <u>
                    <a href="https://www.andersonsinc.com/">
                      {" "}
                      The Andersons, Inc.{" "}
                    </a>
                  </u>
                  A publicly traded Fortune 500® company.
                </p>
              </div>

              <div className="home-info-text p-4 col-md-6 my-md-4">
                <p>
                  We believe in building strong, long-term partnerships, working
                  closely with our suppliers and serving the needs of our
                  clients. We pride ourselves on being ‘forward thinking’,
                  anticipating and supporting the future needs of our customers.
                </p>

                <p>
                  We provide an uninterrupted supply chain of quality
                  ingredients from origin to consumer.
                </p>

                <p>
                  Our core values are to work in partnership with our suppliers
                  to originate sustainable feed ingredients that assist in the
                  protection of the environment. <br />
                  <a href="/sustainability" className="fw-bold">
                    Check out our sustainability page
                  </a>
                </p>
                <br />
                <p>
                  Feed Factors is the only trading company in the UK to hold two
                  queens awards for enterprise in the categories of;
                  ‘Innovation’ and ‘Sustainable Development’. We are also proud
                  to achieve a carbon neutral status for our head office in
                  addition to being part of the GAFTA sustainability pledge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- SLIDER --> */}
        <div
          className="slider container-fluid mt-5"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="slider-wrapper">
            <div>
              <div className="app">
                <div className="cardList">
                  <button
                    id="slider-button"
                    className="cardList__btn btn btn--left ms-5 ps-5"
                  >
                    <div className="icon fs-1 text-white"> ← </div>
                  </button>

                  <div className="cards__wrapper">
                    <div className="slider-card current--card">
                      <div className="card__image">
                        <a href="/petfood">
                          <span className="link-spanner"></span>
                        </a>
                        <img src="./images/homepage/dog.jpg" alt="" />
                      </div>
                    </div>

                    <div className="slider-card next--card">
                      <div className="card__image">
                        <a href="/organic">
                          <span className="link-spanner"></span>
                        </a>
                        <img src="./images/homepage/leaf.jpg" alt="" />
                      </div>
                    </div>

                    <div className="slider-card previous--card">
                      <div className="card__image">
                        <a href="/animalfeed">
                          <span className="link-spanner"></span>
                        </a>
                        <img src="./images/homepage/chickens.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  <button
                    id="slider-button"
                    className="cardList__btn btn btn--right me-5 pe-5"
                  >
                    <div className="icon fs-1 text-white"> → </div>
                  </button>
                </div>

                <div className="infoList">
                  <div className="info__wrapper">
                    <div className="info current--info">
                      <p className="h1 text name">PET FOOD</p>
                      <p className="h5 text location">Grain Free Ingredients</p>
                      <p className="text description">
                        the largest supplier of ‘grain free ingredients’ <br />
                        botn in the UK and the continent
                      </p>
                    </div>

                    <div className="info next--info">
                      <p className="h1 text name">ORGANIC</p>
                      <p className="h5 text location">15 years of experience</p>
                      <p className="text description">traceable throughout</p>
                    </div>

                    <div className="info previous--info">
                      <p className="h1 text name">
                        NON GM <br />& ANIMAL FEED
                      </p>
                      <p className="h5 text location">Value added</p>
                      <p className="text description">
                        importing soybeans into the UK for the last 35 years
                      </p>
                    </div>
                  </div>
                </div>

                <div className="app__bg">
                  <div className="app__bg__image current--image">
                    <img src="./images/homepage/dog.jpg" alt="" />
                  </div>
                  <div className="app__bg__image next--image">
                    <img src="./images/homepage/leaf.jpg" alt="" />
                  </div>
                  <div className="app__bg__image previous--image">
                    <img src="./images/homepage/chickens.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Script src="./js/title.js" />
        <Script type="text/javascript" src="./js/slider.js" />
      </Layout>
    </>
  );
}
