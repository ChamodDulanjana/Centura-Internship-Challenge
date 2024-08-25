import React, {FormEvent, useState} from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [uId, setUId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        let userData = {
            uId : uId,
            name: name,
            email: email,
            phone: phone,
        }
    }



    return (
        <div className="flex justify-center items-center w-full flex-col">
            <h1 className="font-bold text-xl mt-10 mb-10">Create User</h1>
            <form
                onSubmit={(e) => e.preventDefault()}

            >
                <input type="text" placeholder="UserId" value={uId} onChange={(e) => setUId(e.target.value)} />
                       className="border border-gray-200 rounded-md w-full px-2 py-1 mb-5"/>
                <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
                       className="border border-gray-200 rounded-md w-full px-2 py-1 mb-5"/>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                       className="border border-gray-200 rounded-md w-full px-2 py-1 mb-5"/>
                <input type="text" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
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