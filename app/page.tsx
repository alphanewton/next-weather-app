"use client";

import Spinner from "@/components/Spinner";
import WeatherInfo from "@/components/WeatherInfo";
import { WeatherData } from "@/typings";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData>();
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e: any) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      console.log(response.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) return <Spinner />;
  else
    return (
      <main>
        {/* Overlay */}

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />

        {/* Background Image */}

        <Image
          src="https://images.unsplash.com/photo-1681798200567-2437430eb57b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="bg"
          layout="fill"
          className="object-cover"
        />

        {/* Search */}

        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto text-white z-10">
          <form
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl mt-4"
            onSubmit={fetchWeather}
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="Search city..."
                className="bg-transparent border-none text-white focus:outline-none text-2xl"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Info */}

        {weather && <WeatherInfo data={weather} />}
      </main>
    );
}
