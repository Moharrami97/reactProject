import "./options.css"
export default function Option(){
    let easy = require("../../../image/easy.png")
    let express = require("../../../image/express.png")
    let economic = require("../../../image/economic.png")
    const items=[
        {id:1 , image:easy, title:"راحت", text:"با چند کلیک ساده بلیط تهیه و در کمال آرامش سفر کنید."},
        {id:2 , image:express, title:"سریع", text: "سریع و بدون معطلی سفر کنید و نگران تاخیر نباشید."},
        {id:3 , image:economic, title:"به صرفه" , text: "ارزان تر و مقرون به صرفه تر از هرجای دیگر بلیط تهیه کنید"}
    ]

    const item = items.map(i =>{
        return(
        <div className="col col-lg-4 p-3">
            <div className="row">
                    <div className="col-6">
                        <img src={i.image}/>
                    </div>
                    <div className="col-6 right">
                        <h5>{i.title}</h5>
                        <div className="text">{i.text}</div>
                    </div>
            </div>
        </div>
        )
    })
    return <div className="row-cols-1 row">
            {item}
        </div>
}