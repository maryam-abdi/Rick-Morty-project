
import {ArrowDownCircleIcon} from "@heroicons/react/24/solid";
import { useCharector } from "./context/AppContext";

function ShowSelectCharector() {

  return (
    <div className="w-[70%] l:w-[60%] sm:w-[55%] h-auto py-8 md:py-2 flex flex-col  justify-start items-center ml-8 md:ml-2">
        <SelectCharector/>
        <ListOfEpesodes/>
      </div>
  )
}

export default ShowSelectCharector

function SelectCharector(){
    const {isSelect,favourits,handleFavourit} = useCharector();
    return (
        <div className="w-full">
            {
                isSelect ?  <div className="w-full h-[305px] xxl:h-[302px] xl:h-[302px]  l:h-[200px] sm:h-[140px]  mobile:h-[115px] xs:h-[100px] xxs:h-[105px] rounded-2xl bg-slate-800 flex  justify-start items-start px-0  ">
    <div className="w-[300px] h-[305px]  l:w-[200px] l:h-[205px]  sm:w-[140px] sm:h-[145px] mobile:w-[115px] mobile:h-[115px] xs:w-[100px] xs:h-[100px] xxs:w-[105px] xxs:h-[105px] ">
    <img src={isSelect.image} className=" rounded-s-2xl"></img>
     </div>
     <div className="flex flex-col justify-center items-center  md:mt-4 mobile:mt-1 ">
       <div className="w-full flex justify-start items-center text-white ml-2 xxs:ml-0 ">
       {isSelect.gender === "Male" ? <ion-icon name="man-outline"></ion-icon> : <ion-icon name="woman-outline"></ion-icon>}
       <h2 className="text-[2rem] text-white font-bold l:text-[1.5rem] md:text-[1rem] sm:text-[0.7rem] xxs:text-[0.5rem]">{isSelect.name}</h2>
       </div>
       <div className="w-full flex justify-start items-center text-white ml-5 mobile:ml-3 xxs:ml-1 gap-3 sm:gap-1 ">
      <span className={isSelect.status === "Dead" ? "w-[12px] h-[12px] sm:w-[9px] sm:h-[9px] xxs:w-[7px] xxs:h-[7px] rounded-full  bg-red-500" : "w-[12px] h-[12px] sm:w-[9px] sm:h-[9px] xxs:w-[7px] xxs:h-[7px] rounded-full  bg-green-500"}></span>
      <p className="text-[1.5rem] l:text-[1rem] md:text-[0.7rem] xxs:text-[0.5rem]">{isSelect.status} - {isSelect.species}</p>
      </div>
      <div className="w-full flex-col flex justify-start items-start text-white mt-5 sm:mt-2 mobile:mt-1 xs:mt-0 l:mt-3 ml-4 xxs:ml-1 ">
       <p className="text-gray-500 sm:text-[10px] xxs:text-[8px]">last know location:</p>
       <h3 className="text-2xl font-bold l:text-xl md:text-lg sm:text-[10px] xxs:text-[7px]">{isSelect.location.name}</h3>
      </div>
      <div className="w-full flex-col flex justify-start items-start text-white mt-6 sm:mt-2 mobile:mt-1 xs:mt-0 ml-4 xxs:ml-1 ">
      <button onClick={()=>{
        favourits.find((fav)=>fav.id === Number(isSelect.id)) ? "" : handleFavourit(isSelect);
      }} 
      className="py-[0.7rem] px-[1.3rem] l:py-[0.5rem] l:px-[1rem] md:py-[0.3rem] md:px-[0.5rem] md:text-[0.8rem] sm:text-[0.5rem] xs:text-[0.3rem] xxs:py-[0.1rem] xxs:px-[0.3rem] cursor-pointer font-bold bg-gray-500 rounded-full">{ favourits.find((fav)=>fav.id === Number(isSelect.id)) ? "its Already added to Favourits" :  "Add to Favourits"}</button>
      </div>
     </div>
     </div> : ""
            }
        </div>
    )
}
function ListOfEpesodes(){
    const {episodes} = useCharector();
    return    <div className="w-full h-auto flex flex-col justify-start items-center rounded-2xl bg-slate-800 p-8 sm:p-2 my-6">
    <div className="w-full flex justify-between items-center mb-4">
      <h2 className="text-gray-400 font-bold text-2xl sm:text-xl mobile:text-lg xs:text-sm">List of Episodes:</h2>
       <ArrowDownCircleIcon className="w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] xs:w-[20px] xs:h-[20px] text-gray-400"></ArrowDownCircleIcon>
    </div>
    <div className="w-full h-auto flex flex-col justify-center items-center gap-3">
   {
    episodes.map((e)=>{
        return  <div key={e.id} className="w-full flex justify-between items-center">
      <h3 className="text-white mobile:text-[15px] xxs:text-[10px]">{e.episode} : <strong>{e.name}</strong></h3>
      <span className="py-[0.2rem] px-[1rem] md:px-[0.7rem] sm:px-[0.3rem] sm:py-[0.1rem] sm:text-[12px] mobile:text-[6px]  text-white font-bold rounded-full bg-gray-500">{e.air_date}</span>
    </div>
    })
   }
    
    </div>
    <div className="w-full flex justify-between items-center"></div>
    </div>

}