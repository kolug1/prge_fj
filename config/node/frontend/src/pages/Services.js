import React from 'react';
import { Typography, Button, Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import map from '../assets/map.svg';
import listaobiektow from '../assets/list.svg';
import nauczyciel from '../assets/nauczyciel.svg';


const servicesData = [
    {
        id: 1,
        title: "PRZEJDŹ DO MAPY",
        description: "Przeglądaj interaktywną mapę",
        link: "/map",
        image: map,
        icon: "📍"
    },
    {
        id: 2,
        title: "LISTA OBIEKTÓW",
        description: "Zestawienie wszystkich obiektów w systemie",
        link: "/list",
        image: listaobiektow,
        icon: "📋"
    },
    {
        id: 3,
        title: "DODAJ UŻYTKOWNIKA",
        description: "Formularz dodawania nowego użytkownika",
        link: "/newuser",
        image: nauczyciel,
        icon: "➕"
    }
];

function Services(props) {
    return (
        <div className="services-container">
            <div className="services__header">
                <div className="services__title-wrapper">
                    <Typography variant="h3" component="h1" className="services__title">
                        WYBÓR
                    </Typography>
                    <Typography variant="h3" component="h2" className="services__title">
                        USŁUGI
                    </Typography>
                </div>
            </div>

            <Grid container spacing={4} justifyContent="center" className="services__grid">
                {servicesData.map((service) => (
                    <Grid item key={service.id} xs={12} sm={6} md={4}>
                        <div className="service-card">
                            <div className="service-card__image-container">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-card__img"
                                />
                                <div className="service-card__icon-overlay">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="service-card__content">
                                <Typography className="service-card__desc">
                                    {service.description}
                                </Typography>

                                <Button
                                    component={Link}
                                    to={service.link}
                                    variant="contained"
                                    className="service-card__btn"
                                    fullWidth
                                >
                                    {service.title}
                                </Button>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Services;