import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({children}) {
  return (
    <section className="bg-gray-100 min-h-screen flex">

        <div className="w-20 bg-white h-screen fixed top-0 left-0 bottom-0 z-40 rounded-r-2xl">
            <SideBar/>
        </div>

        <section className="flex-1 w-full pl-20">
            <Header/>

            <main className="px-10 py-5">
                {children}
            </main>

        </section>
        

        
    </section>
  )
}
