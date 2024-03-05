'use client'

import Link from 'next/link';
import Layout from '../layout/Layout';



export default function Blog() {

  return (
    <Layout>
        

        <div className='grid grid-cols-3 gap-6'>

          <div className='rounded-lg bg-indigo-600 p-5 transition-all text-white shadow hover:shadow-xl hover:shadow-indigo-200'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-medium'>CraftworkBank</h2>

                <div className='rotate-90'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                    </svg>
                </div>
            </div>

            <div className='pt-16'>
                <p className='text-sm font-light'>
                    Henry Richardson
                </p>
                <div className='text-xl flex items-start space-x-7 pt-2'>
                    <p>
                        3254
                    </p>
                    <p>
                        ****
                    </p>
                    <p>
                        ****
                    </p>
                    <p>
                        9587
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-between pt-10'>
                <p>04 / 28</p>
                <div className='w-28'>
                    <img src='/images/mastercard.svg' alt=''/>
                </div>
            </div>
          </div>

          <div className='rounded-lg bg-red-600 p-5 transition-all text-white shadow hover:shadow-xl hover:shadow-red-200'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-medium'>CraftworkBank</h2>

                <div className='rotate-90'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                    </svg>

                </div>
            </div>

            <div className='pt-16'>
                <p className='text-sm font-light'>
                    Brijamohan Mallick
                </p>
                <div className='text-xl flex items-start space-x-7 pt-2'>
                    <p>
                        0254
                    </p>
                    <p>
                        ****
                    </p>
                    <p>
                        ****
                    </p>
                    <p>
                        65
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-between pt-10'>
                <p>04 / 30</p>
                <div className='w-28'>
                    <img src='/images/mastercard.svg' alt=''/>
                </div>
            </div>
          </div>


          <div className='rounded-lg bg-green-500 p-5 transition-all text-white shadow hover:shadow-xl hover:shadow-green-200'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-medium'>CraftworkBank</h2>

                <div className='rotate-90'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                    </svg>

                </div>
            </div>

            <div className='pt-16'>
                <p className='text-sm font-light'>
                    Santiago Valentín
                </p>
                <div className='text-xl flex items-start space-x-7 pt-2'>
                    <p>
                        5487
                    </p>
                    <p>
                        ****
                    </p>
                    <p>
                        ****
                    </p>
                    <p>
                        1002
                    </p>
                </div>
            </div>

            <div className='flex items-center justify-between pt-10'>
                <p>06 / 25</p>
                <div className='w-28'>
                    <img src='/images/mastercard.svg' alt=''/>
                </div>
            </div>
          </div>

        </div>

        <section className='pt-12 space-y-6'>
            <div className='bg-white rounded-lg hover:shadow-lg transition-all p-4'>
                <div className='grid grid-cols-11 items-center'>
                    <div className='col-span-2 flex items-center'>
                        <div className='w-12 h-12 rounded-full '>
                            <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' alt=''/>
                        </div>
                        <div className='flex-1 pl-5'>
                            <h4 className='text-base font-semibold text-neutral-900'>Jel Chibuzo</h4>
                            <p className='text-xs text-neutral-500'>
                                Lima
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>578</h4>
                            <p className='text-xs text-neutral-500'>
                                Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>357</h4>
                            <p className='text-xs text-neutral-500'>
                                Finished Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-primary'>$390.99</h4>
                            <p className='text-xs text-neutral-500'>
                                Total Profit
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>189</h4>
                            <p className='text-xs text-neutral-500'>
                                Followers
                            </p>
                        </div>
                    </div>

                    <div className='text-right '>
                        <button className='text-neutral-500 transition-all hover:text-neutral-800 w-8 h-8 rounded-full inline-flex items-center justify-center hover:bg-neutral-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg hover:shadow-lg transition-all p-4'>
                <div className='grid grid-cols-11 items-center'>
                    <div className='col-span-2 flex items-center'>
                        <div className='w-12 h-12 rounded-full '>
                            <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/3760856/pexels-photo-3760856.jpeg' alt=''/>
                        </div>
                        <div className='flex-1 pl-5'>
                            <h4 className='text-base font-semibold text-neutral-900'>Jel Chibuzo</h4>
                            <p className='text-xs text-neutral-500'>
                                Lima
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>578</h4>
                            <p className='text-xs text-neutral-500'>
                                Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>357</h4>
                            <p className='text-xs text-neutral-500'>
                                Finished Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-primary'>$390.99</h4>
                            <p className='text-xs text-neutral-500'>
                                Total Profit
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>189</h4>
                            <p className='text-xs text-neutral-500'>
                                Followers
                            </p>
                        </div>
                    </div>

                    <div className='text-right '>
                        <button className='text-neutral-500 transition-all hover:text-neutral-800 w-8 h-8 rounded-full inline-flex items-center justify-center hover:bg-neutral-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg hover:shadow-lg transition-all p-4'>
                <div className='grid grid-cols-11 items-center'>
                    <div className='col-span-2 flex items-center'>
                        <div className='w-12 h-12 rounded-full '>
                            <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' alt=''/>
                        </div>
                        <div className='flex-1 pl-5'>
                            <h4 className='text-base font-semibold text-neutral-900'>Jel Chibuzo</h4>
                            <p className='text-xs text-neutral-500'>
                                Lima
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>54</h4>
                            <p className='text-xs text-neutral-500'>
                                Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>95</h4>
                            <p className='text-xs text-neutral-500'>
                                Finished Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-primary'>$84.99</h4>
                            <p className='text-xs text-neutral-500'>
                                Total Profit
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>321</h4>
                            <p className='text-xs text-neutral-500'>
                                Followers
                            </p>
                        </div>
                    </div>

                    <div className='text-right '>
                        <button className='text-neutral-500 transition-all hover:text-neutral-800 w-8 h-8 rounded-full inline-flex items-center justify-center hover:bg-neutral-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg hover:shadow-lg transition-all p-4'>
                <div className='grid grid-cols-11 items-center'>
                    <div className='col-span-2 flex items-center'>
                        <div className='w-12 h-12 rounded-full '>
                            <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/1624956/pexels-photo-1624956.jpeg' alt=''/>
                        </div>
                        <div className='flex-1 pl-5'>
                            <h4 className='text-base font-semibold text-neutral-900'>Jel Chibuzo</h4>
                            <p className='text-xs text-neutral-500'>
                                Lima
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>9,854</h4>
                            <p className='text-xs text-neutral-500'>
                                Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>98541</h4>
                            <p className='text-xs text-neutral-500'>
                                Finished Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-primary'>$6,239</h4>
                            <p className='text-xs text-neutral-500'>
                                Total Profit
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>9,854</h4>
                            <p className='text-xs text-neutral-500'>
                                Followers
                            </p>
                        </div>
                    </div>

                    <div className='text-right '>
                        <button className='text-neutral-500 transition-all hover:text-neutral-800 w-8 h-8 rounded-full inline-flex items-center justify-center hover:bg-neutral-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-white rounded-lg hover:shadow-lg transition-all p-4'>
                <div className='grid grid-cols-11 items-center'>
                    <div className='col-span-2 flex items-center'>
                        <div className='w-12 h-12 rounded-full '>
                            <img className='w-full h-full rounded-full object-cover' src='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg' alt=''/>
                        </div>
                        <div className='flex-1 pl-5'>
                            <h4 className='text-base font-semibold text-neutral-900'>Jel Chibuzo</h4>
                            <p className='text-xs text-neutral-500'>
                                Lima
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>578</h4>
                            <p className='text-xs text-neutral-500'>
                                Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>357</h4>
                            <p className='text-xs text-neutral-500'>
                                Finished Projects
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-primary'>$658</h4>
                            <p className='text-xs text-neutral-500'>
                                Total Profit
                            </p>
                        </div>
                    </div>

                    <div className='col-span-2 flex justify-center'>
                        <div>
                            <h4 className='text-base font-semibold text-neutral-900'>189</h4>
                            <p className='text-xs text-neutral-500'>
                                Followers
                            </p>
                        </div>
                    </div>

                    <div className='text-right '>
                        <button className='text-neutral-500 transition-all hover:text-neutral-800 w-8 h-8 rounded-full inline-flex items-center justify-center hover:bg-neutral-100'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    </Layout>
  )
}

