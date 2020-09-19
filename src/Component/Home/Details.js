import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchDetailsAPI } from '../../Api/Home/detailsApi';
import '../../scss/1-layout/Details.scss';
import { useParams } from "react-router-dom";

function Details({Data, fetchDetails}){
    
    let { id } = useParams();

    useEffect(()=>{
        fetchDetails({
            id: id
        })
    })

    const finalData = Data.details;

    return(
        <div className="showDetails">
            <ul>
                <li>Name: {finalData.name}</li>
                <li>User Name: {finalData.username}</li>
                <li>Email: {finalData.email}</li>
                {/* <li>Address: {finalData['address'].street}</li> */}
                <li>Phone: {finalData.phone}</li>
            </ul>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        Data: state.details,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDetails: (searchParams) => dispatch(fetchDetailsAPI(searchParams)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);