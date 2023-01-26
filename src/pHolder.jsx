function PHolder (prop){
    const link = prop.link
    return(
        <div className="grid place-items-center">
            <div className="  m-10 bg-slate-600 rounded-lg max-w-7xl ">
                <div className="text-2xl p-8 ml-3">
                    {prop.Title}
                </div>
                <img src={link} className="rounded-xl ml-5 mr-5 saturate-50 opacity-60 max-w-sm md:max-w-5xl"/>
                <div className=" m-5 text-lg p-2">
                {prop.des}
                </div>
            </div>
        </div>
    )
}

export default PHolder