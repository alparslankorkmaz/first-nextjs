import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="header container-fluid pt-5 p-md-5">
        <div className="row justify-content-center">
          <div className="header-content d-flex justify-content-between align-items-center">
            <div className="logo d-block mx-auto mx-md-0 col-sm-4 col-md-2">
              <a href="/">
                <img
                  src="./images/header/header-logo.png"
                  alt="Feed Factors Logo"
                  className="img-fluid col-8 col-md-12 d-block mx-auto mx-md-0"
                />
              </a>
            </div>
            <section className="home d-none d-md-block">
              <div className="open-overlay">
                <span className="bar-top"></span>
                <span className="bar-middle"></span>
                <span className="bar-bottom"></span>
              </div>
            </section>

            {/* <!-- MENU --> */}
            <div className="overlay-navigation">
              <nav role="navigation">
                <ul>
                  <li>
                    <a href="/" className="mb-5">
                      home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="mb-5">
                      about us
                    </a>
                  </li>
                  <li>
                    <a href="" id="products-menu" className="mb-5">
                      products
                    </a>
                  </li>
                  <li>
                    <a href="/ports" className="mb-5">
                      ports and storage
                    </a>
                  </li>
                  <li>
                    <a href="/charity" className="mb-5">
                      charity
                    </a>
                  </li>
                  <li>
                    <a href="/awards" className="mb-5">
                      awards and accolades
                    </a>
                  </li>

                  <li>
                    <a href="/sustainability" data-content="" className="mb-5">
                      sustain-
                      <br />
                      ability
                    </a>
                  </li>

                  <li>
                    <a href="/contact" data-content="" className="mb-5">
                      contact us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- PRODUCTS MENU  --> */}
            <div className="overlay-navigation2">
              <div id="navigation2" role="navigation2">
                <ul id="list2">
                  <li>
                    <a href="/organic">organic</a>
                  </li>
                  <li>
                    <a href="/animalfeed">non gm & animal feed</a>
                  </li>
                  <li>
                    <a href="/petfood">pet food</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE MENU --> */}
        <div className="container-fluid px-0">
          <div className="row">
            <section className="p-menu1 py-5 px-0 d-block d-md-none">
              <nav id="navbar" className="navigation" role="navigation">
                <input id="toggle1" type="checkbox" />

                <label className="hamburger1" htmlFor="toggle1">
                  <div className="top"></div>
                  <div className="meat"></div>
                  <div className="bottom"></div>
                </label>

                <nav className="menu1">
                  <a className="link1" href="/">
                    home
                  </a>
                  <a className="link1" href="/about">
                    about us
                  </a>
                  <div className="product-mb">
                    <input id="toggle2" type="checkbox" />
                    <label className="link1" htmlFor="toggle2">
                      products
                    </label>

                    <div className="menu2 text-center">
                      <a className="link2" href="/animalfeed">
                        non gm & animal feed
                      </a>
                      <br />
                      <Link className="link2" href="/organic">
                        organic
                      </Link>
                      <br />
                      <a className="link2" href="/petfood">
                        pet food
                      </a>
                    </div>
                  </div>
                  <a className="link1" href="/ports">
                    ports and storage
                  </a>
                  <a className="link1" href="/sustainability">
                    sustainability
                  </a>
                  <a className="link1" href="/charity">
                    charity
                  </a>
                  <a className="link1" href="/awards">
                    awards and accolades
                  </a>
                  <a className="link1" href="/contact">
                    contact us
                  </a>
                </nav>
              </nav>
            </section>
          </div>
        </div>
      </header>
    </>
  );
}
