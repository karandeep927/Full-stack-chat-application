import { useState } from "react"
import ChatArea from "../../components/ChatArea"
import ChatList from "../../components/ChatList"
import NavBar from "../../components/NavBar"

function Home() {
    const [activeChat,setActiveChat] = useState<string>('')
    const [isVisible,setVisible] = useState(false)
  return (
    <div className="w-full h-screen flex flex-col">
    <NavBar/>
    <div className="w-full flex-1 flex relative overflow-hidden">
    <ChatList setActiveChat={setActiveChat} setVisible={setVisible}/>
     {activeChat && <ChatArea  activeChat={activeChat} isVisible={isVisible} setVisible={setVisible}/> }
    </div>
    </div>
  )
}

export default Home