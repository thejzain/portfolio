
function Card(prop) { 
  return (
    <div className={"bg-[url('https://github.com/thejzain/portfolio/blob/main/src/assets/dino.png?raw=true')] relative  bg-cover max-w-lg h-52 m-10 rounded-lg group hover:scale-105 transition-all"}
    >
      <div className="absolute inset-0 bg-slate-200 opacity-70 rounded-lg group-hover:blur-lg "></div>
      <div className="relative bg- h-full  ">
        <div className="p-5 text-xl">{prop.Title}</div>
        <div className="px-5">{prop.des}</div>
      </div>
    </div>
  );
}

export default Card;
