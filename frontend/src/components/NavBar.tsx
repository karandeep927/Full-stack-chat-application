
function NavBar() {
  return (
    <div className=" bg-blue-500 text-white flex justify-between px-4 items-center py-4 shadow-md border border-b-white" >
        <h1 className="text-2xl font-bold">
            Chatter.com
        </h1>
        <button className="font-medium rounded-md py-2 px-2 border border-white transition shadow-md active:bg-blue-600">Log Out</button>
    </div>
  )
}

export default NavBar