import videoCover from "../../../image/video-cover.jpg";
import play from "../../../image/Group247.png";
import "./introductoryFilm.css"

export default function IntroductoryFilm(){
    return <div className="container videoCover py-3">
        <div className="right py-4">ایباس را بهتر بشناسید</div>
        <div className="row p-3 bg-light">
            <div className="col-lg-6 p-2 film">
                <img src={videoCover} alt="ایباس" />
                <img src={play} />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 right p-2">
                معرفی ایباس: ایباس اولین سامانه حمل و نقل هوشمند بین شهری اتوبوسی است که فعالیت خود را از سال 1400 با هدف بهبود خدمات ارائه شده به مسافران، آغاز کرده است.
                تا بتواند برای تمام افراد استان سفری مقرون به صرفه و با کیفیت بالا ایجاد کند.
                معرفی ایباس: ایباس اولین سامانه حمل و نقل هوشمند بین شهری اتوبوسی است که فعالیت خود را از سال 1400 با هدف بهبود خدمات ارائه شده به مسافران، آغاز کرده است.
                تا بتواند برای تمام افراد استان سفری مقرون به صرفه و با کیفیت بالا ایجاد کند.
                معرفی ایباس: ایباس اولین سامانه حمل و نقل هوشمند بین شهری اتوبوسی است که فعالیت خود را از سال 1400 با هدف بهبود خدمات ارائه شده به مسافران، آغاز کرده است.
                تا بتواند برای تمام افراد استان سفری مقرون به صرفه و با کیفیت بالا ایجاد کند.
            </div>
        </div>
    </div>
}