import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/ButtonCmp";

function AllQuestions() {
  const { eventId } = useParams();
  const questionId = 1;
  return (
    <div>
      <h1>Event: {eventId}</h1>
      <Link to="/edit-question/{questionId}">
        <Button value="Nouvelle question"></Button>
      </Link>
      <div>List of questions</div>
    </div>
  );
}

export default AllQuestions;
