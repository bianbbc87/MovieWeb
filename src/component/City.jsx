import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { S } from './CityStyle';

export default function City() {

    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState(null)

     // 입력값 변경 핸들러
     const handleChange = (e) => {
        setLocation(e.target.value);
    }

    const searchWeather = async () => {
        try {
            const response = await axios.get(`/test.json`)
            // public에서 가져오는 것이기 때문에 params 사용 안 해도 됨.
            if(response.data.name === location) {
                setWeather(response.data);
            } else {
                setWeather(null);
            }
            console.log(response.data);
        } catch(error) {
            console.error("error : ", error);
        }
    }

    const handleSearch = (e) => {
        if(e.key === 'Enter') {
            searchWeather();
            console.log('클릭');
        }
        console.log(location);
    }

  return (
    <S.Wrapper>
      <S.Search 
      type="text" 
      placeholder='도시를 입력하세요'
      value={location}
      onChange={handleChange}
      onKeyPress={handleSearch} />
      { weather && 
      <S.WeatherWrapper>
        <S.Name>{weather.name}</S.Name>
        <S.Temp>{Math.round(((weather.main.temp - 273.15) * 10)) / 10}°C</S.Temp>
        <S.Main>{weather.weather[0].main}</S.Main>
        </S.WeatherWrapper>}
    </S.Wrapper>
  )
}
