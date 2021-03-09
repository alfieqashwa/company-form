import Head from 'next/head';
import Card from 'src/components/Card';
import CompanyForm from 'src/components/CompanyFrom';
import OfficeForm from 'src/OfficeForm';

import { companies, ICompany } from 'data/companies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Company Form</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-4xl px-8 py-4 mx-auto my-10 space-y-6 border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-md'>
        <section className='flex divide-x-2 divide-gray-300 justify-evenly'>
          {/* Company Form */}
          <CompanyForm />
          {/* Office Form */}
          <OfficeForm />
        </section>
        <section className=''>
          <h1 className='my-4 text-3xl text-gray-600'>Companies</h1>
          <div className='grid grid-cols-2 border-2 border-gray-300'>
            {companies.map((company) => (
              <ul>
                <Card key={company.id} company={company} />
              </ul>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
