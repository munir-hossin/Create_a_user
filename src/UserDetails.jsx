function UserDetails({ user }) {
  if (!user) {
    return <h2 className="text-2xl mt-3 font-bold border-b pb-5 pt-2 mb-4">User Details</h2>
  }

  return (
    <div >
      <h2 className="text-2xl font-bold mt-3 border-b pb-5 pt-2 ">User Details</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetails;














// function UserDetails({ user }) {
//   // ইউজার সিলেক্ট না করা থাকলে মেসেজ দেখাবে
//   if (!user) {
//     return <div className="text-gray-500">Select a user to see details.</div>;
//   }

//   return (
//     <div className="w-full p-4 border">
//       <h2 className="text-3xl font-bold mb-4">User Details</h2>
//       <hr className="mb-4" />
//       <p className="text-xl"><strong>Name:</strong> {user.name}</p>
//       <p className="text-xl"><strong>Username:</strong> {user.username}</p>
//       <p className="text-xl"><strong>Email:</strong> {user.email}</p>
//     </div>
//   );
// }

// export default UserDetails;

























// import { useParams } from 'react-router-dom';
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// // Fetching user details based on ID
// const getData = async ({ queryKey }) => {
//   const response = await axios.get(`http://localhost:3000/users/${queryKey[1]}`);
//   return response.data;
// };

// function UserDetails() {
//   const { id } = useParams();
  
//   const { data: user, error, isFetching } = useQuery({
//     queryKey: ["users", id],
//     queryFn: getData,
//   });

//   if (isFetching) return <div>Data is loading .........</div>;
//   if (error) return <div>Something went wrong: {error.message}</div>;

//   // if (isFetching) return <div className="w-6/12">Data is loading .........</div>;
//   // if (error) return <div className="w-6/12">Something went wrong: {error.message}</div>;


//   return (
//     <div className="w-3/12">
//       <div className="p-2 border">
//         <h2 className="text-2xl font-semibold mb-5">User Details</h2>
//         <hr />
//         <h2>Name: {user.name}</h2>
//         <p>Username: {user.username}</p>
//         <p>Email: {user.email}</p>
//       </div>
//     </div>
//   );
// }

// export default UserDetails;










// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";


// function CreateUser() {
//     const queryClient = useQueryClient(); 
//     const mutation = useMutation({
//         mutationKey: ["users"],
//         mutationFn: (variables) => {
//             return axios.post("http://localhost:3000/users/", variables)
//         },
//         onSuccess: (data, variables, context) => {
//             console.log(data, variables, context);
//             queryClient.invalidateQueries(['users'])
          

            
//         },
//         onMutate: (variables) => {
//             return `Hello ${variables.name}. How are you ?`;
//         }
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
   

//     const formData = new FormData(e.target)
//     const newData = Object.fromEntries(formData)
      
//         mutation.mutate({
//             ...newData,
//             id: crypto.randomUUID(),
//         })
        
//     }

//     return (
//         <div >
//         <div className="py-4 px-6 border">
//             <h1 className="text-xl lg:text-2xl font-bold mb-5">Create a New User</h1>

//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                         Full Name
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="John"
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                        username
//                     </label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="John"
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         placeholder="John"
//                         required
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className=" block mx-auto rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium round text-sm w-full py-2 focus:outline-none "
//                 >
//                     Save User
//                 </button>
//             </form>
//         </div>
//     </div>
//     );
// }

// export default CreateUser;
























// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const getData = async ({ queryKey }) => {
//     const response = await axios.get(`http://localhost:3000/users/${queryKey[1]}`);
//     return response.data;
// };

// function UserDetails({ id }) {
//     const { 
//         data: user, 
//         error, 
//         isFetching 
//     } = useQuery({
//         queryKey: ["users", id],
//         queryFn: getData,
//     });

//     if (isFetching) return <div className="w-6/12">Data is loading .........</div>;
//     if (error) return <div className="w-6/12">Something went wrong: {error.message}</div>;

//     return (
//         <div className="w-3/12">
//             <div className="p-2 border">
//                 <h2 className="text-2xl font-semibold mb-5">User Details</h2>
//                 <hr />
//                 <h2>{user.name}</h2>
//                 <p>{user.username}</p>
//                 <p>{user.email}</p>
//             </div>
//         </div>
//     );
// }

// export default UserDetails;












