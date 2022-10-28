import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  productsLocations,
  smsLocations,
} from "../../router/fws-client-path-locations";
import { getAllUserProducts } from "../../store/actions/products-actions";
import { IProductState } from "../../store/Models/ProductState";

const UserProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state: any) => state);
  const { userProducts }: IProductState = state.product;
  const [showMenuDropdown, setShowMenuDropdown] = useState(false);
  const [indexRow, setIndexRow] = useState(-1);

  React.useEffect(() => {
    getAllUserProducts()(dispatch);
  }, []);
  function truncateString(str: any) {
    if (str.length > 80) {
      return str.slice(0, 80) + "...";
    } else return str;
  }
  return (
    <>
      <Card
        onClick={() => {
          //setShowMenuDropdown(false);
        }}
      >
        <Card.Body>
          <Row className="p-3">
            {userProducts?.map((product, idx) => (
              <div className="col-xl-3 col-lg-6 mt-2" key={idx}>
                <div className=" card-transparent border  h-100 w-100  rounded">
                  {" "}
                  <div
                    className="card-body "
                  >
                    {" "}
                    <div className="">
                      <div className="d-flex">
                        <div className="d-flex justify-content-center">
                          <img
                            src={product.productUrl}
                            style={{ maxWidth: "25%" }}
                            alt="product"
                          />
                        </div>
                        <div className="dropdown show bg-light h-25">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => {
                              setShowMenuDropdown(true);
                              setIndexRow(idx);
                            }}
                          >
                            <g>
                              <g>
                                <circle
                                  cx="7"
                                  cy="12"
                                  r="1"
                                  fill="black"
                                ></circle>
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="1"
                                  fill="black"
                                ></circle>
                                <circle
                                  cx="17"
                                  cy="12"
                                  r="1"
                                  fill="black"
                                ></circle>
                              </g>
                            </g>
                          </svg>
                          {showMenuDropdown && indexRow === idx && (
                            <div
                              x-placement="bottom-start"
                              aria-labelledby=""
                              className="dropdown-menu show"
                              style={{
                                position: "absolute",
                                inset: "-25px auto auto -100px",
                                transform: "translate(0px, 42px)",
                              }}
                              data-popper-placement="bottom-end"
                              data-popper-escaped="false"
                              data-popper-reference-hidden="false"
                            >
                              <div
                                 onClick={() => {
                                  history.push(
                                    `${productsLocations.userProductDetails}?userProductId=${product.userProductId}`
                                  );
                                  setShowMenuDropdown(false);
                                }}
                                className="dropdown-item"
                                role="button"
                                draggable="true"
                              >
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.7366 2.76175H8.08455C6.00455 2.75375 4.29955 4.41075 4.25055 6.49075V17.3397C4.21555 19.3897 5.84855 21.0807 7.89955 21.1167C7.96055 21.1167 8.02255 21.1167 8.08455 21.1147H16.0726C18.1416 21.0937 19.8056 19.4087 19.8026 17.3397V8.03975L14.7366 2.76175Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>{" "}
                                  <path
                                    d="M14.4741 2.75V5.659C14.4741 7.079 15.6231 8.23 17.0431 8.234H19.7971"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>{" "}
                                  <path
                                    d="M14.2936 12.9141H9.39355"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>{" "}
                                  <path
                                    d="M11.8442 15.3639V10.4639"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                view/details
                              </div>
                              <div
                                onClick={() => {
                                  history.push(
                                    `${
                                      smsLocations.updateSms
                                    }?userProductId=${product.userProductId}`
                                  );
                                  setShowMenuDropdown(false);
                                }}
                                className="dropdown-item"
                                role="button"
                                draggable="true"
                              >
                                <svg
                                  width="20"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="me-2"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.7366 2.76175H8.08455C6.00455 2.75375 4.29955 4.41075 4.25055 6.49075V17.3397C4.21555 19.3897 5.84855 21.0807 7.89955 21.1167C7.96055 21.1167 8.02255 21.1167 8.08455 21.1147H16.0726C18.1416 21.0937 19.8056 19.4087 19.8026 17.3397V8.03975L14.7366 2.76175Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>{" "}
                                  <path
                                    d="M14.4741 2.75V5.659C14.4741 7.079 15.6231 8.23 17.0431 8.234H19.7971"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>{" "}
                                  <path
                                    d="M14.2936 12.9141H9.39355"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>{" "}
                                  <path
                                    d="M11.8442 15.3639V10.4639"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                                update
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        <h6 className="counter fw-bold text-center my-2 mt-3">
                          <span>{product.productName}</span>
                        </h6>
                      </div>
                    </div>{" "}
                    <p className=" mt-2 text-center">
                      {truncateString(product.productDescription)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserProducts;
