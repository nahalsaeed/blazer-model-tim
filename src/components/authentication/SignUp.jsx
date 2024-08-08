import React from 'react';

export default function SignUp() {
    return (
        <div className='h-screen flex justify-center items-center bg-white md:bg-gradient-to-r md:from-gray-100 md:to-gray-300'>
            <div className='w-full max-w-xs md:max-w-md lg:max-w-lg p-8 bg-white shadow-lg rounded-2xl'>
                <h2 className='text-3xl font-extrabold text-center text-gray-800 mb-8'>Sign Up</h2>
                <form>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input
                            className='shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                            id='name'
                            type='text'
                            placeholder='Enter your name'
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className='shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                            id='email'
                            type='email'
                            placeholder='Enter your email'
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className='shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                            id='password'
                            type='password'
                            placeholder='Enter your password'
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor='confirm-password'>
                            Confirm Password
                        </label>
                        <input
                            className='shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                            id='confirm-password'
                            type='password'
                            placeholder='Confirm your password'
                        />
                    </div>
                    <div>
                        <button
                            className='w-full bg-black hover:bg-zinc-800 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-opacity-75'
                            type='button'
                        >
                            SIGN UP
                        </button>
                    </div>
                </form>
                <p className='text-center text-gray-600 text-sm mt-8'>
                    Already have an account?{' '}
                    <a href='/auth/login' className='text-black hover:text-blue-500 font-semibold'>
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
