import React, {useState, useEffect } from 'react'
import { Select as SrcSelect } from "antd";
import axios from "axios";
import Select from 'react-select';
import jalaali from "jalaali-js";
import * as moment from 'jalali-moment';

const { Option, OptGroup } = SrcSelect;

export default function Select2(){
  const [src, setSrc] = useState();
  const [dest, setDest] = useState();
  const [cities, setCities] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);

  const options = cities.map((city) => {
    return {
        label: city.title,
        options: city.Townships.map((town) => {
            return { label: town.title, value: town.code, id: town.id }
          })
      };
  });

  const baseURL = "https://ebus.ir/develop/api/v1/township";

    useEffect(() => {
      axios.get(baseURL).then((res) => {
          // console.log("first", res.data.data)
          setCities(res.data.data);
          setSrc({ id: res.data.data.id, value: res.data.data.code, title: res.data.data.title });
      });
    }, []);


    const handleChangeDest = (destination) => {
      if (!selectedDay) {
          const today = moment().locale('en').format('YYYY-MM-DD')
          var newDate = today;

      } else {
          var newDate = jalaali
              .jalaaliToDateObject(
                  selectedDay?.year,
                  selectedDay?.month,
                  selectedDay?.day
              )
              .toLocaleDateString()
              .split("/");

          newDate = `${newDate[2]}-${newDate[0] < 10 ? `0${newDate[0]}` : newDate[0]
              }-${newDate[1] < 10 ? `0${newDate[1]}` : newDate[1]}`;
      }

      const data = {
          originId: src?.value,
          destinationId: destination,
          travelDate: newDate,
      };
      console.log(data)
  };

  const customStyles = {
      control: base => ({
          ...base,
          height: 50,
          minHeight: 50,
          borderRadius: 13,
          backgroundColor: '#f8f8f8',
          fontSize: "15px"
      }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
              ...styles,
              backgroundColor: 'transparent !important',
              color: isSelected ? '#6dd06d' : "black",
              // borderRadius: '13px !important',
              width: "90%",
              margin: "8px",
              borderBottom: "1px solid #ccced4",
              fontSize: "15px",
          };
      },
      menu: (styles) => {
          return {
              ...styles,
              minHeight: 40,
              borderRadius: '13px !important',
              backgroundColor: '#f8f8f8',
          };
      },
      menuList: base => ({
          ...base,
          maxHeight: "287px !important",
          "::-webkit-scrollbar": {
              width: 0,
              height: 0,
          },
          "::-webkit-scrollbar-track": {
              background: "#f1f1f1"
          },
          "::-webkit-scrollbar-thumb": {
              background: "#888",
          },
          "::-webkit-scrollbar-thumb:hover": {
              background: "#555"
          },
      }),

  };

  const labelStyle = {
      borderRadius: "50%", width: "40px", height: "18px",
      position: "absolute", zIndex: "1", bottom: "40px", right: "35px", backgroundColor: "#eef0f8"
  }

  return(
  <div className='col-12 mt-0'>
      <div
          className='mt-0 text-center'
          style={labelStyle}
      >
          <span>مبدا</span>
      </div>
      <SrcSelect
          // showSearch
          optionFilterProp="children"
          style={{ borderRadius: "13px", height: "4rem", width: "100%", fontSize: "15px"}}
          onChange={(e, a) => {
              setSrc(a);
          }}
          value={src}
          placeholder={
              <span
                  className="d-flex align-items-center"
                  style={{ gap: "5px" }}
              >
                  <h5 className="mx-auto my-auto text-muted">مبدا</h5>
              </span>
          }
          suffixIcon={false}
      >
          {cities
              ? cities.map((province, index) => {
                console.log(province)
                  return (
                      <OptGroup key={index} label={province.title}>
                          {province.Townships.map((towns, index) => {
                              return (
                                  <Option
                                      key={index}
                                      value={towns.code}
                                      id={towns.id}
                                  >
                                      {towns.title}
                                  </Option>
                              );
                          })}
                      </OptGroup>
                  );
              })
              : []}
      </SrcSelect>

      <div className='col-12 mt-7'>
            <div className='mt-0 text-center'
                style={labelStyle}
            >
                <span>مقصد</span>
            </div>
            <Select
              
                autofocus={true}
                menuIsOpen={true}
                placeholder="جستجوی مقصد..."
                className='filter ant-select-selector'
                onChange={(e) => {
                    setDest(e.value);
                    handleChangeDest(e.value);
                }}
                options={options}
                styles={customStyles}
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator:() => null,
                }}
            />
        </div>
    </div>
  )
}