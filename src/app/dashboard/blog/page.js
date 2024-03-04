import Link from 'next/link';
import Layout from '../layout/Layout';



export default function Blog() {

  return (
    <Layout>
        <h1 className='text-3xl font-semibold capitalize text-gray-900'>Blog</h1>

        <div className='grid grid-cols-4 gap-6 pt-8'>

          <div className='space-y-6'>
            <div className='bg-white rounded p-4'>
                <div className='pb-4'>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-violet-100'>Deep</span>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
                </div>

                

                <h2 className='text-2xl text-gray-800 font-medium pt-4'>Cologne</h2>
                <p className='pt-3'>
                  When you enter into any new area of science, you almost always find.
                </p>

                <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>

            <div className='bg-white rounded p-4'>
              <div className='pb-4'>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-yellow-100'>Taipei</span>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Glasgow</span>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-blue-100'>Belgrade</span>
              </div>

              <div className=''>
                <img className='rounded' src='https://img.freepik.com/free-photo/beautiful-shot-small-lake-with-wooden-rowboat-focus-breathtaking-clouds-sky_181624-2490.jpg' alt=''/>
              </div>

              <h2 className='text-2xl text-gray-800 font-medium pt-4'>Melbourne</h2>
              <p className='pt-3'>
                When you enter into any new area of science, you almost always find.
              </p>

              <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>

            <div className='bg-white rounded p-4'>
                <div className='pb-4'>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-violet-100'>Designer</span>
                </div>

                <h2 className='text-2xl text-gray-800 font-medium pt-4'>Kuala Lumpur</h2>
                <p className='pt-3'>
                  When you enter into any new area of science, you almost always find.
                </p>

                <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>
          </div>

          <div className='space-y-6'>

            <div className='bg-white rounded p-4'>
                <div className='pb-4'>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-green-100'>Lost</span>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
                </div>

                

                <h2 className='text-2xl text-gray-800 font-medium pt-4'>Bengaluru</h2>
                <p className='pt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>

                <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>

            <div  className=' rounded p-4 text-white bg-black bg-cover bg-center bg-opacity-50' style={{backgroundImage: 'url(https://images.pexels.com/photos/753994/pexels-photo-753994.jpeg)'}}>
                <div className='pb-4'>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-violet-100'>Deep</span>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
                </div>

                <div className='h-36'></div>

                <h2 className='text-2xl text-white font-medium pt-4'>Cologne</h2>
                <p className='pt-3'>
                  When you enter into any new area of science, you almost always find.
                </p>

                <Link href="#" className='text-white text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>


            <div className='bg-white rounded p-4'>
              <div className='pb-4'>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-violet-100'>Deep</span>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
              </div>


              <h2 className='text-2xl text-gray-800 font-medium pt-4'>Cologne</h2>
              <p className='pt-3'>
                When you enter into any new area of science, you almost always find.
              </p>

              <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>

          </div>

          <div className='space-y-6'>
            

            <div className='bg-white rounded p-4'>
              <div className='pb-4'>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-yellow-100'>Taipei</span>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Glasgow</span>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-blue-100'>Belgrade</span>
              </div>

              <div className=''>
                <img className='rounded' src='https://images.pexels.com/photos/3260921/pexels-photo-3260921.jpeg' alt=''/>
              </div>

              <h2 className='text-2xl text-gray-800 font-medium pt-4'>Melbourne</h2>
              <p className='pt-3'>
                When you enter into any new area of science, you almost always find.
              </p>

              <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>

            <div className='bg-white rounded p-4'>
                <div className='pb-4'>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-violet-100'>Deep</span>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
                </div>

                

                <h2 className='text-2xl text-gray-800 font-medium pt-4'>Cologne</h2>
                <p className='pt-3'>
                  When you enter into any new area of science, you almost always find.
                </p>

                <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>

            <div className='rounded p-4 text-white bg-black bg-cover bg-center bg-opacity-50' style={{backgroundImage: 'url(https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg)'}}>
                <div className='pb-4'>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-violet-100'>Deep</span>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
                </div>

                {/* <div className='h-20'></div> */}

                <h2 className='text-2xl text-white font-medium pt-4'>Cologne</h2>
                <p className='pt-3'>
                  When you enter into any new area of science, you almost always find.
                </p>

                <Link href="#" className='text-white text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>
          </div>

          <div className='space-y-6'>

            <div className='bg-white rounded p-4'>
                <div className='pb-4'>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-green-100'>Lost</span>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
                </div>

                

                <h2 className='text-2xl text-gray-800 font-medium pt-4'>Bengaluru</h2>
                <p className='pt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>

                <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>

            <div className='rounded p-4 text-white bg-black bg-cover bg-center bg-opacity-50' style={{backgroundImage: 'url(https://images.pexels.com/photos/3283907/pexels-photo-3283907.jpeg)'}}>
                <div className='pb-4'>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-violet-100'>Deep</span>
                    <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
                </div>

                <div className='h-36'></div>

                <h2 className='text-2xl text-white font-medium pt-4'>Cologne</h2>
                <p className='pt-3'>
                  When you enter into any new area of science, you almost always find.
                </p>

                <Link href="#" className='text-white text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>


            <div className='bg-white rounded p-4'>
              <div className='pb-4'>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-violet-100'>Deep</span>
                  <span className='text-xs font-medium text-gray-800 px-3 py-1 rounded inline-block mt-1 mr-1 bg-orange-100'>Minimal</span>
              </div>


              <h2 className='text-2xl text-gray-800 font-medium pt-4'>Cologne</h2>
              <p className='pt-3'>
                When you enter into any new area of science, you almost always find.
              </p>

              <Link href="#" className='text-primary text-sm font-medium mt-7 inline-block'>Detalies</Link>  
            </div>

          </div>

        </div>
    </Layout>
  )
}

