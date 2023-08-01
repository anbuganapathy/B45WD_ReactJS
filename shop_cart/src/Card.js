export default function Card({ data, addToCart, removeFromCart }) {
    return data.map((value, index) => {
      return (
        <div className="col mb-5" key={index}>
          <div className="card h-100">
            {value.productSale ? (
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>
            ) : (
              ""
            )}
            {/* <!-- Product image--> */}
            <img className="card-img-top" src={value.productImg} alt="..." />
            {/* <!-- Product details--> */}
            <div className="card-body p-4">
              <div className="text-center">
                {/* <!-- Product name--> */}
                <h5 className="fw-bolder">{value.productName}</h5>
                {/* <!-- Product reviews--> */}
                {value.productReviews === 1 ? (
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                  </div>
                ) : (
                  ""
                )}
                {value.productReviews === 2 ? (
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                ) : (
                  ""
                )}
                {value.productReviews === 3 ? (
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                ) : (
                  ""
                )}
                {value.productReviews === 4 ? (
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                ) : (
                  ""
                )}
                {value.productReviews === 5 ? (
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                    <div className="bi-star-fill"></div>
                  </div>
                ) : (
                  ""
                )}
                {/* <!-- Product price--> */}
                {value.productName === "Special Item" ||
                value.productName === "Sale Item" ? (
                  <>
                    <span className="text-muted text-decoration-line-through">
                      ${value.productPrice[0]}
                    </span>
                    &nbsp; ${value.productPrice[1]}
                  </>
                ) : (
                  ""
                )}
                {value.productName === "Popular Item" ? (
                  <>${value.productPrice[0]}</>
                ) : (
                  ""
                )}
                {value.productName === "Fancy Product" ? (
                  <>
                    ${value.productPrice[0]} - ${value.productPrice[1]}
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* <!-- Product actions--> */}
            {value.productName === "Sale Item" ||
            value.productName === "Special Item" ||
            value.productName === "Popular Item" ? (
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button
                    className="btn btn-outline-dark mt-auto"
                    href="#"
                    disabled={!value.isVisible}
                    onClick={() => addToCart(value.productID)}
                  >
                    Add to cart
                  </button>
                  {!value.isVisible?<><button
                    className="btn btn-outline-dark mt-auto"
                    href="#"
                    disabled={value.isVisible}
                    onClick={() => removeFromCart(value.productID)}
                  >
                    Remove from cart
                  </button></>:""}
                </div>
              </div>
            ) : ""}
            {value.productName === "Fancy Product"?
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <button className="btn btn-outline-dark mt-auto" href="#">
                    View options
                  </button>
                </div>
              </div>
            :""}
          </div>
        </div>
      );
    });
  }
  