


export default function Header() {

    const items = [
        { id: 1, url: 'https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg', isActive: true, },
        { id: 2, url: 'https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg', isActive: false, },
        { id: 3, url: 'https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg', isActive: false, },
    ];

  return (
    <header className="px-10 py-5">
      <div className="flex justify-between items-center">
        <div className="flex w-60">
            <button className="bg-transparent text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>

            <input type="text" placeholder="Search.." className="focus:border-0 focus:outline-none border-0 bg-transparent text-sm w-full p-2 ml-2 block"/>
        </div>

        <div className="flex space-x-2">

            <div className="flex space-x-2">

                {items.map((items, i) => {
                    return(
                        <div key={i} className="w-11 h-11 rounded-full relative">
                            <img src={items.url} className="w-full h-full rounded-full object-cover" alt=""/> 

                            {items.isActive && (
                                <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full shadow-lg">
                                    <span className="animate-ping block h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="block absolute top-0 right-0 rounded-full h-full w-full bg-green-500"></span>
                                </div>
                            )}
                            
                        </div>
                    )
                })}

            </div>

            <button className="bg-primary hover:bg-primary/80 flex items-center justify-center p-2 transition-all w-11 h-11 rounded-full border-0 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>

            </button>
        </div>
      </div>
    </header>
  )
}
