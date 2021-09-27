import React from 'react'
import Card from '../Componets/Card'
import {data} from '../Library/stock'
import Hero from '../Componets/Hero';
import Brand from '../Componets/Brand';
function Home() {
    let supermarket = data.filter(item => item.category === 'Supermarket');
    let phones = data.filter(phone => phone.category === "Phones and Tablets");
    let electronics = data.filter(electronic => electronic.category === "Electronics");
    let sports = data.filter(sport => sport.category === "Sports");
    let computing = data.filter(compute => compute.category === "computing");
    return (
        <div className="home">
        {/* Hero Section */}
        <Hero />

        {/* Brand Section */}
        <Brand />

        {/* SuperMarket */}
        <div className="supermarket">
            <div className="super_header">
                <p className="container_title">
                Super Market
                </p>
            </div>
            <div className="super_body">
            {
            supermarket.map(supermarketItem => (
                <Card img={supermarketItem.image} description={supermarketItem.desc} price={supermarketItem.price} key={supermarketItem.id}/>
                ))
            }
            </div>
        </div>

            {/* Phones and Tablets */}

        <div className="supermarket">
            <div className="super_header">
            <p className="container_title">
                Phones And Tablets
                </p>
            </div>
            <div className="super_body">
            {
            phones.map(phoneItem => (
                <Card img={phoneItem.image} description={phoneItem.desc} price={phoneItem.price} key={phoneItem.id}/>
                ))
            }
            </div>
        </div>

        {/* Electronics */}

        <div className="supermarket">
            <div className="super_header">
            <p className="container_title">
                Electronics
                </p>
            </div>
            <div className="super_body">
            {
            electronics.map(electricItem => (
                <Card img={electricItem.image} description={electricItem.desc} price={electricItem.price} key={electricItem.id}/>
                ))
            }
            </div>
        </div>

            {/* Sports */}

        <div className="supermarket">
            <div className="super_header">
            <p className="container_title">
                Sports
                </p>
            </div>
            <div className="super_body">
            {
            sports.map(sportItem => (
                <Card img={sportItem.image} description={sportItem.desc} price={sportItem.price} key={sportItem.id}/>
                ))
            }
            </div>
        </div>

            {/* Computing */}

        <div className="supermarket">
            <div className="super_header">
            <p className="container_title">
                Computing
                </p>
            </div>
            <div className="super_body">
            {
            computing.map(computingItem => (
                <Card img={computingItem.image} description={computingItem.desc} price={computingItem.price} key={computingItem.id}/>
                ))
            }
            </div>
        </div>

        </div>
    )
}

export default Home
