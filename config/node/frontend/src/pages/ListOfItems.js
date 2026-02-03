import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { Typography, Container, Grid } from "@mui/material";

function ListOfItems(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("działa");
    fetch("http://localhost:10000/app/get_users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      });
  }, []);

  useEffect(() => {
    console.log("Stan users zaktualizowany:", users);
  }, [users]);

  return (
    <div className="list-container">
      <div className="list__header">
         <Typography variant="h4" className="list__title">
            LISTA OBIEKTÓW
         </Typography>
      </div>

      {/* Kontener listy */}
      <Container maxWidth="md" className="list__content">
        <Grid container spacing={3}>
          {users?.map((user) => (
            <Grid item xs={12} key={user.id}>
              <div className="list__card-wrapper">
                  <UserCard user={user} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ListOfItems;