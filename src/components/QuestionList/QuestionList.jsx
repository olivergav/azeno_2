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
        if (questions.length) {
            setQuestion(questions[0]);
        }
    }, [questions]);

    async function getDeck(id) {
        const url = 'http://localhost:3010';
        const endpoint = 'decks';
        const response = await fetch(`${url}/${endpoint}/${id}/cards`);

        return await response.json();
    }

    return (
        <div>
            {!question ? (
                <h2>Loading...</h2>
            ) : (
                <Question question={question.question} answer={question.answer} />
            )}
        </div>
    );
}

export default QuestionList;
