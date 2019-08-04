import React from 'react';
import './BussinesList.css'
import Business from '../Business/Business'

class BusinessList extends React.Component {
    render() {
        return (
            <>
            <div className="BusinessList">
            {
                this.props.businesses.map(function(a){return <Business business={a}/>})
            }
            </div>
            {console.log(this.props)}
            </>
        )
    }
}


export default BusinessList;