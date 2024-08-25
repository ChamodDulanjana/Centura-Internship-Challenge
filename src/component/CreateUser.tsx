import React from 'react';
import axios from 'axios';

const CreateUser = () => {

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();


    }



    return (
        <div className="flex justify-center items-center w-full flex-col">
            <h1 className="font-bold text-xl mt-10 mb-10">Create User</h1>
            <form
                onSubmit={(e) => e.preventDefault()}

            >
                <input type="text" placeholder="UserId"
                       className="border border-gray-200 rounded-md w-full px-2 py-1 mb-5"/>
                <input type="text" placeholder="Username"
                       className="border border-gray-200 rounded-md w-full px-2 py-1 mb-5"/>
                <input type="email" placeholder="email"
                       className="border border-gray-200 rounded-md w-full px-2 py-1 mb-5"/>
                <input type="text" placeholder="phone"
                       className="border border-gray-200 rounded-md w-full px-2 py-1 mb-5"/>
                <button type="submit"
                        className="border border-gray-200 rounded-md w-full px-2 py-1 mb-5 bg-green-400"
                        onClick={(e) => handleSubmit(e)}
                >Create User</button>
            </form>
        </div>
    );
};

export default CreateUser;