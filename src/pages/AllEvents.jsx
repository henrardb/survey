import React, { useEffect, useState } from "react";
import Event from "../components/Event";
import Button from "../components/ButtonCmp";
import Input from "../components/InputCmp";
import dbService from "../appwrite/db";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

function AllEvents() {
  const [name, setName] = useState("");
  const [events, setEvents] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    authService.getCurrentUser().then((user) => {
      setUserId(user.$id);
    });

    if (userId) {
      dbService.getEvents(userId).then((events) => {
        if (events) {
          setEvents(events.documents);
          console.log("AllEvents :: useEffect :: ", events);
        }
      });
    }
  }, [userId]);

  const navigate = useNavigate();

  const createEvent = async (e) => {
    e.preventDefault();

    try {
      const event = await dbService.createEvent({ name, userId });
      if (event) {
        // Set current event in redux
        navigate(`/all-questions/${event.$id}`);
      }
    } catch (error) {
      console.log("AllEvents :: createEvent :: ", error);
    }
  };

  return (
    <div>
      <h1>Tous les évènements</h1>
      <form onSubmit={createEvent}>
        <Input
          label="Nom de l'évènement"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Button value="Créer un évènement" onClick={createEvent}></Button>
      </form>
      {events.map((event) => (
        <div key={event.$id}>
          <Event {...event} />
        </div>
      ))}
    </div>
  );
}

export default AllEvents;
