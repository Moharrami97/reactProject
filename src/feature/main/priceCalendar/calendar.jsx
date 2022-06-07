import safar from "../../../image/safar.png";
import "./calendar.css"

export default function PriceCalendar(){
    return<div className="row price-calendar bg-light ">
        <div className="col-lg-4 col-6">
            <img src={safar}/>
        </div>
        <div className="col-lg-8 col-6">
            <h5>شانس بهت رو کرده</h5>
            <div className="text">
                با استفاده از تقویم قیمتی شما میتوانید کمترین و بیشترین قیمت بلیط پرواز در روزهای قبل و بعد از این تاریخ را مشاهده کنید
            </div>
            <button>بیشتر بخون</button>
        </div>
    </div>
}