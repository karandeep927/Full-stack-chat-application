import { ChatCardProps } from "../types/types"

const ChatCard:React.FC<ChatCardProps> = ({onClick,user})=>{
  return (
    <div onClick={onClick} className="w-full flex items-start justify-between cursor-pointer p-2 border-b-2">
        <div className="h-11 w-11 rounded-full bg-gray-500 overflow-hidden"><img className="object-cover" src={user.img} alt="profile picture" /></div>
        <div className="flex-1 h-full text-left pl-2 flex justify-between items-center">
            <div className="">
            <h1 className="font-medium text-lg">{user.name}</h1>
            <p className=" capitalize font-light text-sm">last message</p>
            </div>
            <p className=" font-light text-xs">4:30 pm</p>
        </div>
    </div>
  )
}

export default ChatCard