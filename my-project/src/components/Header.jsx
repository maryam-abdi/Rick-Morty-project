import { useCharector } from "./context/AppContext";


function Header() {
    const {query,setQuery} = useCharector();
  return (
    <header className="w-full h-[60px] bg-slate-800 rounded-2xl flex justify-between items-center px-8 md:px-2 sm:px-4 ">
      
    <h2 className="font-bold text-white text-xl md:text-[1rem]">LOGO</h2>
   <InputSearch query={query} setQuery={setQuery} />
   <FoundResults/>
   <Favourits/>
 </header>
  )
}

export default Header;




function InputSearch(){
    const {query,setQuery} = useCharector();
    return (
        <input value={query} onChange={(e)=>setQuery(e.target.value)}  className="w-[240px] h-[40px] text-white rounded-lg bg-gray-500 px-4 l:w-[200px] md:w-[180px] md:h-[30px] mobile:w-[150px] mobile:text-sm" placeholder="Search..."></input>
    )
}
function FoundResults(){
    const {charectors} = useCharector();
    return (
        <p className="text-gray-400 text-lg md:text-sm mobile:hidden">Found {charectors.length} Results</p>
    )
}
function Favourits(){
    
    const {favourits,handleModal} = useCharector();
    return (
<div className="relative p-1" onClick={handleModal}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500 md:w-6 md:h-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
  <span className=" flex justify-center  items-center font-bold  absolute top-1 right-0 rounded-full bg-red-500 text-white text-[10px] md:text-[8px] px-[3px]">{favourits.length}</span>
  </div>
    )
}