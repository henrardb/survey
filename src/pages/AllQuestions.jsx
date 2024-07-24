import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Button from "../components/ButtonCmp";

function AllQuestions() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const questionId = 1;

  return (
    <div>
      <h1>Event: {eventId}</h1>
      <Button
        value="Nouvelle question"
        onClick={() => navigate("/edit-question")}
      ></Button>
      <div>Liste des questions</div>
    </div>
  );
}

export default AllQuestions;
