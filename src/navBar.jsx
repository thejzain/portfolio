
function NavBar(){
    return(
        <nav className=" hidden md:block bg-slate-700 text-slate-50">
            <ul className="grid grid-flow-col place-content-end place-items-center gap-14 py-10 pr-10 text-xl ">
                <li>Home</li>
                <li>Works</li>
                <li>About Me</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar