import { useForm } from 'react-hook-form';

const FormError = ({ errorMessage }: { errorMessage: string }) => {
  return <p className='mt-1 ml-2 text-xs text-red-400'>{errorMessage}</p>;
};
interface AddCompanyFormProps {
  onSubmit: any;
}

export default function CompanyForm(props: AddCompanyFormProps) {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form className='mr-10' onSubmit={handleSubmit(props.onSubmit)}>
      <h1 className='text-2xl text-gray-600'>Create Company</h1>
      <div className='py-2 space-y-2'>
        <div>
          <label htmlFor='Name' className='block'>
            Name:
          </label>
          <input
            className='w-full px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
            type='text'
            name='name'
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
            type='text'
            name='address'
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
            type='text'
            name='revenue'
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
              className='w-1/6 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none '
              type='text'
              name='code'
              placeholder='code'
              ref={register({ required: true })}
            />
            <input
              className='w-5/6 px-2 text-gray-700 placeholder-gray-300 border-2 border-gray-300 rounded-md outline-none'
              type='text'
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
        className='w-full py-2 my-4 text-lg text-center text-gray-700 bg-gray-300 rounded-lg'
        type='submit'>
        Create
      </button>
    </form>
  );
}
