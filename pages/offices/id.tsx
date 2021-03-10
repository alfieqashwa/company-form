import Head from 'next/head';
import Card from 'src/components/OfficeCard';
import CompanyForm from 'src/components/CompanyFrom';
import OfficeForm from 'src/OfficeForm';

import { offices, IOffice } from 'data/offices';
import Link from 'next/link';

export default function Office() {
  return (
    <>
      <Head>
        <title>Office</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-4xl px-8 py-4 mx-auto my-10 space-y-6 border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-md'>
        <section className='relative pb-8 text-gray-500'>
          {/* Main Office */}
          <h1 className='text-2xl font-medium border-b-2'>Alibaba</h1>
          <div className='mt-2'>
            <h3 className='font-semibold'>Address:</h3>
            <h6>969 West Wen Yi Road Yu Hand District Hangzhou 311121</h6>
          </div>
          <div className='mt-2'>
            <h3 className='font-semibold'>Revenue:</h3>
            <h6>999999999</h6>
          </div>
          <div className='mt-2'>
            <h3 className='font-semibold'>Phone No:</h3>
            <h6>(86) 571-8520-2088</h6>
          </div>
          <Link href='/'>
            <a className='absolute px-8 py-2 text-lg text-gray-500 transition duration-150 ease-in-out bg-gray-300 rounded-md hover:bg-gray-400 hover:text-gray-100 focus:outline-none right-4'>
              Back to Overview
            </a>
          </Link>
        </section>
        <section className=''>
          <h1 className='my-4 text-3xl text-gray-600'>Offices</h1>
          <div className='grid grid-cols-2 gap-8'>
            {offices.map((office) => (
              <ul>
                <Card key={office.id} office={office} />
              </ul>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
