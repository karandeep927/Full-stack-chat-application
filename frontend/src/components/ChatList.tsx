import ChatCard from "./ChatCard"

function ChatList({setActiveChat,setVisible}) {
  const users = [{name:'karan',img:'https://images.pexels.com/photos/27856326/pexels-photo-27856326/free-photo-of-handsome-boy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},{name:'ram',img:'https://images.pexels.com/photos/27856326/pexels-photo-27856326/free-photo-of-handsome-boy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},{name:'sham',img:'https://images.pexels.com/photos/27856326/pexels-photo-27856326/free-photo-of-handsome-boy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}]
    return (
    <div className="min-w-96 h-full overflow-y-scroll border-r-[1px] border-r-slate-700 pt-2">
       {
        users.map((user)=>{
            return(<ChatCard onClick={()=>{setActiveChat(user.name); setVisible(true)}} user={user}/>)
        })
       }
       
    </div>
  )
}

export default ChatList