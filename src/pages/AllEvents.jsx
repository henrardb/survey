import React, { useState } from "react";
import Event from "../components/Event";
import Button from "../components/ButtonCmp";
import Input from "../components/InputCmp";
import dbService from "../appwrite/db";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";

function AllEvents() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const createEvent = async (e) => {
    e.preventDefault();

    const user = await authService.getCurrentUser();
    const userId = user.$id;

    try {
      const event = await dbService.createEvent({ name, userId });
      if (event) {
        navigate(`/event/${event.$id}`);
      }
    } catch (error) {
      console.log("AllEvents :: createEvent :: ", error);
    }
  };

  return (
    <div>
      <h1>AllEvents</h1>
      <form onSubmit={createEvent}>
        <Input
          label="Nom de l'évènement"
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Button value="Créer un évènement" onClick={createEvent}></Button>
      </form>
      <Event></Event>
    </div>
  );
}

export default AllEvents;
