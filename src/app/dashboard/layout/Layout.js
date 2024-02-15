import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({children}) {
  return (
    <section className="bg-gray-100 min-h-screen flex">

        <div className="w-20 bg-white min-h-screen rounded-r-3xl">
            <SideBar/>
        </div>

        <section className="flex-1 w-full">
            <Header/>

            <main className="px-10 py-5">
                {children}
            </main>

        </section>
        

        
    </section>
  )
}
