export default function Valueadded() {
  return (
    <>
      <div className="row py-5">
        <div className="value-added mt-5">
          <img
            src="./images/value.jpeg"
            alt=""
            srcset=""
            className="value-img w-100 d-none d-md-block"
          />
          <img
            src="./images/valuemb.jpeg"
            alt=""
            srcset=""
            className="value-img w-100 d-block d-md-none"
          />
          <div className="value-content p-5 d-flex flex-column justify-content-center">
            <h3>VALUE ADDED</h3>
            <br />
            <p>
              Feed Factors have the ability to adapt to the needs of any
              customer. If you need, 1,000 Kilograms in a bag or 1,000 tonnes in
              bulk, anytime, anyplace, anywhere. We can also offer processed
              ingredients such as grinding and cracking (We have been awarded a
              queens award for the ‘innovation’ of this process too).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
