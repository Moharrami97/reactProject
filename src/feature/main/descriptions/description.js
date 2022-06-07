import "./descriptions.css"

export default function Description(){
    let ticket1 = require("../../../image/ticket-2.png")
    let ticket2= require("../../../image/ticket.png")
    let ticket3 = require("../../../image/ret-tick.png")
    let rezerv = require("../../../image/rezerv.png")
    let ticket5= require("../../../image/ticket.png")
    
    let text = "معرفی ایباس: ایباس اولین سامانه حمل و نقل هوشمند بین شهری اتوبوسی است که فعالیت خود را از سال 1400 با هدف بهبود خدمات ارائه شده به مسافران، آغاز کرده است."
    
    const items=[
        {id:1, image:ticket1, title:"بلیط اتوبوس", text},
        {id:2, image:ticket2, title:"خرید بلیط اینترنتی اتوبوس از ایباس ", text},
        {id:3, image:ticket3, title:"استرداد بلیط اتوبوس با کنسلی بلیط ", text},
        {id:4, image:rezerv, title:"رزرو بلیط اتوبوس", text},
        {id:5, image:ticket5, title:"VIP خرید بلیط اتوبوس", text},
    ]

    const item = items.map((i, index) =>{
        
        if (i.id %2==0) {
            return <div className="row p-4 mb-3 bg-light dir-left" >      
                <div className="col-8 right " key={index}>
                    <div className="title-descriptions"> {i.title}</div>
                    <div className="text-description">{i.text}</div>
                </div>
                <div className="col-4"><img src={i.image} /></div>
            </div>
        }
        return <div className="row p-4 mb-3 bg-light ">      
            <div className="col-8 right ">
                <div className="title-descriptions"> {i.title}</div>
                <div className="text-description">{i.text}</div>
            </div>
            <div className="col-4"><img src={i.image} /></div>
        </div>
    })
    return <>
            {item}
        </>
}