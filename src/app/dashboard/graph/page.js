'use client'

import Layout from '../layout/Layout';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Chart, registerables } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

import 'react-circular-progressbar/dist/styles.css';


export default function Graph() {

  Chart.register(...registerables);

  const barChartData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'Test Data',
        data: [65, 11, 50, 81, 56, 15, 59, 80, 40, 60, 10, 40],
        backgroundColor: '#FFB200',
        borderColor: '#FFB200',
        borderWidth: 1,
        borderRadius: 15,
      },
    ],
  };

  const lineChartData = {
    labels: ['01', '02', '03', '04', '05', '06'],
    datasets: [
      {
        label: 'Line 1',
        fill: true,
        borderColor: '#4339F2',
        backgroundColor: '#DAD7FE',
        data: [0, 20, 30, 50, 80, 100],
      }
      
    ],
  };


  const multiLineChartData = {
    labels: ['01', '02', '03', '04', '05', '06'],
    datasets: [
      {
        label: 'Restless',
        borderColor: '#FF3A29',
        data: [50, 30, 15, 75, 80, 40],
      },
      {
        label: 'Awake',
        borderColor: '#FFB200',
        data: [50, 15, 40, 10, 60, 60],
      },
      {
        label: 'Time',
        borderColor: '#4339F2',
        data: [50, 20, 80, 60, 10, 50],
      },
      {
        label: 'Deep',
        borderColor: '#34B53A',
        data: [50, 60, 30, 50, 20, 60],
      }
      
    ],
  };

  const stackedBarData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'Instagram',
        data: [30, 10, 20, 27, 17, 20, 50, 20, 15, 10, 20, 20],
        backgroundColor: '#4339F2',
        borderColor: '#4339F2',
        borderWidth: 1,
      },
      {
        label: 'Facebook',
        data: [30, 16, 20, 25, 26, 15, 35, 5, 20, 30, 10, 20],
        backgroundColor: '#34B53A',
        borderColor: '#34B53A',
        borderWidth: 1,
      },
      {
        label: 'Twitter',
        data: [12, 21, 20, 40, 20, 30, 20, 20, 40, 30, 10, 20],
        backgroundColor: '#FFB200',
        borderColor: '#FFB200',
        borderWidth: 1,
      },
    ],
  }

  


  return (
    <Layout>
        <h1 className='text-3xl font-semibold capitalize text-gray-900'>Be single minded</h1>
        <p className=''>
          Every large design company whether it’s a multi-national branding
        </p>

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


            <div className="flex flex-wrap py-3">
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

            <div className="flex flex-wrap pt-5">
              <div className="flex items-center mr-5">
                <span className="w-3 h-3 rounded-full inline-block bg-[#FFB200]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Restless
                </span>
              </div>
            </div>

            <div className='pt-5 h-64'>
              <Bar data={barChartData}
                options={{
                  scales: {
                    x: {
                      display: false,
                      grid: {
                        display: false,
                      },
                      barThickness: 30,
                    },
                    y: {
                      display: false,
                      beginAtZero: true,
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
                  

                  // elements: {
                  //   bar: {
                  //     borderWidth: 0, 
                  //     borderRadius: 10,
                  //   },
                  // },
                  
                }}
              />
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


            <div className="flex flex-wrap pt-5">
              <div className="flex items-center mr-5">
                <span className="w-3 h-3 rounded-full inline-block bg-[#4339F2]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Restless
                </span>
              </div>

              <div className="flex items-center mr-5">
                <span className="w-3 h-3 rounded-full inline-block bg-[#DAD7FE]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Awake
                </span>
              </div>
            </div>


            <div className=' pt-5 h-64'>
              
              <Line data={lineChartData}
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
                  
                }}
              />
            
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

            <div className=' pt-2 h-60 '>
              
              <Line data={multiLineChartData}
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
                      display: false, 
                    },
                  },
                  maintainAspectRatio: false, 
                  responsive: true,
                  height: 800,
                  
                }}
              />
            
            </div>

            
          </div>

          <div className='bg-white col-span-2 rounded-lg p-5 shadow shadow-transparent hover:shadow-xl hover:shadow-neutral-200 transition-all h-full'>
            <div className="flex justify-between">
              <p className='text-neutral-900 text-center text-lg font-medium'>Text</p>
              <button className="bg-transparent transition-all hover:bg-neutral-100 hover:text-neutral-900 rounded-full w-8 h-8 inline-flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>


            <div className="flex flex-wrap py-3">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full inline-block bg-[#34B53A]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Instagram
                </span>
              </div>

              <div className="pl-5 flex items-center">
                <span className="w-3 h-3 rounded-full inline-block bg-[#4339F2]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Facebook
                </span>
              </div>

              <div className="pl-5 flex items-center">
                <span className="w-3 h-3 rounded-full inline-block bg-[#FFB200]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Twitter
                </span>
              </div>

            </div>

            <div className='pt-5 w-full'>
              <Bar 
              data={stackedBarData} 
              options={{
                scales: {
                  x: {
                    stacked: true,
                    barPercentage: 1.0,
                    categoryPercentage: 1.0,
                  },
                  y: {
                    stacked: true,
                    beginAtZero: true,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                    position: 'top',
                  },
                },
                elements: {
                    bar: {
                      borderWidth: 0, 
                      borderRadius: 10,
                    },
                  },
              }} />
            </div>

          </div>


          <div className='bg-white col-span-2 rounded-lg p-5 shadow shadow-transparent hover:shadow-xl hover:shadow-neutral-200 transition-all h-full'>
            <div className="flex justify-between">
              <p className='text-neutral-900 text-center text-lg font-medium'>Text</p>
              <button className="bg-transparent transition-all hover:bg-neutral-100 hover:text-neutral-900 rounded-full w-8 h-8 inline-flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>


            <div className="flex flex-wrap py-3">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full inline-block bg-[#34B53A]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Instagram
                </span>
              </div>

              <div className="pl-5 flex items-center">
                <span className="w-3 h-3 rounded-full inline-block bg-[#4339F2]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Facebook
                </span>
              </div>

              <div className="pl-5 flex items-center">
                <span className="w-3 h-3 rounded-full inline-block bg-[#FFB200]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Twitter
                </span>
              </div>

              <div className="pl-5 flex items-center">
                <span className="w-3 h-3 rounded-full inline-block bg-[#00aeff]"></span>
                <span className="text-sm text-neutral-900 pl-2 inline-block">
                  Google
                </span>
              </div>

            </div>

            
            <div className='grid grid-cols-4 py-10'>
              <div className='px-3 pt-5 pb-3'>
                <div className='rounded-full relative'>
                  <div className="absolute top-1 left-1 right-1 bottom-1 text-lg text-neutral-900 inline-flex items-center justify-center font-semibold rounded-full bg-[#caf7cd]">
                    67%
                  </div>
                  <div className="relative z-10 text-sm">
                    <CircularProgressbar
                      value={67}
                      strokeWidth={7}
                      
                      styles={buildStyles({
                        pathColor: '#34B53A',
                        trailColor: '#caf7cd',
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className='px-3 pt-5 pb-3'>
                <div className='rounded-full relative'>
                  <div className="absolute top-1 left-1 right-1 bottom-1 text-lg text-neutral-900 inline-flex items-center justify-center font-semibold rounded-full bg-[#d1ceff]">
                    67%
                  </div>
                  <div className="relative z-10 text-sm">
                    <CircularProgressbar
                      value={67}
                      strokeWidth={7}
                      
                      styles={buildStyles({
                        pathColor: '#4339F2',
                        trailColor: '#d1ceff',
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className='px-3 pt-5 pb-3'>
                <div className='rounded-full relative'>
                  <div className="absolute top-1 left-1 right-1 bottom-1 text-lg text-neutral-900 inline-flex items-center justify-center font-semibold rounded-full bg-[#f9ecce]">
                    67%
                  </div>
                  <div className="relative z-10 text-sm">
                    <CircularProgressbar
                      value={67}
                      strokeWidth={7}
                      
                      styles={buildStyles({
                        pathColor: '#FFB200',
                        trailColor: '#f9ecce',
                      })}
                    />
                  </div>
                </div>
              </div>

              <div className='px-3 pt-5 pb-3'>
                <div className='rounded-full relative'>
                  <div className="absolute top-1 left-1 right-1 bottom-1 text-lg text-neutral-900 inline-flex items-center justify-center font-semibold rounded-full bg-[#d3f1ff]">
                    67%
                  </div>
                  <div className="relative z-10 text-sm">
                    <CircularProgressbar
                      value={67}
                      strokeWidth={7}
                      styles={buildStyles({
                        pathColor: '#00aeff',
                        trailColor: '#d3f1ff',
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className='text-sm pt-4'>
              Every large design company whether it’s a multi-national branding corporation or a regular down at heel tatty magazine publisher needs to fill holes in the workforce.
            </p>
              
          </div>
          
        </div>
    </Layout>
  )
}

