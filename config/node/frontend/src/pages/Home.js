import React from 'react';
import { Typography, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';
import schoolImage from '../assets/school.svg';

function Home(props) {
    return (
        <div className="home-container">
            <div className="home__image-section">
                <img src={schoolImage} alt="Budynek szkoły" className="home__illustration" />


            </div>

            <div className="home__content-section">
                <div className="home__text-wrapper">
                    <Typography variant="h3" component="h1" className="home__title">
                        GEOPORTAL
                    </Typography>
                    <Typography variant="h4" component="h2" className="home__subtitle">
                        SZKOLNY
                    </Typography>
                </div>

                <Button
                    className="home__button"
                    variant='contained'
                    size='large'
                    component={Link}
                    to='services'
                    sx={{
                        backgroundColor: '#5E3045', // kolor z figmy, do kopiowania@!!!!
                        padding: '10px 40px',
                        fontSize: '1.2rem',
                        marginTop: '30px',
                        '&:hover': {
                            backgroundColor: '#4a2536',
                        }
                    }}
                >
                    START
                </Button>
            </div>
        </div>
    );
}

export default Home;