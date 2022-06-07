import imageBackgrount from "../../image/Group248.jpg"
import "./Header.css"

export default function Background(){
    return <div className="container-fluid p-0">
        <span className="position-relative image-backgrount text-center">
            <img src={imageBackgrount} />
            <p className="text-background">ایباس: سفری سریع، راحت و به صرفه</p>
        </span>
    </div>
}
