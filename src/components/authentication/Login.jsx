"use client"
import React, { useState } from 'react';
import LoginSchema from '@/schemas/LoginSchema'; // Import the schema

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    // Handle form input change
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data using the Zod schema
        const result = LoginSchema.safeParse(formData);

        if (!result.success) {
            // Extract errors and set them in state
            const fieldErrors = result.error.format();
            setErrors({
                email: fieldErrors.email?._errors[0],
                password: fieldErrors.password?._errors[0],
            });
        } else {
            setErrors({});
            // Handle successful form submission (e.g., send data to API)
            console.log('Form submitted successfully:', formData);
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-white md:bg-gradient-to-r md:from-gray-100 md:to-gray-300'>
            <div className='w-full max-w-xs md:max-w-md lg:max-w-lg p-8 bg-white shadow-lg rounded-2xl'>
                <h2 className='text-3xl font-extrabold text-center text-gray-800 mb-8'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor='email'>
                            Email
                        </label>
                        <input
                            className={`shadow-sm appearance-none border ${
                                errors.email ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                            id='email'
                            type='email'
                            placeholder='Enter your email'
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                    </div>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor='password'>
                            Password
                        </label>
                        <input
                            className={`shadow-sm appearance-none border ${
                                errors.password ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                            id='password'
                            type='password'
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
                    </div>
                    <div className='flex items-center justify-between mb-6'>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                id='remember-me'
                                className='h-4 w-4 text-black focus:ring-black border-gray-300 rounded'
                            />
                            <label htmlFor='remember-me' className='ml-2 text-gray-600 text-sm'>
                                Remember Me
                            </label>
                        </div>
                        <a href='#' className='text-sm text-blue-500 hover:text-blue-700'>
                            Forgot Password?
                        </a>
                    </div>
                    <div>
                        <button
                            className='w-full bg-black hover:bg-zinc-800 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-opacity-75'
                            type='submit'
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
                <p className='text-center text-gray-600 text-sm mt-8'>
                    Don’t have an account?{' '}
                    <a href='/auth/signup' className='text-black hover:text-blue-500 font-semibold'>
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
}
