import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import{tourData} from "../../tourData"
import "./tourList.scss"

class TourList extends Component {
    state={
        tours:tourData
    }
    removeTour=id=>{
        const{tours}=this.state;
        const sortedTours=tours.filter(tour=>tour.id !==id);
        this.setState({
            tours:sortedTours
        })
    }
    render() {
        //console.log(this.state.tours)
        const {tours}=this.state
        return (
            <section className='tourlist'>
                {
                    tours.map(tour=>(
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
                    ))
                }
            </section>
        );
    }
}

export default TourList;