import Link from "next/link";

export default function Footer() {
  return (
    <>
      {" "}
      <footer>
        <div className="accreditations">
          <div className="container">
            <div className="row">
              <div className="accr-content d-flex flex-column justify-content-center align-items-center p-5">
                <h3 className="text-center p-5">ACCREDITATIONS</h3>

                {/* <!-- CAROUSEL --> */}
                <div className="container text-center my-3">
                  <div className="row mx-auto my-auto justify-content-center">
                    <div
                      id="accrCarousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active align-items-center justify-content-center">
                          <div className="col-md-3">
                            <div className="card">
                              <div className="card-img">
                                <img
                                  src="./images/footer/gafta.png"
                                  className="img-fluid col-md-8"
                                />
                              </div>
                              <div className="card-img-overlay"></div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item align-items-center justify-content-center">
                          <div className="col-md-3">
                            <div className="card">
                              <div className="card-img">
                                <img
                                  src="./images/footer/off.png"
                                  className="img-fluid col-md-3"
                                />
                              </div>
                              <div className="card-img-overlay"></div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item align-items-center justify-content-center">
                          <div className="col-md-3">
                            <div className="card">
                              <div className="card-img">
                                <img
                                  src="./images/footer/gafta-pledge.png"
                                  className="img-fluid col-md-4"
                                />
                              </div>
                              <div className="card-img-overlay"></div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item align-items-center justify-content-center">
                          <div className="col-md-3">
                            <div className="card">
                              <div className="card-img">
                                <img
                                  src="./images/footer/cfp.png"
                                  className="img-fluid col-md-8"
                                />
                              </div>
                              <div className="card-img-overlay"></div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item align-items-center justify-content-center">
                          <div className="col-md-3">
                            <div className="card">
                              <div className="card-img">
                                <img
                                  src="./images/footer/sedex.png"
                                  className="img-fluid col-md-5"
                                />
                              </div>
                              <div className="card-img-overlay"></div>
                            </div>
                          </div>
                        </div>
                        <div className="carousel-item align-items-center justify-content-center">
                          <div className="col-md-3">
                            <div className="card">
                              <div className="card-img">
                                <img
                                  src="./images/footer/efisc.png"
                                  className="img-fluid col-md-10"
                                />
                              </div>
                              <div className="card-img-overlay"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#accrCarousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon me-5 bg-dark-subtle rounded-3"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#accrCarousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon ms-5 bg-dark-subtle rounded-3"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- CAROUSEL ENDS --> */}
              </div>
            </div>
          </div>
        </div>

        <div className="map mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9943.881860499534!2d-0.3067566!3d51.4586987!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760c476d380983%3A0x3e19e37992845397!2sThe%20Gallery!5e0!3m2!1sen!2suk!4v1682420946274!5m2!1sen!2suk"
            style={{ border: 0, minHeight: 270, width: 100 + "%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="footer-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="footer-wrapper col-md-9">
                <div className="footer-info col-md-5 p-4 mb-4">
                  <div className="info-content">
                    <img
                      src="./images/footer/footer-logo.png"
                      alt=""
                      className="footer-logo col-8 col-md-7 my-4 mb-5"
                    />

                    <div className="trading mb-3">
                      <p>
                        <span className="gold">Trading Number:</span> +44 (0)
                        208 332 1550
                      </p>
                      <p>
                        <span className="gold">Trading email:</span>
                        trading@feedfactors.com
                      </p>
                    </div>
                    <div className="admin">
                      <p>
                        <span className="gold">Admin Number:</span> +44 (0) 208
                        332 1992
                      </p>
                      <p>
                        <span className="gold">Admin email:</span>
                        admin@feedfactors.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="products-contact col-md-6 p-4 mt-5">
                  <div className="row">
                    <div className="products-contact-info col-md-6">
                      <h5>PRODUCTS</h5>
                      <Link href="/organic">Organic</Link>
                      <Link href="/petfood">Pet Food</Link>
                      <Link href="/animalfeed">Non GM and Animal Feed</Link>
                      <Link href="/ports">Ports and Storage</Link>
                    </div>
                    <div className="products-contact-info col-md-6 mt-5 mt-md-0">
                      <h5>CONTACT US</h5>
                      <p>
                        Feed Factors Ltd, <br />
                        The Gallery, Whittaker Avenue, <br />
                        Richmond, TW9 1EH
                      </p>

                      <p>
                        <span>Tel:</span> <u>+44 (0) 208 332 1550</u>
                      </p>
                      <p>
                        <span>Email:</span> trading@feedfactors.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="socials col-4 col-md-1 mt-5">
                  <Link href="https://uk.linkedin.com/company/feed-factors-limited?original_referer=https%3A%2F%2Fwww.google.com%2F">
                    <img
                      src="./images/footer/linkedin-logo.png"
                      className="linkedin col-3"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-line p-4">
          <div className="container d-flex align-items-center justify-content-around">
            <div className="row justify-content-center col-md-8">
              <div className="col-md-2 line-links d-flex align-items-center justify-content-center">
                <Link href="/cookieconsent">Cookie Consent</Link>
              </div>
              <div className="col-md-2 line-links d-flex align-items-center justify-content-center">
                <Link href="/privacy">Privacy</Link>
              </div>
              <div className="col-md-2 line-links d-flex align-items-center justify-content-center">
                <Link href="/termsofuse">Terms of use</Link>
              </div>
              <div className="col-md-2 line-links d-flex align-items-center justify-content-center">
                <Link href="/sustainability">Sustainability</Link>
              </div>
              <div className="col-md-2 line-links d-flex align-items-center justify-content-center">
                <Link href="/humanrights">Human rights</Link>
              </div>
              <div className="col-md-2 line-links d-flex align-items-center justify-content-center">
                <Link href="./pdf/tax-strategy.pdf" target="_blank">
                  Tax strategy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
