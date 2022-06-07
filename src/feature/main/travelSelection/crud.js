import axios from "axios";
import React from "react";
import SelectVariants from "./select" 


export default function Axios() {
  const [src, setSrc] = React.useState([]);
  const [dest, setDest] = React.useState([]);

  const baseURL = "https://ebus.ir/develop/api/v1/township";

  const getAllTown = () => {
    axios.get(baseURL)
    .then((response) => {
      // console.log(response.data)
      setSrc(response.data)
      setDest(response.data)
    })
    .catch(error => console.error(`Error : ${error}`))
  }

  React.useEffect(() => {
    getAllTown();
  }, []);

  if (src.length > 0){
    return(
        src.data.map((province, index) => {
          console.log(province)
          return (
            <optgroup label={province.title}>
              {province.Townships.map((towns) => {
                return (
                  <option value={towns.code} id={towns.id}>
                    <i
                      className="fa fa-map-marker"
                      style={{
                        fontSize: 15,
                        color: "#6dd06d",
                      }}
                    ></i>{" "}
                    {towns.title}
                  </option>
                );
              })}
            </optgroup>
          );
        })  
      )
  }

}