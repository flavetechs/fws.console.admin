import React from "react";
import { Card, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smsLocations } from "../../router/fws-client-path-locations";
import { getAllUserProducts } from "../../store/actions/products-actions";
import { IProductState } from "../../store/Models/ProductState";

const UserProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state: any) => state);
  const { userProducts }: IProductState = state.product;

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
      <Card>
        <Card.Body>
          <Row className="p-3">
            {userProducts?.map((product, idx) => (
              <div className="col-xl-3 col-lg-6" key={idx}>
                <div className=" card-transparent border  h-100 w-100  rounded">
                  {" "}
                  <div className="card-body ">
                    {" "}
                    <div className="">
                    <div className="d-flex justify-content-center">
                      <img
                        src={product.productUrl}
                        style={{ maxWidth: "25%" }}
                        alt="product"
                      />
                      </div>
                      <div>
                        <h6 className="counter fw-bold text-center my-2 mt-3">
                          <span>{product.productName}</span>
                        </h6>
                      </div>
                    </div>{" "}
                    <p className=" mt-2">
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
