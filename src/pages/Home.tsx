import CurrentWeather from "../components/CurrentWeather";
import GetPositionButton from "../components/GetPositionButton";
import Map from "../components/Map";

const Home = () => {
  return (
    <>
      <GetPositionButton />
      <CurrentWeather />
      <Map />
    </>
  );
};

export default Home;
