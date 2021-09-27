import React from 'react';
import './Brand.css';
import brandDay from '../images/brands/UG_W37_Brand_Festival_23.png';
import brandFest from '../images/brands/Official-Store_ICON_JBF21.png';
import globalStore from '../images/brands/JumiaGlobal.png';
import jumiaFood from '../images/brands/ICONE_FOOD.png';

function Brand() {
    return (
        <div className="Brand">
            <div className="brand_container">
                <img src={brandDay} alt="Brand Day" />
                <p>{'Brand Day'}</p>
            </div>
            <div className="brand_container">
                <img src={brandFest} alt="Brand Fest Deals" />
                <p>{'Brand Fest Deals'}</p>
            </div>
            <div className="brand_container">
                <img src={globalStore} alt="Global Stores" />
                <p>{'Global Stores'}</p>
            </div>
            <div className="brand_container">
                <img src={jumiaFood} alt="Jumia Food" />
                <p>{'Jumia Food'}</p>
            </div>
        </div>
    )
}

export default Brand
