

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


function CreateUser() {
    const queryClient = useQueryClient(); 
    const mutation = useMutation({
        mutationKey: ["users"],
        mutationFn: (variables) => {
            return axios.post("http://localhost:3000/users", variables)
        },
        onSuccess: (data, variables, context) => {
            console.log(data, variables, context);
            queryClient.invalidateQueries(['users'])
          

            
        },
        onMutate: (variables) => {
            return `Hello ${variables.name}. How are you ?`;
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
   

    const formData = new FormData(e.target)
    const newData = Object.fromEntries(formData)
      
        mutation.mutate({
            ...newData,
            id: crypto.randomUUID(),
        })
        
    }

    return (
        <div >
        <div className="py-4 px-6 border">
            <h1 className="text-xl lg:text-2xl font-bold mb-5">Create a New User</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                       username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className=" block mx-auto rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium round text-sm w-full py-2 focus:outline-none "
                >
                    Save User
                </button>
            </form>
        </div>
    </div>
    );
}

export default CreateUser;










