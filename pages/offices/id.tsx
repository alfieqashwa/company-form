import Head from 'next/head';
import Card from 'src/components/OfficeCard';
import CompanyForm from 'src/components/CompanyFrom';
import OfficeForm from 'src/OfficeForm';

import { offices, IOffice } from 'data/offices';

export default function Office() {
  return (
    <>
      <Head>
        <title>Office</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-4xl px-8 py-4 mx-auto my-10 space-y-6 border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-md'>
        <section className='flex divide-x-2 divide-gray-300 justify-evenly'>
          {/* Main Office */}
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
