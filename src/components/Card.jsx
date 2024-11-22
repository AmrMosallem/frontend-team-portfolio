import React from 'react'
import './Card.css'

export default function Card(props) {
    return (
        <div className='card-container' >
            <div className="card">
                <img src={`./src/assets/${props.image}`} alt="" />
                <div className="card-info">
                    <div className="card-title">
                        <span className='name'>{props.name}</span>
                        <span className='title'>{props.title}</span>
                    </div>
                    <div className="card-buttons">
                        <button className='linkedin'><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
                        <button className='github'><i className="fa-brands fa-github"></i> GitHub</button>
                    </div>
                    <div className="card-body">
                        <div><p className="big-text">About</p>
                            <span className="small-text">{props.about}</span></div>
                        <div><p className="big-text">Interests</p>
                            <span className="small-text">{props.interests}</span></div>
                    </div>
                </div>

            </div>      <div className="border">
                <div className="border blurred"></div>
            </div></div>
    )
}