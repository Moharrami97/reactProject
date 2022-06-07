import PriceCalendar from "./priceCalendar/calendar";
import SubscribeToNewsletter from "./newsLetter/newsletter";
import OtherTopics from "./otherTopics/otherTopics";
import TravelSelection from "./travelSelection/travelSelection";
import Options from "./options/options";
import "./Main.css"
import Application from "./application/application";
import IntroductoryFilm from "./introductoryFilm/introductoryFilm";
import Questions from "./questions/questions";
import Descriptions from "./descriptions/descriptions";
import Footer from "../footer/Footer";



export default function Main(){
    return <div>
        <div className="container">
        <div>
            <TravelSelection />
        </div>
        <div className="mt-5">
            <Options />
        </div>
        <div className=" mt-5 container">
            <div className="row">
                <div className="col-12 col-lg-8 mb-3 mt-2">
                    <PriceCalendar/>
                </div>
                <div className="col-12 col-lg-4 mb-3 mt-2">
                    <SubscribeToNewsletter/>
                </div>
            </div>
            <div>
                <div className="right mt-5">موضوعات متفرقه</div>
                <div className="row">
                    <OtherTopics />
                </div>
            </div>
            <div>
                <Application />
            </div>
            <div>
                <IntroductoryFilm />
            </div>
            <div>
                <Questions />
            </div>
            <div>
                <Descriptions />
            </div>
        </div>
        
    </div>
    <Footer/>
    </div>
}