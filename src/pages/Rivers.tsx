const Rivers = () => {
  const handleScrap = async () => {
    const res = await fetch("http://localhost:4000/rivers");
    const data = await res.json();

    console.log(data);
  };

  return (
    <div>
      <h2>rivers page</h2>
      <button className=" bg-slate-700 p-6" onClick={handleScrap}>
        scrap
      </button>
    </div>
  );
};

export default Rivers;
