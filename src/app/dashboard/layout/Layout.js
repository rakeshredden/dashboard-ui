import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({children}) {
  return (
    <section className="bg-gray-100 min-h-screen flex">

        <div className="w-24 bg-white min-h-screen p-5 rounded-r-3xl">
            <SideBar/>
        </div>

        <section className="flex-1 w-full">
            <Header/>

            <main className="p-5">
                {children}
            </main>

        </section>
        

        
    </section>
  )
}
