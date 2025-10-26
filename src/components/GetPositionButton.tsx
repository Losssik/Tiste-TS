const GetPositionButton = () => {
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    }
  };

  return (
    <button onClick={handleClick} className=" bg-slate-500">
      get my position
    </button>
  );
};

export default GetPositionButton;
