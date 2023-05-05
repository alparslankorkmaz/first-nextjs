import Layout from "../components/Layout";

export default function contact() {
  return (
    <>
      <Layout>
        <div className="container col-10">
          <div className="row justify-content-around">
            <h1 className="fw-normal py-5">CONTACT US</h1>
            <div className="contact-info col-12 col-md-4">
              <p>The Gallery, Whittaker Avenue, Richmond, TW9 1EH</p>
              <p>
                <span>Tel:</span> <u>+44 (0) 208 332 1550</u>
              </p>
              <p>
                <span>Admin Tel:</span> <u>+44 (0) 208 332 1992</u>
              </p>
              <p>
                <span>Email:</span> trading@feedfactors.com
              </p>
              <p>
                <span>Admin Email:</span>
                admin@feedfactors.com
              </p>
              <div className="map mb-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9943.881860499534!2d-0.3067566!3d51.4586987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c476d380983%3A0x3e19e37992845397!2sThe%20Gallery!5e0!3m2!1sen!2suk!4v1682420946274!5m2!1sen!2suk"
                  style={{ border: 0, minHeight: 270, width: 100 + "%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <form
                id="fs-frm"
                name="simple-contact-form"
                accept-charset="utf-8"
                action="https://formspree.io/f/xlekaeal"
                method="post"
                className="col-6 w-100 border-0"
              >
                <fieldset id="fs-frm-inputs">
                  <input
                    type="text"
                    name="name"
                    id="full-name"
                    placeholder="Name"
                    required=""
                    className="w-100 my-2 border-0"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email-address"
                    placeholder="Email"
                    required=""
                    className="w-100 my-2 border-0"
                  />
                  <textarea
                    rows="15"
                    name="message"
                    id="message"
                    placeholder="Message"
                    required=""
                    className="w-100 my-2 border-0"
                  ></textarea>
                </fieldset>
                <input
                  type="submit"
                  value="Submit"
                  className="w-100 my-2 border-0 p-3"
                />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
