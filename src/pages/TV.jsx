import React from 'react';
import styled from 'styled-components';
import { programs } from '../tvDummy';
import { useNavigate } from 'react-router-dom';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8%;
`;

const MovieContainer = styled.div`
    position: relative;
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:hover .overView {
        display: block;
    }
`;

const MovieImage = styled.img`
    width: 100%;
    min-height: 15vw;
    margin-top: 0.5vw;
`;

const MovieInfo = styled.div`
    width: 100%;
    min-height: 5%;
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 0.8vw;
    cursor: pointer;
`;

const OverView = styled.div`
    position: absolute;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); 
    opacity: 0.8; 
    color: white;
    padding: 10px;
    font-size: 15px;
`;

const OverTitle = styled.p`
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    font-size: 1.5vw;
`;

const TV = () => {
    const navigate = useNavigate();

    const handleMovieClick = (programs) => {
        navigate(`/tv/${programs.name}`, {
            state: {
                programs
            }
        });
    };

    return (
        <Container>
            {programs.results.map((programs, index) => (
                <MovieContainer
                    key={index}
                    onClick={() => handleMovieClick(programs)}
                >
                    <MovieImage src={`${IMG_BASE_URL}${programs.poster_path}`} alt={programs.title} />
                    
                    <OverView className="overView">
                        <OverTitle>{programs.name}</OverTitle>
                        <p>{programs.overview}</p>
                    </OverView>
                    
                    <MovieInfo>
                        <p id="movieTitle" style={{ paddingLeft: "0.5vw" }}>{programs.name}</p>
                        <p id="movieVote" style={{ paddingRight: "0.5vw" }}>{programs.vote_average}</p>
                    </MovieInfo>
                </MovieContainer>
            ))}
        </Container>
    );
};

export default TV;
