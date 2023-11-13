import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const movieDetailStyle = {
    display: 'flex',
    flexDirection: 'row',
};

const titleStyle = {
    marginLeft: '10px',
    color: 'white', 
};

const MovieDetail = () => {
    const { title } = useParams();
    const { state } = useLocation();

    console.log(state);


    return (
        <div style={movieDetailStyle}>
           
            {state.posterPath && <img src={state.posterPath} alt={title} style={{width: "15%"}}/>}
        
            <h3 style={titleStyle}>{title}</h3>
        </div>
    );
};

export default MovieDetail;