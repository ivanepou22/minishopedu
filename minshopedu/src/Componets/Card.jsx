import React from 'react'

function Card(props) {
    return (
        <div className="card">
            <div className="card_image">
                <img src={props.img} alt="pdt" />
            </div>
            <div className="info_container">
            <div className="card_description">
                <p>{
                    truncateString(props.description, 20)
                }</p>
               <span>{
               (props.price ).toLocaleString('en-US', {
                style: 'currency',
                currency: 'UGX',
              })
               }</span>
           </div>
            </div>
        </div>
    )
}

function truncateString(descrpt, StringLength) {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (descrpt.length <= StringLength) {
            return descrpt
        }
        // Return str truncated with '...' concatenated to the end of str.
        return descrpt.slice(0, StringLength) + '...'
}


export default Card
