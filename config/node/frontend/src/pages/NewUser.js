import React, { useState } from 'react';
import { Container, Box, TextField, Button, Paper, Typography } from "@mui/material";

function NewUser(props) {
    const [userName, setUserName] = useState("")
    const [userLocation, setUserLocation] = useState("")
    const [userPosts, setUserPosts] = useState(0)

    const handleSubmit = async (e) => {
        console.log(userName, userLocation, userPosts)
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:10000/app/insert_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    location: userLocation,
                    posts: userPosts
                })
            })
            console.log(response)
            setUserName(""); setUserLocation(""); setUserPosts(0);
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="newuser-container">
            <div className="newuser__header">
                <Typography variant="h4" className="newuser__title">
                    DODAJ NOWEGO PRACOWNIKA/UCZNIA
                </Typography>
            </div>

            <Container maxWidth="sm" className="newuser__content">
                <Paper elevation={3} className="newuser__card">
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        className="newuser__form"
                    >
                        <TextField
                            className="newuser__input"
                            fullWidth
                            label="Imię"
                            variant="outlined"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <TextField
                            className="newuser__input"
                            fullWidth
                            label="Lokalizacja"
                            variant="outlined"
                            value={userLocation}
                            onChange={(e) => setUserLocation(e.target.value)}
                        />
                        <TextField
                            className="newuser__input"
                            fullWidth
                            label="Wiek"
                            type="number"
                            variant="outlined"
                            value={userPosts}
                            onChange={(e) => setUserPosts(e.target.value)}
                        />

                        <Button
                            type="submit"
                            variant='contained'
                            size="large"
                            className="newuser__btn"
                            fullWidth
                        >
                            DODAJ PRACOWNIKA/UCZNIA
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}

export default NewUser;