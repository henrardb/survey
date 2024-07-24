import React from "react";
import { useForm } from "react-hook-form";
import dbService, { DbService } from "../appwrite/db";
import { useNavigate } from "react-router-dom";

function QuestionFormCmp({ question }) {
  // /mnt/c/Users/bruno/Documents/Freecodecamp/BlogAppwrite/src/components/post-form/PostForm.jsx
  const { handleSubmit, register } = useForm({
    defaultValues: {
      id: question?.$id || 0,
      title: question?.title || "",
      answers: question?.answers || [],
    },
  });

  const navigate = useNavigate();
  const eventId = 123;

  const submit = async (data) => {
    console.log("Submit");
    if (question) {
      const dbPost = await dbService.updateQuestion(question.$id, {
        ...data,
      });
      if (dbPost) {
        navigate("/allQuestions");
      }
    } else {
      const dbPost = await dbService.createQuestion({ ...data, eventId });
      if (dbPost) {
        navigate("/allQuestions");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      {question ? <input placeholder="Id" {...register("id")} /> : ""}
      <input placeholder="Title" {...register("title")} />
      <input placeholder="Answers" {...register("answers")} />
      <button type="sumbit">{question ? "Update" : "Submit"}</button>
    </form>
  );
}

export default QuestionFormCmp;
