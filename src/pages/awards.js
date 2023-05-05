import Layout from "../../components/Layout";

export default function awards() {
  return (
    <>
      <Layout>
        <div className="container-fluid mt-5 d-flex justify-content-center lh-lg">
          <div className="row col-12 col-md-8">
            <h1 className="fw-normal col-12 col-md-8 mb-5">
              AWARDS AND ACCOLADES
            </h1>

            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto pariatur aperiam blanditiis nam iure dolores libero
              amet qui nemo beatae? Pariatur, rem. Dolorem pariatur minus
              explicabo eveniet, amet cupiditate vitae. Iusto ipsam mollitia ex
              soluta dicta dolore autem unde vel, rerum exercitationem molestiae
              in corporis deserunt saepe maxime temporibus quis magni doloremque
              necessitatibus cum tempore est. Distinctio molestiae optio illum?
            </p>
          </div>
        </div>

        <div className="awards container">
          <div className="row justify-content-center align-items-center">
            <div className="card col-md-4 p-5">
              <img
                src="./images/awards/qa-sustainable.png"
                className="card-img p-2"
                alt=""
              />
              <div className="card-img-overlay"></div>
            </div>
            <div className="card col-md-4 p-5">
              <img
                src="./images/awards/qa-innovation.png"
                className="card-img p-2"
                alt=""
              />
              <div className="card-img-overlay"></div>
            </div>
            <div className="card col-md-4 p-5">
              <img
                src="./images/awards/wlb.png"
                className="card-img p-4"
                alt=""
              />
              <div className="card-img-overlay"></div>
            </div>
            <div className="card col-md-4 p-5">
              <img
                src="./images/awards/healthyworkplace.png"
                className="card-img p-2"
                alt=""
              />
              <div className="card-img-overlay"></div>
            </div>
            <div className="card col-md-4 p-5">
              <img src="./images/awards/lwf.png" className="card-img" alt="" />
              <div className="card-img-overlay"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
