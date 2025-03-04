
export type User = {
    name:string,
    img:string

}

export type ChatCardProps = {
    user:User,
    onClick:()=>void
}
export type ChatAreaProps = {
    activeChat:string,
    isVisible:boolean,
    setVisible:React.Dispatch<React.SetStateAction<boolean>>
}
export type ChatListProps = {
    setVisible:React.Dispatch<React.SetStateAction<boolean>>,
    setActiveChat:React.Dispatch<React.SetStateAction<string>>
}