import React from "react";

const Card = (props) => {
    const { title, description, imgSrc, imgAlt, btnText, btnHref } = props

    return(
        <div className="card" style={{ width: "18rem" }}>
            <img src={imgSrc} className="card-img-top" alt={imgAlt} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-tet">{description}</p>
                <a href={btnHref} className="btn btn-primary">{btnText}</a>
            </div>
        </div>
    )
}

export default Card