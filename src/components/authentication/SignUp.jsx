"use client"
import React, { useState } from 'react';
import SignUpSchema from '@/schemas/SignupSchema';// Import the schema

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
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
        const result = SignUpSchema.safeParse(formData);

        if (!result.success) {
            // Extract errors and set them in state
            const fieldErrors = result.error.format();
            setErrors({
                name: fieldErrors.name?._errors[0],
                email: fieldErrors.email?._errors[0],
                password: fieldErrors.password?._errors[0],
                confirmPassword: fieldErrors.confirmPassword?._errors[0],
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
                <h2 className='text-3xl font-extrabold text-center text-gray-800 mb-8'>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor='name'>
                            Name
                        </label>
                        <input
                            className={`shadow-sm appearance-none border ${
                                errors.name ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                            id='name'
                            type='text'
                            placeholder='Enter your name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                    </div>
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
                    <div className='mb-6'>
                        <label className='block text-gray-600 text-sm font-medium mb-2' htmlFor='confirm-password'>
                            Confirm Password
                        </label>
                        <input
                            className={`shadow-sm appearance-none border ${
                                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                            } rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent`}
                            id='confirm-password'
                            type='password'
                            placeholder='Confirm your password'
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {errors.confirmPassword && <p className='text-red-500 text-sm mt-1'>{errors.confirmPassword}</p>}
                    </div>
                    <div>
                        <button
                            className='w-full bg-black hover:bg-zinc-800 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-opacity-75'
                            type='submit'
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
