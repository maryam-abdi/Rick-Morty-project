
import {EyeIcon} from "@heroicons/react/24/outline";

import { useCharector } from "./context/AppContext";

function ListOfCharector() {
    const {charectors} = useCharector();
  return (
    <div className="w-[30%] l:w-[40%] sm:w-[45%]  h-auto py-8 md:py-2 flex flex-col justify-center items-center gap-6 md:gap-1">
    {
        charectors.map((char)=>{
          return <Charector key={char.id} char={char}/>
        })
    }   
    
   </div>
  )
}

export default ListOfCharector

function Charector({char}){
    const {handelSelect} = useCharector();
    return   <div className="w-full h-[120px] xl:h-[100px] md:h-[80px] xxs:h-[60px] mobile:h-[70px] rounded-2xl flex justify-between items-center px-5 xl:px-2 bg-slate-800 ">
    <div className="flex  justify-center items-center gap-2 xl:gap-1 ">
    <img className="w-[80px] h-[80px] md:w-[60px] md:h-[60px] mobile:w-[50px] mobile:h-[50px] xxs:w-[40px] xxs:h-[40px] rounded-lg " src={char.image} alt={char.id}></img>
   <div className="flex flex-col justify-center items-start md:gap-2 ">
   <div className="flex justify-center items-center text-white font-bold ">
      {char.gender === "Male" ? <ion-icon name="man-outline"></ion-icon> : <ion-icon name="woman-outline"></ion-icon>}
      <h2 className="text-[1.3rem] xxl:text-[1.5rem] xl:text-[1rem] sm:text-[0.8rem] mobile:text-[0.7rem] xs:text-[0.5rem]">{char.name}</h2>
      </div>
     <div className="flex justify-center items-center text-white gap-1 ml-2 xs:ml-[0.1rem] xl:ml-1 ">
     <span className={char.status === "Dead" ? "w-[12px] h-[12px] sm:w-[9px] sm:h-[9px] xxs:w-[7px] xxs:h-[7px] rounded-full  bg-red-500" : "w-[12px] h-[12px] sm:w-[9px] sm:h-[9px] xxs:w-[7px] xxs:h-[7px] rounded-full  bg-green-500"}></span>
     <p className="text-[1.5rem] xxl:text-[1rem] xl:[0.7rem] sm:text-[0.6rem] mobile:text-[0.5rem] xs:text-[0.4rem]">{char.status} - {char.species}</p>
     </div>
   </div>
    </div>
   
  <EyeIcon onClick={()=> handelSelect(char.id) }className="w-[40px] h-[40px] xl:w-[30px] xl:h-[30px] sm:w-[20px] sm:h-[20px] xxs:w-[15px] xxs:h-[15px] text-red-500 cursor-pointer"/>
   
   </div>
}