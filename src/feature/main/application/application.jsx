import "./application.css";
import mobile from "../../../image/mobile.png";
import bazar from "../../../image/bazar-2.png";
import icon from "../../../image/Group246.png"


export default function Application(){
    return <div className="container bg-light application mt-4">
        <div className="row">
            <div className="col-7 col-lg-6 right p-5">
                <div className="download">دانلود اپلیکیشن ایباس</div>
                <div className="text">با استفاده از اپلیکیشن ایباس، به راحتی بلیط خود را تهیه نمایید و از مزایای آن برخوردار شوید.</div>
                <div>
                    <button>
                        <span><img src={bazar}/></span>
                        <span>دانلود از بازار</span>
                    </button>
                    <button> 
                        <span><img src={icon}/></span>
                        <span>دانلود مستقیم</span>
                    </button>
                </div>
            </div>
            <div className="col-5 col-lg-6 mobile">
                <img src={mobile} />
            </div>
        </div>
    </div>
}