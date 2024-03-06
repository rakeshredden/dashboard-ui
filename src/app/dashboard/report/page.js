'use client'

import Link from "next/link";
import Layout from '../layout/Layout';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Chart, registerables } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

import 'react-circular-progressbar/dist/styles.css';

export default function Report() {

  Chart.register(...registerables);


  const chartData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'Line 1',
        borderColor: '#FF3A29',
        data: [0, 40, 60, 70, 20, 10, 45, 80, 40, 50, 90, 70],
      },
      {
        label: 'Line 2',
        borderColor: '#FFB200',
        data: [0, 50, 10, 40, 10, 40, 60, 90, 10, 20, 80, 60],
      },
      {
        label: 'Line 1',
        borderColor: '#34B53A',
        data: [0, 20, 60, 65, 20, 20, 30, 85, 30, 10, 40, 50],
      },
      {
        label: 'Line 2',
        borderColor: '#4339F2',
        data: [0, 30, 40, 19, 86, 40, 70, 65, 80, 50, 60, 100],
      },
    ],
  };

  const pieData = {
    labels: ['Restless', 'Awake', 'Deep'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#FF3A29', '#FFB200', '#4339F2'],
        borderColor: ['#FF3A29', '#FFB200', '#4339F2'],
        borderWidth: 1,
      },
    ],
  };

  
  return (
    <Layout>

        <div className='text-center'>
          <div className="max-w-3xl mx-auto">

              <img src="/images/page-graphic.svg" className="mx-auto" alt="UI logo"/>

            <h2 className="text-3xl font-semibold text-neutral-800 pt-2">
              Every large design company whether it’s a multi-national branding
            </h2>
            <p className="text-sm pt-4">
              Every large design company whether it’s a multi-national branding corporation or a 
              regular down at heel tatty magazine publisher needs to fill holes in the workforce.
            </p>
            
            <Link href="#" className="bg-primary/90 hover:bg-primary mt-10 transition-all rounded text-white font-medium text-sm inline-block px-7 py-3">
              Start for Free
            </Link>
          </div>
        </div>

        <div className='pt-12 grid grid-cols-4 gap-10'>
          <div className='bg-white rounded-lg p-5 shadow shadow-transparent hover:shadow-xl hover:shadow-neutral-200 transition-all h-full'>
            <div className="flex justify-between">
              <p className='text-neutral-900 text-center text-lg font-medium'>Text</p>
              <button className="bg-transparent transition-all hover:bg-neutral-100 hover:text-neutral-900 rounded-full w-8 h-8 inline-flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>
            

            <div className='px-5 pt-5  pb-3'>

              <div className='rounded-full relative'>
                <div className="absolute top-1/2 text-lg text-white inline-flex items-center justify-center font-semibold left-1/2 w-20 h-20 rounded-full -translate-y-1/2 -translate-x-1/2 bg-[#FF3A29]">
                  67%
                </div>
                <div className="relative z-10 text-sm">
                  <CircularProgressbar
                  value={67}
                  strokeWidth={7}
                  
                  styles={buildStyles({
                    pathColor: '#FF3A29',
                    trailColor: '#FFE5D3',
                  })}
                />
                </div>
              </div>
            
            </div>

            <div className="flex flex-wrap pt-5">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full inline-block bg-[#FF3A29]"></span>
                  <span className="text-sm text-neutral-900 pl-2 inline-block">
                    Restless
                  </span>
                </div>

                <div className="pl-5 flex items-center">
                  <span className="w-3 h-3 rounded-full inline-block bg-[#FFE5D3]"></span>
                  <span className="text-sm text-neutral-900 pl-2 inline-block">
                    Awake
                  </span>
                </div>
              </div>
          </div>

          <div className='bg-white rounded-lg p-5 shadow shadow-transparent hover:shadow-xl hover:shadow-neutral-200 transition-all h-full'>
            <div className="flex justify-between">
              <p className='text-neutral-900 text-center text-lg font-medium'>Text</p>
              <button className="bg-transparent transition-all hover:bg-neutral-100 hover:text-neutral-900 rounded-full w-8 h-8 inline-flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>

            <div className='pt-5 h-60 pb-3'>
              
              <Line data={chartData}
                options={{
                  scales: {
                    x: {
                      display: false,
                    
                    },
                    y: {
                      display: false,
                    },
                  },
                  plugins: {
                    legend: {
                      display: false, // Hide the legend
                    },
                  },
                  maintainAspectRatio: false, 
                  responsive: true,
                  height: 800,
                  

                  elements: {
                    bar: {
                      borderWidth: 0, 
                      borderRadius: 10,
                    },
                  },
                  
                }}
              />
            
            </div>

            <div className="flex flex-wrap pt-5">
                <div className="flex items-center mr-5">
                  <span className="w-3 h-3 rounded-full inline-block bg-[#FF3A29]"></span>
                  <span className="text-sm text-neutral-900 pl-2 inline-block">
                    Restless
                  </span>
                </div>

                <div className="flex items-center mr-5">
                  <span className="w-3 h-3 rounded-full inline-block bg-[#FFB200]"></span>
                  <span className="text-sm text-neutral-900 pl-2 inline-block">
                    Awake
                  </span>
                </div>

                <div className="flex items-center mr-5">
                  <span className="w-3 h-3 rounded-full inline-block bg-[#34B53A]"></span>
                  <span className="text-sm text-neutral-900 pl-2 inline-block">
                    Deep
                  </span>
                </div>

                <div className="flex items-center mr-5">
                  <span className="w-3 h-3 rounded-full inline-block bg-[#4339F2]"></span>
                  <span className="text-sm text-neutral-900 pl-2 inline-block">
                    Time
                  </span>
                </div>
            </div>
          </div>

          <div className='bg-white rounded-lg p-5 shadow shadow-transparent hover:shadow-xl hover:shadow-neutral-200 transition-all h-full'>
            <div className="flex justify-between">
              <p className='text-neutral-900 text-center text-lg font-medium'>Text</p>
              <button className="bg-transparent transition-all hover:bg-neutral-100 hover:text-neutral-900 rounded-full w-8 h-8 inline-flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>

            <div className=' pt-5 h-64 pb-3'>
              
              <Pie data={pieData}
                options={{
                  plugins: {
                    legend: {
                      display: false, // Hide the legend
                    },
                  },
                  maintainAspectRatio: false, 
                  responsive: true,
                  height: 800,
                  
                }}
              />
            
            </div>

            <div className="flex flex-wrap pt-5">
              <div className="flex items-center mr-5">
                <span className="w-3 h-3 rounded-full inline-block bg-[#FF3A29]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Restless
                </span>
              </div>

              <div className="flex items-center mr-5">
                <span className="w-3 h-3 rounded-full inline-block bg-[#FFB200]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Awake
                </span>
              </div>

              <div className="flex items-center mr-5">
                <span className="w-3 h-3 rounded-full inline-block bg-[#4339F2]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Deep
                </span>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-lg p-5 shadow shadow-transparent hover:shadow-xl hover:shadow-neutral-200 transition-all h-full'>
            <div className="flex justify-between">
              <p className='text-neutral-900 text-center text-lg font-medium'>Title</p>
              <button className="bg-transparent transition-all hover:bg-neutral-100 hover:text-neutral-900 rounded-full w-8 h-8 inline-flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>
            <p className="text-sm font-light pt-2">
              Every large design company whether it’s a multi-national branding.
            </p>


            <div className='pt-2'>
              <div className='mt-6'>
                <div className='flex justify-between  font-medium'>
                  <p className='text-gray-800 text-sm'>Instagram</p>
                  <p className={'text-yellow-500 text-xs'}>65,376</p>
                </div>
                <div className={`relative mt-1 h-1.5 w-full rounded-lg bg-yellow-100`}>
                  <div className={`absolute top-0 left-0 bottom-0 w-[55%] rounded-lg bg-yellow-400`}></div>
                </div>
              </div>

              <div className='mt-6'>
                <div className='flex justify-between  font-medium'>
                  <p className='text-gray-800 text-sm'>Facebook</p>
                  <p className={'text-indigo-600 text-xs'}>65,376</p>
                </div>
                <div className={`relative mt-1 h-1.5 w-full rounded-lg bg-indigo-100`}>
                  <div className={`absolute top-0 left-0 bottom-0 w-[55%] rounded-lg bg-indigo-600`}></div>
                </div>
              </div>


              <div className='mt-6'>
                <div className='flex justify-between  font-medium'>
                  <p className='text-gray-800 text-sm'>Twitter</p>
                  <p className={'text-sky-500 text-xs'}>65,376</p>
                </div>
                <div className={`relative mt-1 h-1.5 w-full rounded-lg bg-sky-100`}>
                  <div className={`absolute top-0 left-0 bottom-0 w-[55%] rounded-lg bg-sky-400`}></div>
                </div>
              </div>


              <div className='mt-6'>
                <div className='flex justify-between  font-medium'>
                  <p className='text-gray-800 text-sm'>Bihance</p>
                  <p className={'text-red-500 text-xs'}>65,376</p>
                </div>
                <div className={`relative mt-1 h-1.5 w-full rounded-lg bg-blue-100`}>
                  <div className={`absolute top-0 left-0 bottom-0 w-[55%] rounded-lg bg-red-500`}></div>
                </div>
              </div>
            
            </div>
          </div>
        </div>

    </Layout>
  )
}

