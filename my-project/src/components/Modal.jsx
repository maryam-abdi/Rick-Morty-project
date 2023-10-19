import { XCircleIcon,XMarkIcon } from "@heroicons/react/24/outline"
import { useCharector } from "./context/AppContext"

function Modal() {
  
    const {favourits,handelSelect,setOpenModal,handleRemoveFromFav} = useCharector();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#3f454ccc] blur-[0.5px] fixed inset-0 ">
      <div className="w-[50%] h-auto absolute top-[32%] p-8 md:p-4 rounded-2xl bg-black shadow-lg blur-0">
        <div className="w-full flex justify-between items-start mb-10">
            <h2 className="font-bold text-white">List of Favourits</h2>
            <button>
                <XCircleIcon onClick={()=>setOpenModal(is=>is=== false)} className="w-8 h-8 text-red-500"/>
            </button>
        </div>
        <div>
        {
            favourits.map((fav)=>{
                return  <div key={fav.id} className="w-full h-[120px] xl:h-[100px] md:h-[80px] xxs:h-[60px] mobile:h-[70px] rounded-2xl flex justify-between items-center px-5 xl:px-2 bg-slate-800 mb-5">
    <div className="flex  justify-center items-center gap-2 xl:gap-1 ">
    <img className="w-[80px] h-[80px] md:w-[60px] md:h-[60px] mobile:w-[50px] mobile:h-[50px] xxs:w-[40px] xxs:h-[40px] rounded-lg " src={fav.image} alt={fav.id}></img>
   <div className="flex flex-col justify-center items-start md:gap-2 ">
   <div className="flex justify-center items-center text-white font-bold ">
      {fav.gender === "Male" ? <ion-icon name="man-outline"></ion-icon> : <ion-icon name="woman-outline"></ion-icon>}
      <h2 className="text-[1.3rem] xxl:text-[1.5rem] xl:text-[1rem] sm:text-[0.8rem] mobile:text-[0.7rem] xs:text-[0.5rem]">{fav.name}</h2>
      </div>
     <div className="flex justify-center items-center text-white gap-1 ml-2 xs:ml-[0.1rem] xl:ml-1 ">
     <span className={fav.status === "Dead" ? "w-[12px] h-[12px] sm:w-[9px] sm:h-[9px] xxs:w-[7px] xxs:h-[7px] rounded-full  bg-red-500" : "w-[12px] h-[12px] sm:w-[9px] sm:h-[9px] xxs:w-[7px] xxs:h-[7px] rounded-full  bg-green-500"}></span>
     <p className="text-[1.5rem] xxl:text-[1rem] xl:[0.7rem] sm:text-[0.6rem] mobile:text-[0.5rem] xs:text-[0.4rem]">{fav.status} - {fav.species}</p>
     </div>
   </div>
    </div>
   
  <XMarkIcon onClick={()=>{
     handelSelect(fav.id);
     handleRemoveFromFav(fav.id) 
  }}className="w-[40px] h-[40px] xl:w-[30px] xl:h-[30px] sm:w-[20px] sm:h-[20px] xxs:w-[15px] xxs:h-[15px] text-red-500 cursor-pointer"/>
   
   </div>
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Modal
