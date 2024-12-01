import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import TemperatureIcon from "../Assets/Climate_Page/Temperature.png";
import RainfallIcon from "../Assets/Climate_Page/Rainfall.png";
import WindIcon from "../Assets/Climate_Page/Wind.png";

const WeatherForecastPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  var [liveWeather, setLiveWeather] = useState(null);
  var [latitude, setLatitude] = useState(null);
  var [longitude, setLongitude] = useState(null);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude.toFixed(2));
      setLongitude(position.coords.longitude.toFixed(2));

      console.log("lat", latitude);
      console.log("lon", longitude);
    });
  }

  const secondsToHours = (timeInSeconds) => {
    return (timeInSeconds / 3600).toFixed(2);
  };

  const getLocation = async () => {
    document.getElementById("loader").style.display = "block";
    await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,rain,snowfall,wind_speed_10m,wind_direction_10m&daily=temperature_2m_max,temperature_2m_min,daylight_duration,sunshine_duration,precipitation_sum,rain_sum,precipitation_probability_max,wind_speed_10m_max,wind_direction_10m_dominant&timezone=GMT&past_days=0&forecast_days=16`
    )
      .then((res) => res.json())
      .then((finalRes) => {
        setLiveWeather(finalRes);
        console.log("final ans: ", finalRes);
        document.getElementById("loader").style.display = "none";
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[75vh] my-20">
        <div className="flex flex-col items-center justify-center my-8">
          <button
            className="p-4 bg-green-500 text-white font-bold text-2xl rounded-lg hover:bg-green-400 hover:animate-zoomAnimation"
            onClick={() => {
              getLocation();
            }}
          >
            Fetch Live Weather
          </button>
          <div
            id="loader"
            className="my-4 border-4 border-t-4 border-gray-300 border-t-blue-500 rounded-full w-12 h-12 animate-spin hidden"
          ></div>
        </div>

        {liveWeather ? (
          <>
            <div className="mx-10 md:mx-20">
              <div className="my-12">
                <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl my-4">
                  Current Weather
                </h1>
                <div className="flex flex-col gap-10 md:flex-row flex-wrap items-center justify-evenly my-10">
                  <div className="flex flex-col items-center gap-4 p-4 min-w-[250px] min-h-[300px] bg-[#3A6D8C] text-white rounded-lg">
                    <div className="w-12 md:w-24">
                      <img
                        src={TemperatureIcon}
                        className="w-full"
                        alt="temperature icon"
                      />
                    </div>
                    <h1 className="font-bold text-lg md:text-xl">
                      Temperature
                    </h1>
                    <ul className="list-none font-semibold">
                      <li className="my-2">
                        Temperature:{" "}
                        <span className="bg-black rounded-md p-1 ml-2">
                          {liveWeather.current.temperature_2m} °C
                        </span>
                      </li>
                      <li className="my-2">
                        Relative Humidity:{" "}
                        <span className="bg-black rounded-md p-1 ml-2">
                          {liveWeather.current.relative_humidity_2m} %
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-4 min-w-[250px] min-h-[300px] bg-[#3A6D8C] text-white rounded-lg">
                    <div className="w-12 md:w-24">
                      <img
                        src={RainfallIcon}
                        className="w-full"
                        alt="rainfall icon"
                      />
                    </div>
                    <h1 className="font-bold text-lg md:text-xl">Rainfall</h1>
                    <ul className="list-none font-semibold">
                      <li className="my-2">
                        Rain:{" "}
                        <span className="bg-black rounded-md p-1 ml-2">
                          {liveWeather.current.rain} mm
                        </span>
                      </li>
                      <li className="my-2">
                        Precipitation:{" "}
                        <span className="bg-black rounded-md p-1 ml-2">
                          {liveWeather.current.precipitation} mm
                        </span>
                      </li>
                      <li className="my-2">
                        Snowfall:{" "}
                        <span className="bg-black rounded-md p-1 ml-2">
                          {liveWeather.current.snowfall} cm
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-4 min-w-[250px] min-h-[300px] bg-[#3A6D8C] text-white rounded-lg">
                    <div className="w-12 md:w-24">
                      <img src={WindIcon} className="w-full" alt="wind icon" />
                    </div>
                    <h1 className="font-bold text-lg md:text-xl">Wind</h1>
                    <ul className="list-none font-semibold">
                      <li className="my-2">
                        Wind Speed:{" "}
                        <span className="text-[#fff] bg-black rounded-md p-1 ml-2">
                          {liveWeather.current.wind_speed_10m} Km/h
                        </span>
                      </li>
                      <li className="my-2">
                        Wind Direction:{" "}
                        <span className="text-[#fff] bg-black rounded-md p-1 ml-2">
                          {liveWeather.current.wind_direction_10m} °
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="my-12">
                <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-10">
                  16-Day Weather Forecast
                </h1>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-5 gap-y-8 my-5">
                  {liveWeather.daily.time.map((time, index) => {
                    return (
                      <>
                        <div className="bg-[#80C4E9] p-4 font-semibold">
                          <p className="text-center font-bold text-[#fff] bg-black rounded-md p-1 mt-2 mb-4">
                            Day: {time}
                          </p>
                          <p className="my-2">
                            Minimum Temperature:{" "}
                            {liveWeather.daily.temperature_2m_min[index]} °C
                          </p>

                          <p className="my-2">
                            Maximum Temperature:{" "}
                            {liveWeather.daily.temperature_2m_max[index]} °C
                          </p>

                          <p className="my-2">
                            {" "}
                            Daylight Duration:{" "}
                            {secondsToHours(
                              liveWeather.daily.daylight_duration[index]
                            )}{" "}
                            hrs
                          </p>

                          <p className="my-2">
                            Sunshine Duration:{" "}
                            {secondsToHours(
                              liveWeather.daily.sunshine_duration[index]
                            )}{" "}
                            hrs
                          </p>

                          <p className="my-2">
                            Rainfall: {liveWeather.daily.rain_sum[index]} mm
                          </p>

                          <p className="my-2">
                            Precipitation:{" "}
                            {liveWeather.daily.precipitation_sum[index]} mm
                          </p>

                          <p className="my-2">
                            Precipitation Probability:{" "}
                            {
                              liveWeather.daily.precipitation_probability_max[
                                index
                              ]
                            }{" "}
                            %
                          </p>

                          <p className="my-2">
                            Wind Speed:{" "}
                            {liveWeather.daily.wind_speed_10m_max[index]} Km/h
                          </p>

                          <p className="my-2">
                            {" "}
                            Wind Direction:{" "}
                            {
                              liveWeather.daily.wind_direction_10m_dominant[
                                index
                              ]
                            }{" "}
                            °
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <Footer />
    </>
  );
};

export default WeatherForecastPage;
