import CurrentWeather from "../components/CurrentWeather";
import GetPosition from "../components/GetPosition";
import GetPositionButton from "../components/GetPositionButton";
import Map from "../components/Map";

const Home = () => {
  return (
    <>
      <GetPositionButton />
      <CurrentWeather />
      <Map />
      <GetPosition />
    </>
  );
};

export default Home;
