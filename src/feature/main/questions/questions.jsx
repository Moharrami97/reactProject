import Question from "./question.jsx"
import "./questions.css"
export default function Questions(){
    return <div className="container questions right mt-4">
        <div className="mb-4">سوالات متداول</div>
        <Question/>
    </div>
}