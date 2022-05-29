import React, { useEffect, useState } from 'react';
import Question from '../Question/Question';
import { useParams } from 'react-router-dom';

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState(null);
    const params = useParams();

    useEffect(() => {
        getDeck(params.id).then((data) => setQuestions(data));
    }, []);

    useEffect(() => {
        updateNextQuestion();
    }, [questions]);

    function updateNextQuestion() {
        if (questions.length) {
            questions.filter((quest) => quest.answerdate <= Date.parse(new Date()));
            const id = Math.round(Math.random() * (questions.length - 1));
            const q = questions[id];

            if (questions[id].answerdate <= Date.parse(new Date())) {
                setQuestion(q);
            }
        }
    }

    async function getDeck(id) {
        const url = 'http://localhost:3010';
        const endpoint = 'decks';
        const response = await fetch(`${url}/${endpoint}/${id}/cards`);

        return await response.json();
    }

    return (
        <div>
            {!question ? (
                <>
                    <h2>There is no more questions for you!</h2>
                    <h3>Get some rest... See you tomorrow.</h3>
                </>
            ) : question.answerdate <= Date.parse(new Date()) ? (
                <Question
                    question={question.question}
                    answer={question.answer}
                    updateNextQuestion={updateNextQuestion}
                    category={question.category}
                    id={question.id}
                />
            ) : (
                <h2>There is no more question for you! Come back tomorrow.</h2>
            )}
        </div>
    );
}

export default QuestionList;
