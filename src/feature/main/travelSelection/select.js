import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import axios from "axios";
// import { Select } from 'antd'
export default function SelectVariants(props) {
  // const { Option, OptGroup } = Select;

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const towns = props.towns
  
  const [src, setSrc] = React.useState([]);
  const [dest, setDest] = React.useState([]);

  const baseURL = "https://ebus.ir/develop/api/v1/township/list/cities";

  const getAllTown = () => {
    axios.get(baseURL)
    .then((response) => {

      setSrc(response.data.data)
      setDest(response.data.data)
    })
    .catch(error => console.error(`Error : ${error}`))
  }

  React.useEffect(() => {
    getAllTown();
  }, []);

  return (
    <div className="col-12 col-lg-2 d-flex-column justify-content-start mb-1 mx-lg-2 p-0 select">
      <CacheProvider value={cacheRtl}>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth style={{backgroundColor:"#eee"}}>
          <InputLabel htmlFor="grouped-native-select">{props.content}</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Grouping">
            <option aria-label="None" value=""/>
            {
                src.length > 0 ?
                  (src.map(item =>
                      <optgroup key={item.id} label={item.title}>
                          {item.Townships.map(res =>
                              <option key={res.code}>{res.title}</option>

                          )}
                      </optgroup>

                  ))
                  :
                  null
              }
          </Select>
        </FormControl>
      </CacheProvider>
    </div>
  );
}