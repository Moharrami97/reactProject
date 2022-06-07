import question from "../../../image/question.png";
import "./questions.css"

export default function Question(){
    const items= [
        {id:1, text:"چه زمانی میتونیم اقدام به خرید بلیط کنیم؟"},
        {id:2, text:"چه زمانی میتونیم اقدام به خرید بلیط کنیم؟"},
        {id:3, text:"چه زمانی میتونیم اقدام به خرید بلیط کنیم؟"},
        {id:4, text:"چه زمانی میتونیم اقدام به خرید بلیط کنیم؟"}
    ]
    const item= items.map((i, index) =>{
        return <>
        <div className="col-12 bg-light frame p-1 mb-3" key={index}>
                <span><img src={question} /></span>
                <span>{i.text}</span>
            </div></>
    })
    return <div className="row">
        {item}
    </div>
}