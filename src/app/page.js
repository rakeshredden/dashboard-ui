import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className='text-center flex items-center justify-center h-screen'>
        <div>
            <h1 className='text-5xl font-semibold text-neutral-800'>Welcome to Dashboard</h1>

            <p className='pt-4 text-sm max-w-2xl'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d
            </p>

            <Link className='bg-primary text-white rounded px-10 py-2 mt-10 inline-block font-medium' href="/dashboard">Visit</Link>
        </div>
    </div>
  );
};

export default HomePage;