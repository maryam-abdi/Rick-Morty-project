
import { createContext, useContext, useEffect, useState } from "react";


const CharectorContext = createContext();
export function ContextProvider({children}){
    const [isSelect,setIsSelect] = useState("");
    const [ charectors,setCharectors] = useState([]);
    const [episodes,setApisodes] = useState([]);
    const [query,setQuery] = useState("");
    const [favourits,setFavourits] = useState([]);
    const [openModal,setOpenModal ] = useState(false);
    useEffect(()=>{
       const controller = new AbortController();
       const signal = controller.signal;
        fetch(`https://rickandmortyapi.com/api/character?name=${query}`,{signal})
        .then((res)=>res.json())
        .then((data)=>setCharectors(data.results.slice(0,7)))
        .catch((err)=>console.log(err));

        return ()=>{
       controller.abort();
        }
    },[query]);
  
    const handelSelect= (id)=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`).then(res=>res.json()).then((data)=>{
    setIsSelect(data);
    
       const episodeId = data.episode.map((e)=>e.split("/").at(-1));
       fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`).then((res)=>res.json()).then((data)=>{
        setApisodes(data);
       })

   }).catch((err)=>console.log(err))
    
   
  }
  const handleFavourit = (char)=>{
    setFavourits([...favourits,char]);
   

  }
  const handleModal = ()=>{
  setOpenModal(!openModal);
  }
  const handleRemoveFromFav=(id)=>{
  const filterFavorits = favourits.filter((fav)=>fav.id !== Number(id));
  setFavourits(filterFavorits)
  }
//   const handleSearch = ()=>{
//   const filterCharectors = charectors.filter((ch)=>ch.name.toLowerCase().includes(query.trim().toLowerCase()));
//   setCharectors(filterCharectors)
//   }
    return <CharectorContext.Provider value={{isSelect,setIsSelect,charectors,setCharectors,episodes,setApisodes,query,setQuery,favourits,setFavourits,handleFavourit,openModal,setOpenModal,handleModal,handleRemoveFromFav,handelSelect}}>{children}</CharectorContext.Provider>
}


export function useCharector(){
    return useContext(CharectorContext);
}