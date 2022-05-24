
import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, text }) => {
    return (
        <Link
            className="email"
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {text}
        </Link>
    );
};

export default ButtonMailto;