'use client'

import { performLogin } from '@/app/actions';
import { useState } from 'react';

import { useAuth } from '@/app/hooks/useAuth';
import { useRouter } from 'next/navigation';

// login form is made client component just like that. No special reason. Registration form k server component kore server action diye korlo. R login form k client component baniye client theke server e request korlo. 2 ta process e dekhiye rakhlo r ki.
const LoginForm = () => {
    const [error, setError] = useState("");

    const { setAuth } = useAuth();
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const found = await performLogin(formData)

            if (found) {
                // if user is found, set the auth state and redirect to the home page.
                setAuth(found);
                router.push('/');
            } else {
                setError('Please provide a valid login credential');
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <div className="my-2 text-red-500">
                {error}
            </div>
            <form className="login-form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button
                    type="submit"
                    className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                >
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;
