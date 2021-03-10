import { Company } from '@prisma/client';
import { useForm } from 'react-hook-form';
// import { areaNumber, ICode } from 'data/countriesDialCode';

const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return <p className='mt-1 ml-2 text-xs text-red-400'>{errorMessage}</p>;
};

interface AddCompanyFormProps {
  onSubmit: Company | any;
}

export default function CompanyForm({ onSubmit }: AddCompanyFormProps) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form className='mr-10' onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-2xl text-gray-600'>Create Company</h1>
      <div className='py-2 space-y-2'>
        <div>
          <label htmlFor='Name' className='block'>
            Name:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            name='name'
            type='text'
            placeholder='name'
            ref={register({ required: true })}
          />
          {errors.name && <FormError errorMessage='Name is required' />}
        </div>
        <div>
          <label htmlFor='Address' className='block'>
            Address:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            name='address'
            type='text'
            placeholder='address'
            ref={register({ required: true })}
          />
          {errors.address && <FormError errorMessage='Address is required' />}
        </div>
        <div>
          <label htmlFor='Revenue' className='block'>
            Revenue:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            name='revenue'
            type='number'
            placeholder='revenue'
            ref={register({ required: true })}
          />
          {errors.revenue && <FormError errorMessage='Revenue is required' />}
        </div>
        <div>
          <label htmlFor='Phone' className='block'>
            Phone No:
          </label>
          <div className='flex space-x-2'>
            <input
              className='w-2/6 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none '
              name='code'
              type='text'
              placeholder='code'
              ref={register({ required: true })}
            />
            {/* <select
              className='w-2/6 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none '
              name='code'
              placeholder='code'
              ref={register({ required: true })}>
              {areaNumber.map((area: ICode) => (
                <option value={area.dial_code}>{area.dial_code}</option>
              ))}
            </select> */}
            <input
              className='w-5/6 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
              type='number'
              name='phone'
              placeholder='number'
              ref={register({ required: true })}
            />
          </div>
          {errors.code && <FormError errorMessage='Code number is required' />}
          {errors.phone && (
            <FormError errorMessage='Phone number is required' />
          )}
        </div>
      </div>
      <button
        className='w-full py-2 my-4 text-lg text-center text-gray-700 bg-gray-300 rounded-lg focus:outline-none'
        type='submit'>
        Create
      </button>
    </form>
  );
}
