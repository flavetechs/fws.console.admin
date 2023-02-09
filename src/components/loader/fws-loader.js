import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./fws-loader.scss"
const FwsLoader = () => {

    const state = useSelector((state) => state);
    const { loading: loading1 } = state.alert;
    const { loading: loading2 } = state.auth;
    const { loading: loading3 } = state.locationLookup;
    const { loading: loading4 } = state.product;
    const { loading: loading5 } = state.smservice;    

    const [show, setShow] = useState(false);

    React.useEffect(() => {

        if (loading1 || loading2 || loading3 || loading4 
            || loading5) {
            setShow(true);
        } else {
            setShow(false);
        }

    }, [loading1 || loading2 || loading3 || loading4 
        || loading5])

    return (
        <>
            <div className={show ? `overlay show` : `overlay`}></div>
            <div className={show ? `spanner show` : `spanner`}>
                <div className="loader"></div>
            </div>
        </>
    )
}

export default FwsLoader;