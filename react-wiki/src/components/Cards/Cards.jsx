import React from 'react';
import './card.css';

const Cards = ({characters}) => {
  return (
    <div className='row'>
        {
            characters.map((card) => (
                <div key={card?.id} className='mb-4 col-lg-4 col-md-6 col-sm-6 col-12 position-relative '>
                    <div className="card">
                        <span className={`card-badge position-absolute badge ${card.status === "Alive" ? "bg-success" :  card.status === "Dead" ? "bg-danger" :  "bg-secondary" }`}>{card?.status}</span>
                        <img src={card?.image} className="card-img-top" alt={card?.name} />
                        <div className="card-body">
                            <h5 className="mb-4 fw-bold fs-5">{card?.name}</h5>
                            <p className='mb-0 card-text fs-6'>Last Location</p>
                            <p className="card-text fs-5">{card?.location?.name}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Cards;

