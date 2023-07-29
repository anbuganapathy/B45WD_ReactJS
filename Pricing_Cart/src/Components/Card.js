import React from "react";
import pricingData from "../PricingCartData.json";

export default function Card() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {pricingData.map((value) => {
            return (
              <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">
                      {value.cardTitle}
                    </h5>
                    <h6 className="card-price text-center">
                      {value.cardPrice}
                      <span className="period">{value.period}</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        {value.cardTitle === "FREE" ? (
                          value.items[0]
                        ) : (
                          <strong>{value.items[0]}</strong>
                        )}
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        {value.items[1]}
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        {value.items[2]}
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fas fa-check"></i>
                        </span>
                        {value.items[3]}
                      </li>
                      {value.cardTitle === "FREE" ? (
                        <li className="text-muted">
                          <span className="fa-li">
                            <i className="fas fa-times"></i>
                          </span>
                          {value.items[4]}
                        </li>
                      ) : (
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check"></i>
                          </span>
                          {value.items[4]}
                        </li>
                      )}
                      {value.cardTitle === "FREE" ? (
                        <li className="text-muted">
                          <span className="fa-li">
                            <i className="fas fa-times"></i>
                          </span>
                          {value.items[5]}
                        </li>
                      ) : (
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check"></i>
                          </span>
                          {value.items[5]}
                        </li>
                      )}
                      {value.cardTitle === "FREE" ? (
                        <li className="text-muted">
                          <span className="fa-li">
                            <i className="fas fa-times"></i>
                          </span>
                          {value.items[6]}
                        </li>
                      ) : (
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check"></i>
                          </span>
                          {value.cardTitle === "PRO" ? (
                            <strong>{value.items[6]}</strong>
                          ) : (
                            value.items[6]
                          )}
                        </li>
                      )}
                      {value.cardTitle === "PRO" ? (
                        <li>
                          <span className="fa-li">
                            <i className="fas fa-check"></i>
                          </span>
                          {value.items[7]}
                        </li>
                      ) : (
                        <li className="text-muted">
                          <span className="fa-li">
                            <i className="fas fa-times"></i>
                          </span>
                          {value.items[7]}
                        </li>
                      )}
                    </ul>
                    <div className="d-grid">
                      <a href="#" className="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
