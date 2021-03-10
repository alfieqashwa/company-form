import { useState, SyntheticEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { PrismaClient, Company, Prisma } from '@prisma/client';
import { CompanyCard } from 'src/components/CompanyCard';
import CompanyForm from 'src/components/CompanyForm';
import OfficeForm from 'src/OfficeForm';

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async () => {
  const companies: Company[] = await prisma.company.findMany();
  return {
    props: { initialCompanies: companies },
  };
};

async function saveCompany(company: Prisma.CompanyCreateInput) {
  const response = await fetch('/api/companies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(company),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default function Home({ initialCompanies }) {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies);
  return (
    <>
      <Head>
        <title>Company Form</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='max-w-4xl px-8 py-4 mx-auto my-10 space-y-6 border-2 border-gray-300 divide-y-2 divide-gray-300 rounded-md'>
        <section className='flex justify-around divide-x-2 divide-gray-300'>
          {/* Company Form */}
          <CompanyForm
            onSubmit={async (data, e) => {
              try {
                await saveCompany(data);
                setCompanies([...companies, data]);
                // @ts-ignore
                e.target.reset();
              } catch (err) {
                console.log(err);
              }
            }}
          />
          {/* Office Form */}
          <OfficeForm />
        </section>
        <section className=''>
          <h1 className='my-4 text-3xl text-gray-600'>Companies</h1>
          <Link href='/offices/id'>Temporary Link</Link>
          <ul className='grid grid-cols-2 gap-8'>
            {companies.map((c: Company) => (
              <li key={c.id}>
                <CompanyCard company={c} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
