import "./travelSelection.css";
import CalendarStart from "./CalendarStart"
import CalendarEnd from "./CalendarEnd"
import React, {useEffect, useState} from 'react';
import Select from "./select";


export default function TravelSelection(){
    const [disabled, setDisabled] = useState(true);
    const [checked, setChecked] = useState(true);
    // const [post, setPost] = useState([])

    function handleInable() {
        setDisabled(!disabled);
        setChecked(!checked)
    }
    function handleDisable() {
        setDisabled(!disabled);
        setChecked(!checked)
    }

    // useEffect(() => {
    //     axios.get("https://ebus.ir/develop/api/v1/township")
    //     .then((response) => {
    //         setPost(response.data);
    //         console.log("response", response.data)
    //     }).catch((error)=>{
    //         console.log("error", error)
    //     })
    // }, [])

    // if (!post) return null;
    

    return <div className="container mx-auto bg-white h-auto travel-selection p-4">
        <div className="row mb-4">
            <label className="col-lg-2 col-4 d-flex-column bg-white right button" for="went">
                <input 
                type="radio" 
                name="went" 
                style={{width:"30px"}} 
                onClick={handleDisable} 
                id="went" 
                value="0" 
                checked={checked}
                />
                یکطرفه
            </label>
            
            <label className="col-lg-2 col-6 d-flex-column bg-white right button" for="return">
                <input 
                type="radio" 
                name="went" 
                style={{width:"30px"}} 
                onClick={handleInable} 
                id="return" 
                value="1"
                />
                رفت و برگشت
            </label>
        </div>
        <div className="row selection">
            <Select content="مبدا"/>
            <Select content="مقصد"/>
            
            
            
            <div className="col-12 col-lg-3 d-flex-column justify-content-start mb-1 mx-lg-2">
                <div className="row line-heigh pt-2">
                    <CalendarStart />
                    <CalendarEnd disabled={disabled}/>
                </div>
            </div>
            <input className="col-12 col-lg-2 d-flex-column justify-content-start mb-1 mx-lg-2 number" type="number" placeholder="تعداد مسافر" min="1"/>
            <input className="col-12 col-lg-2 d-flex-column justify-content-start mb-1 mx-lg-2 search" type="submit" name="submit" value="جستجو" />
        </div>
        
    </div>
}