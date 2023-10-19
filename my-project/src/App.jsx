
import "./index.css"


import Header from "./components/Header";
import ListOfCharector from "./components/ListOfCharector";
import ShowSelectCharector from "./components/ShowSelectCharector";
import { ContextProvider, useCharector } from "./components/context/AppContext";
import Modal from "./components/Modal";

function App() {
 

  return (
   <ContextProvider>
    <AppUi/>
   </ContextProvider>
  )
}

export default App
function AppUi(){
  const {openModal} = useCharector();
  return  <div className='w-full h-full  flex flex-col justify-center items-center px-10 py-8 md:px-2 sm:px-2'>
  
{
  openModal ? <div className="w-full h-auto">
    <Modal/>
   <Header/>
  <main className="w-full h-auto flex  justify-center items-start ">
   <ListOfCharector/>
   <ShowSelectCharector/>
  </main></div> : <div className="w-full h-auto"> <Header/>
  <main className="w-full h-auto flex  justify-center items-start ">
   <ListOfCharector/>
   <ShowSelectCharector/>
  </main></div>
}
 </div>
}