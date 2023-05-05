import Layout from "../../components/Layout";

export default function charity() {
  return (
    <>
      <Layout>
        <div className="index-title row justify-content-center mb-5">
          <h1 className="text-center col-md-6">
            CHARITY
            <span className="py-4 d-inline-block fs-6">
              In support of Ukraine, Feed Factors Ltd and The Andersons Inc,
              proudly donated a ‘Teksan 95’ generator to help power a hospital;
              performing lifesaving operations and providing necessary medical
              care to the people of Ukraine.
            </span>
          </h1>
        </div>
        <div className="container-fluid hero-image">
          <div className="row mb-md-5 pb-md-5 justify-content-center">
            <img
              src="./images/charity/charity.jpg"
              alt=""
              srcset=""
              className="col-md-8 px-0"
            />
          </div>
        </div>
        <div className="container col-md-9 lh-lg">
          <div className="row justify-content-around">
            <h3 className="mt-5 pt-5 mt-md-0 pt-md-0 fs-2">
              WE ARE PROUD TO SUPPORT
            </h3>
            <div className="mt-5 col-md-5">
              <div className="mb-5 bg-white d-flex justify-content-center">
                <img
                  src="./images/charity/princess-alice.png"
                  className="col-9"
                  alt="..."
                />
              </div>
              <div className="">
                <p className="card-text">
                  Princess Alice Hospice in Esher is helping people live every
                  moment to the fullest in comfort and dignity, creating a space
                  whether in Hospice or at home where families can enjoy special
                  moments and create precious memories together.
                </p>
              </div>
            </div>
            <div className="card mt-5 col-md-5">
              <div className="mb-5 bg-white d-flex justify-content-center">
                <img
                  src="./images/charity/calm.png"
                  className="col-7 p-4"
                  alt="..."
                />
              </div>
              <div className="">
                <p className="card-text">
                  Campaign Against Living Miserably (CALM) are taking a stand
                  against suicide. That means standing against feeling down,
                  standing up to stereotypes and standing together to show life
                  is always worth living.
                </p>
              </div>
            </div>
            <div className="card mt-5 col-md-5">
              <div className="mb-5 bg-white d-flex justify-content-center">
                <img
                  src="./images/charity/thf.png"
                  className="col-9 p-4"
                  alt="..."
                />
              </div>
              <div className="">
                <p className="card-text">
                  The Tim Henman Foundation delivers programmes to better the
                  lives of vulnerable young people and focuses on education and
                  health. They raise young people's aspirations through giving
                  them access to new skills and opportunities, and providing
                  them with the best and most sympathetic learning environment.
                </p>
              </div>
            </div>
            <div className="card mt-5 col-md-5">
              <div className="mb-5 bg-white d-flex justify-content-center">
                <img
                  src="./images/charity/vineyard.png"
                  className="col-9 p-3"
                  alt="..."
                />
              </div>
              <div className="">
                <p className="card-text">
                  The Vineyard Community Centre is a voluntary supported charity
                  incorporating the Richmond Foodbank and Works of Love.
                </p>
              </div>
            </div>
            <div className="card mt-5 col-md-5">
              <div className="mb-5 bg-white d-flex justify-content-center">
                <img
                  src="./images/charity/vineyard.png"
                  className="col-9 p-3"
                  alt="..."
                />
              </div>
              <div className="">
                <p className="card-text">
                  The Vineyard Community Centre is a voluntary supported charity
                  incorporating the Richmond Foodbank and Works of Love.
                </p>
              </div>
            </div>
            <div className="card mt-5 col-md-5">
              <div className="mb-5 bg-white d-flex justify-content-center">
                <img
                  src="./images/charity/vineyard.png"
                  className="col-9 p-3"
                  alt="..."
                />
              </div>
              <div className="">
                <p className="card-text">
                  The Vineyard Community Centre is a voluntary supported charity
                  incorporating the Richmond Foodbank and Works of Love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
