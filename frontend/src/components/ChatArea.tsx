import { IoMdArrowRoundBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ChatAreaProps } from "../types/types";

function ChatArea({activeChat,isVisible,setVisible}:ChatAreaProps) {

    return (
    <div className={`${isVisible ? "left-0" : "left-full" } absolute transition-all duration-700 w-full h-full md:static bg-white`}>
        <div className="bg-blue-500 text-white p-2 flex justify-between items-center fixed w-full top-0 md:static">
            <button className="md:hidden" onClick={()=>setVisible(!isVisible)}><IoMdArrowRoundBack size={25}/></button>
            <div className="w-11 h-11 rounded-full bg-slate-600 ml-3"></div>
            <div className="flex-1 text-left pl-3">
                <h1 className="text-lg font-medium leading-none">{activeChat}</h1>
                <p className="text-xs font-light">last seen</p>
            </div>
            <button className="flex items-center justify-center"><BsThreeDotsVertical size={25}/></button>
        </div>
        <div className=" h-full">
            <p>chat history</p>
        </div>
    </div>
  )
}

export default ChatArea