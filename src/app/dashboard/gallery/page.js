'use client'

import { useState } from 'react';
import Layout from '../layout/Layout';

export default function Report() {

    const [activeTab, setActiveTab] = useState('Design');

    const handleTab = (tab) => {
        setActiveTab(tab);
    };


  
  return (
    <Layout>

        <div className=' grid grid-cols-2 gap-10'>
            <div>
                <p>Telescope</p>
                <div className='bg-white p-4 rounded-lg mt-3'>
                    <div className='divide-y space-y-4'>
                        <div className='grid grid-cols-9 pt-4 items-center'>

                            <div className='col-span-3 flex items-center'>
                                <div className='w-10 h-10 rounded-full '>
                                    <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg' alt=''/>
                                </div>
                                <div className='flex-1 pl-3'>
                                    <h4 className='text-sm font-semibold text-neutral-900'>Jel Chibuzo</h4>
                                    
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    23 Sep 2019
                                </p>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    02:52PM
                                </p>
                            </div>

                            <div className='col-span-2 text-right'>
                                <h4 className='text-lg font-semibold text-primary'>$390.99</h4>
                            </div>

                        </div>
                        <div className='grid grid-cols-9 pt-4 items-center'>

                            <div className='col-span-3 flex items-center'>
                                <div className='w-10 h-10 rounded-full '>
                                    <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg' alt=''/>
                                </div>
                                <div className='flex-1 pl-3'>
                                    <h4 className='text-sm font-semibold text-neutral-900'>Dina Glenn</h4>
                                    
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    28 Oct 2024
                                </p>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    05:52PM
                                </p>
                            </div>

                            <div className='col-span-2 text-right'>
                                <h4 className='text-lg font-semibold text-red-500'>$367.00</h4>
                            </div>

                        </div>
                        <div className='grid grid-cols-9 pt-4 items-center'>

                            <div className='col-span-3 flex items-center'>
                                <div className='w-10 h-10 rounded-full '>
                                    <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg' alt=''/>
                                </div>
                                <div className='flex-1 pl-3'>
                                    <h4 className='text-sm font-semibold text-neutral-900'>Izabella Tabakova</h4>
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    23 Jan 2023
                                </p>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    02:54PM
                                </p>
                            </div>

                            <div className='col-span-2 text-right'>
                                <h4 className='text-lg font-semibold text-sky-500'>$65.99</h4>
                            </div>

                        </div>
                        <div className='grid grid-cols-9 pt-4 items-center'>

                            <div className='col-span-3 flex items-center'>
                                <div className='w-10 h-10 rounded-full '>
                                    <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/1854865/pexels-photo-1854865.jpeg' alt=''/>
                                </div>
                                <div className='flex-1 pl-3'>
                                    <h4 className='text-sm font-semibold text-neutral-900'>Opi Watihana</h4>
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    23 Sep 2019
                                </p>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    02:52PM
                                </p>
                            </div>

                            <div className='col-span-2 text-right'>
                                <h4 className='text-lg font-semibold text-yellow-500'>$390.99</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p>Asteroids</p>
                <div className='bg-white p-4 rounded-lg mt-3'>
                    <div className='divide-y space-y-4'>
                        
                        <div className='grid grid-cols-9 pt-4 items-center'>

                            <div className='col-span-3 flex items-center'>
                                <div className='w-10 h-10 rounded-full '>
                                    <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/3779760/pexels-photo-3779760.jpeg' alt=''/>
                                </div>
                                <div className='flex-1 pl-3'>
                                    <h4 className='text-sm font-semibold text-neutral-900'>Dina Glenn</h4>
                                    
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    28 Oct 2024
                                </p>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    05:52PM
                                </p>
                            </div>

                            <div className='col-span-2 text-right'>
                                <h4 className='text-lg font-semibold text-green-500'>$367.00</h4>
                            </div>

                        </div>
                        <div className='grid grid-cols-9 pt-4 items-center'>

                            <div className='col-span-3 flex items-center'>
                                <div className='w-10 h-10 rounded-full '>
                                    <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/1854865/pexels-photo-1854865.jpeg' alt=''/>
                                </div>
                                <div className='flex-1 pl-3'>
                                    <h4 className='text-sm font-semibold text-neutral-900'>Opi Watihana</h4>
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    23 Sep 2019
                                </p>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    02:52PM
                                </p>
                            </div>

                            <div className='col-span-2 text-right'>
                                <h4 className='text-lg font-semibold text-yellow-500'>$390.99</h4>
                            </div>

                        </div>

                        <div className='grid grid-cols-9 pt-4 items-center'>

                            <div className='col-span-3 flex items-center'>
                                <div className='w-10 h-10 rounded-full '>
                                    <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg' alt=''/>
                                </div>
                                <div className='flex-1 pl-3'>
                                    <h4 className='text-sm font-semibold text-neutral-900'>Izabella Tabakova</h4>
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    23 Jan 2023
                                </p>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    02:54PM
                                </p>
                            </div>

                            <div className='col-span-2 text-right'>
                                <h4 className='text-lg font-semibold text-sky-500'>$65.99</h4>
                            </div>

                        </div>
                        

                        <div className='grid grid-cols-9 pt-4 items-center'>

                            <div className='col-span-3 flex items-center'>
                                <div className='w-10 h-10 rounded-full '>
                                    <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg' alt=''/>
                                </div>
                                <div className='flex-1 pl-3'>
                                    <h4 className='text-sm font-semibold text-neutral-900'>Jel Chibuzo</h4>
                                    
                                </div>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    23 Sep 2019
                                </p>
                            </div>

                            <div className='col-span-2'>
                                <p className='text-xs text-neutral-500'>
                                    02:52PM
                                </p>
                            </div>

                            <div className='col-span-2 text-right'>
                                <h4 className='text-lg font-semibold text-red-500'>$390.99</h4>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='pt-10'>
            <ul className='flex space-x-5 font-medium'>
                <li>
                    <button className={` ${activeTab == 'Design' ? 'text-neutral-900':'text-neutral-400'} `} onClick={() => handleTab('Design')}>Design</button>
                </li>
                <li>
                    <button className={` ${activeTab == 'Product' ? 'text-neutral-900':'text-neutral-400'} `} onClick={() => handleTab('Product')}>Product</button>
                </li>
                <li>
                    <button className={` ${activeTab == 'Color' ? 'text-neutral-900':'text-neutral-400'} `} onClick={() => handleTab('Color')}>Color</button>
                </li>
            </ul>
        </div>

        <div>
            {activeTab == 'Design' ? (
                <div className='grid grid-rows-2 grid-cols-6 gap-6 h-96'>
                    <div className='col-span-2 row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg' alt=''/>   
                    </div>

                    <div className=' row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>

                    <div className=''>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>

                    <div className=' row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/20216447/pexels-photo-20216447/free-photo-of-a-black-car-is-parked-on-the-street.jpeg' alt=''/>   
                    </div>


                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>

                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>

                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>
                </div>
            ):activeTab == 'Product' ? (

                <div className='grid grid-rows-2 grid-cols-6 gap-6 h-96'>
                    <div className='col-span-2 row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg' alt=''/>   
                    </div>

                    <div className=' row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>

                    <div className=''>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>

                    <div className=' row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/20216447/pexels-photo-20216447/free-photo-of-a-black-car-is-parked-on-the-street.jpeg' alt=''/>   
                    </div>


                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>

                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>

                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19150732/pexels-photo-19150732/free-photo-of-model-in-a-white-blouse-with-chiffon-short-sleeves-and-a-leopard-print-skirt-sitting-on-the-base-of-a-column-with-bluemint-shopping-bag.jpeg' alt=''/>   
                    </div>
                </div>
            ):(

                <div className='grid grid-rows-2 grid-cols-6 gap-6 h-96'>
                    

                    <div className=' row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/1208783/pexels-photo-1208783.jpeg' alt=''/>   
                    </div>

                    <div className='col-span-2 row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/2887579/pexels-photo-2887579.jpeg' alt=''/>   
                    </div>

                    <div className=''>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/1161542/pexels-photo-1161542.jpeg' alt=''/>   
                    </div>

                    


                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/19679/pexels-photo.jpg' alt=''/>   
                    </div>

                    <div className=' row-span-2'>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg' alt=''/>   
                    </div>

                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/1557183/pexels-photo-1557183.jpeg' alt=''/>   
                    </div>

                    <div className=' '>
                        <img className='w-full h-full rounded-xl object-cover' src='https://images.pexels.com/photos/5438826/pexels-photo-5438826.jpeg' alt=''/>   
                    </div>
                </div>
            )}
        </div>

    </Layout>
  )
}

