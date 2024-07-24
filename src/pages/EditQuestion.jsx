import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import QuestionFormCmp from "../components/QuestionFormCmp";

function EditQuestion() {
  const { questionId } = useParams();
  const [question, setQuestion] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (questionId) {
      dbService.getQuestion(questionId).then((question) => {
        if (question) {
          setQuestion(question);
        } else {
          navigate("/");
        }
      });
    }
  }, [questionId, navigate]);

  return (
    <div>
      {!questionId ? (
        <>
          <h1>Nouvelle question: {questionId}</h1>
          <QuestionFormCmp />
        </>
      ) : (
        <>
          <h1>Editer une question: {questionId}</h1>
          <QuestionFormCmp question={question} />
        </>
      )}
    </div>
  );
}

export default EditQuestion;
