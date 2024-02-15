'use client'

import Link from 'next/link';
import Layout from './layout/Layout';


export default function Dashboard() {

  

  const data = [
    {id: 1, color:"green", name: "Ava Gregoraci", countries:"Bulgaria", instagram:"65376", facebook: "12109", twitter: "132645", image:"https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg",},
    {id: 2, color:"green", name: "Somun Ae-Ri", countries:"Bulgaria", instagram:"36952", facebook: "45871", twitter: "132645", image:"https://img.freepik.com/free-photo/pleasant-looking-caucasian-female-with-long-hair-wearing-yellow-casual-shirt-having-good-mood-looking-happily-camera_176532-11558.jpg",},
    {id: 3, color:"green", name: "Lilah Ioselev", countries:"Bulgaria", instagram:"32584", facebook: "84257", twitter: "132645", image:"https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg",}
  ]

  const NumberFormat = (number) => {
    const formattedNumber = new Intl.NumberFormat('en-US').format(number);

    return formattedNumber;
  }

  return (
    <Layout>
      <h1 className='text-3xl font-semibold capitalize text-gray-900'>Be single minded</h1>

      <section className='grid grid-cols-3 gap-10 pt-5'>
        {data.map((items, i) => {
          return(
            <div className='bg-white p-8 rounded-2xl hover:shadow-lg hover:shadow-slate-200 transition-all' key={i}>
              <div className="flex items-center space-x-4">
                <img src={items.image} alt="" className="flex-none w-16 h-16 rounded-full object-cover"/>
                  <div className="flex-auto">
                    <div className="text-xl text-slate-900 font-semibold dark:text-slate-300">
                      <Link href="/">
                        
                        {items.name}
                      </Link>
                    </div>
                    <div className="mt-0.5 text-sm">{items.countries}</div>
                  </div>
              </div>


              <div className='pt-2'>
                <div className='mt-5'>
                  <div className='flex justify-between text-xs font-medium'>
                    <p className='text-gray-800 '>Instagram</p>
                    <p className={`${i == 0 ? 'text-green-500': i == 1 ? 'text-red-500':'text-blue-500'}`}>{ NumberFormat(items.instagram)}</p>
                  </div>
                  <div className={`relative mt-1 h-1.5 w-full rounded-lg ${i == 0 ? 'bg-green-100':i == 1 ? 'bg-red-100':'bg-blue-100'}`}>
                    <div className={`absolute top-0 left-0 bottom-0 w-[55%] rounded-lg ${i == 0 ? 'bg-green-400':i == 1 ? 'bg-red-400':'bg-blue-400'}`}></div>
                  </div>
                </div>

                <div className='mt-5'>
                  <div className='flex justify-between text-xs font-medium'>
                    <p className='text-gray-800 '>Facebook</p>
                    <p className={`${i == 0 ? 'text-green-500': i == 1 ? 'text-red-500':'text-blue-500'}`}>{ NumberFormat(items.facebook)}</p>
                  </div>
                  <div className={`relative mt-1 h-1.5 w-full rounded-lg ${i == 0 ? 'bg-green-100':i == 1 ? 'bg-red-100':'bg-blue-100'}`}>
                    <div className={`absolute top-0 left-0 bottom-0 w-[35%] rounded-lg ${i == 0 ? 'bg-green-400':i == 1 ? 'bg-red-400':'bg-blue-400'}`}></div>
                  </div>
                </div>


                <div className='mt-5'>
                  <div className='flex justify-between text-xs font-medium'>
                    <p className='text-gray-800 '>Twitter</p>
                    <p className={`${i == 0 ? 'text-green-500': i == 1 ? 'text-red-500':'text-blue-500'}`}>{ NumberFormat(items.twitter)}</p>
                  </div>
                  <div className={`relative mt-1 h-1.5 w-full rounded-lg ${i == 0 ? 'bg-green-100':i == 1 ? 'bg-red-100':'bg-blue-100'}`}>
                    <div className={`absolute top-0 left-0 bottom-0 w-[75%] rounded-lg ${i == 0 ? 'bg-green-400':i == 1 ? 'bg-red-400':'bg-blue-400'}`}></div>
                  </div>
                </div>

                
              </div>
            </div>
          )
        })}
        
      </section>
    </Layout>
  );
};

