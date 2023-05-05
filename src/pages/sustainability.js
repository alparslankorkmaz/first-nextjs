import Layout from "../components/Layout";

export default function contact() {
  return (
    <>
      <Layout>
        <div className="index-title row justify-content-center mb-5">
          <h1 className="text-center col-md-6">
            SUSTAINABILITY
            <span className="py-4 d-inline-block fs-3">
              WE ACT IN WAYS TO CREATE A MORE SUSTAINABLE AND BETTER SHARED
              FUTURE, TO MAKE A DIFFERENCE IN PEOPLE'S LIVES, COMMUNITIES AND
              OUR PLANET BY DOING BUSINESS THE RIGHT WAY.
            </span>
          </h1>
        </div>
        <div className="container col-md-8 justify-content-center">
          <div className="row lh-lg text-center">
            <p className="mb-5">
              A thriving farming community is paramount to us when it comes to
              procuring our raw materials throughout the world. We act in ways
              to create a more sustainable and better shared future, to make a
              difference in people's lives, communities and our planet by doing
              business the right way.
            </p>

            <p className="mb-5">
              We believe in ‘Sustainable agriculture’, this means agricultural
              resilience, greenhouse gas emissions reduction, human rights,
              anti-bribery, deforestation and modern anti-slavery policies.
            </p>

            <a
              href="./pdf/sustainability-statement.pdf"
              target="_blank"
              className="fw-semibold"
            >
              Click here to read more about our ‘Sustainability Statement’.
            </a>
          </div>
        </div>

        <div className="row py-5">
          <div className="value-added mt-5">
            <img
              src="./images/sustainability.jpg"
              alt=""
              srcSet=""
              className="value-img w-100 d-none d-md-block"
            />
            <img
              src="./images/sustainabilitymb.jpg"
              alt=""
              srcSet=""
              className="value-img w-100 h-75 d-block d-md-none"
            />
            <div className="value-content p-3 p-md-5 d-flex flex-column justify-content-center lh-lg">
              <h3 className="my-5 mt-md-0 pt-md-0">SUCCESS STORIES</h3>
              <p className="mb-0 mb-md-5">
                Feed Factors has eliminated plastic in containerised
                transportation. We have substituted plastic for tri-ply
                cardboard which is recyclable and biodegradable, removing 120
                tonnes of plastic to landfill annually.
              </p>

              <h3 className="my-5 pt-5 mt-md-0 pt-md-0">GOALS AND PROGRAMS</h3>
              <p>
                We are currently testing renewable programs to further reduce
                our dunnage to landfill. We are focusing our attention on
                Recyclable tote bags and substituting the Silica sacks we
                currently use in each container, with biodegradable clay bags.
              </p>
              <p>
                Our considerate approach to sustainability has helped us achieve
                the GAFTA’s Sustainability Pledge and a Queens award for
                Sustainable Development.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
