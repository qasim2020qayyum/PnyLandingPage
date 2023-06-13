import React from 'react'
import { UpcomingeventsData } from './UpcomingeventsData'
import "./Upcomingevents.css"

const Upcomingevents = () => {
    return (
        <div >
            <div className='mainContainer '>
            <div className='container'>
                <div className='row'>
                    <div className='Events'><h1>Upcoming Events</h1></div>
                    {
                        UpcomingeventsData.map((x) => {
                            return (
                                <>
                                    <div className='main-card col-lg-4 col-md-4 col-sm-6'>
                                        <div className="card" style={{ width: '20rem' }}>
                                            <img src={x.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <div className='container-fluid'>
                                                    <div className='row'>
                                                        <div className='col-lg-3 col-md-6 col-sm-6'>
                                                            <div className='cardMonth'>{x.month}</div>
                                                            <div className='cardDate'>{x.date}</div>
                                                        </div>
                                                        <div className='title mt-2 col-lg-9 col-md-12 col-sm-12'>
                                                            {x.title}
                                                            <br/>
                                                        </div>
                                                        <div className='span1'><a href='#'>Read more</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        }

                        )
                    }

                    <div className='eventbutton'><button type="button" class="btn btn-primary btn-lg">View all Events</button></div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Upcomingevents
