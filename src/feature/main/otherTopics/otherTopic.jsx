export default function OtherTopic(){
    let blog1 = require("../../../image/blog1.jpeg")
    let blog2 = require("../../../image/blog2.jpg")
    const items=[
        {id:1, text:"رفت و برگشت به صرفه و آسان" , image:blog1},
        {id:2, text:"رفت و برگشت به صرفه و آسان" , image:blog2},
        {id:3, text:"رفت و برگشت به صرفه و آسان" , image:blog1},
    ]

    const item = items.map((i, index) =>{
        return <>
        <div className="col col-lg-4 p-1" >
            <div className="position-rel">
                <img src={i.image}/>
                <div className="position-abs px-5 px-lg-2" key={index}>{i.text}</div>
            </div>
        </div>
    </>
    })
    return <div className="row">
        {item}
    </div>
}