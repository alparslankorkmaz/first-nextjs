import Layout from "../components/Layout";

export default function about() {
  return (
    <>
      <Layout>
        <div className="index-title row justify-content-center mb-5">
          <h1 className="text-center col-md-6">
            ABOUT US
            <span className="py-4 d-inline-block">
              FEED FACTORS HAS BEEN AN ESTABLISHED TRADING COMPANY FOR OVER 35
              YEARS.
            </span>
          </h1>
        </div>
        <div className="container-fluid hero-image">
          <div className="row mb-md-5 pb-md-5 justify-content-center">
            <img
              src="./images/about-us/aboutus.jpeg"
              alt=""
              srcSet=""
              className="col-md-8 px-0"
            />
          </div>
        </div>
        <div className="about-content container col-10 col-md-7">
          <div className="row">
            <h2 className="mt-5 pt-5 mt-md-0 pt-md-0">WHO WE ARE</h2>
            <p>
              Established in 1987, trade started with Conventional Fishmeal and
              Soybeans at its core. These products are still traded to this day,
              although our primary focus is now Organics, Petfood, Non Gm and
              Animal Food. The products we trade may have changed, though our
              ethos hasn’t we don’t just trade in ingredients, We believe in
              building strong, long-term partnerships, working closely with our
              suppliers and serving the needs of our customers.
            </p>

            <h2>WHAT WE DO</h2>
            <p>
              We provide an uninterrupted supply chain of quality ingredients
              from origin to consumer. Using strategically located, accredited
              storage facilities, we can offer next day delivery to our
              customers in both bulk and bags.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
