import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import UserItem from "../UserItem";
import axios from "axios";

// Fetching data from the API
const getData = async () => {
  const response = await axios.get('http://localhost:3000/users');
  return response.data;
}

function UserList({ onUserSelect }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const itemsPerPage = 6;

  const { data: users, error, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: getData,
  });

  if (isFetching) return <div>Data is loading .........</div>;
  if (error) return <div>Something went wrong: {error.message}</div>;

  // Calculate total pages
  const totalPages = Math.ceil(users.length / itemsPerPage);

  // Slice users for the current page
  const currentUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return ( 
    <div className="">
      <h2 className="text-2xl font-bold ml-5 mb-5">All Users</h2>

      <div className="grid grid-cols-12">
        {currentUsers.map(user => (
          <div key={user.id} className="p-2 col-span-6 border rounded m-2">
            <UserItem user={user} onUserSelect={onUserSelect} />
          </div>
        ))}
      </div>

      <div className="flex justify-center py-3">
   
        {currentPage > 1 && (
          <button 
            onClick={() => setSearchParams({ page: currentPage - 1 })} 
            className="bg-green-600 hover:bg-green-700  py-1 px-4 mx-1"
          >
            Prev
          </button>
        )}

      
        {currentPage < totalPages && (
          <button 
            onClick={() => setSearchParams({ page: currentPage + 1 })} 
            className="bg-green-600 hover:bg-green-700  py-1 px-4 mx-1"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default UserList;

























// import { useQuery } from "@tanstack/react-query";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import UserItem from "../UserItem";
// import axios from "axios";

// // Fetching data from the API
// const getData = async () => {
//   const response = await axios.get('http://localhost:3000/users');
//   return response.data;
// }

// function UserList() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const currentPage = parseInt(searchParams.get('page')) || 1;
//   const itemsPerPage = 6;

//   const { data: users, error, isFetching } = useQuery({
//     queryKey: ["users"],
//     queryFn: getData,
//   });

//   if (isFetching) return <div>Data is loading .........</div>;
//   if (error) return <div>Something went wrong: {error.message}</div>;

//   // Calculate total pages
//   const totalPages = Math.ceil(users.length / itemsPerPage);

//   // Slice users for the current page
//   const currentUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   // Navigation button handlers
//   const handlePageChange = (newPage) => {
//     navigate(`/users?page=${newPage}`);
//   };

//   return (
//     <div className="w-6/12">
//       <div className="p-2 border">
//         <h2 className="text-2xl font-semibold mb-5">All Users</h2>
//         <div className="flex flex-wrap">
//           {currentUsers.map(user => (
//             <div key={user.id} className="p-2 border m-2">
//               <UserItem user={user} />
//               {/* <button 
//                 onClick={() => navigate(`/user/${user.id}`)} 
//                 className="bg-blue-500 text-white px-3 py-1 mt-2"
//               >
//                 View Details
//               </button> */}
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center py-3">
//           <button 
//             onClick={() => handlePageChange(currentPage - 1)} 
//             disabled={currentPage === 1}
//             className="bg-green-600 text-white py-1 px-4 mx-1"
//           >
//             Prev
//           </button>
//           <button 
//             onClick={() => handlePageChange(currentPage + 1)} 
//             disabled={currentPage >= totalPages}
//             className="bg-green-600 text-white py-1 px-4 mx-1"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserList;























// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import UserItem from "../UserItem";
// import axios from "axios";

// // Fetching data from the API

// const getData = async () => {

//     const response = await axios.get('http://localhost:3000/users');
//     return response.data;
// }

// function UserList() {
//     // State for current page
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 6; // Items per page

//     const { 
//         data: users, 
//         error, 
//         isFetching 
//     } = useQuery({
//         queryKey: ["users"],
//         queryFn: getData,
//     });    

//     if(isFetching) return <div className="w-6/12">Data is loading .........</div>;
//     if(error) return <div className="w-6/12">Something error {error.message}</div>; 

//     // Calculate total pages
//     const totalPages = users ? Math.ceil(users.length / itemsPerPage) : 0;

//     // Slice users for the current page
//     const currentUsers = users ? users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

//     // Navigation button handlers
//     const handlePrev = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     return (
//         <div className="w-6/12">
//             <div className="p-2 border">
//                 <h2 className="text-2xl font-semibold mb-5">All Users</h2>
//                 <div className="flex flex-wrap">
//                     {currentUsers && currentUsers.map(user => <UserItem key={user.id} user={user} />)}
//                 </div>
//                 <div className="flex justify-center py-3">
//                     <button 
//                         className={`py-1 px-4 ${currentPage === 1 ? 'bg-gray-400 hidden' : 'bg-green-600'} text-white mx-1`} 
//                         onClick={handlePrev} 
//                         disabled={currentPage === 1}
//                     >
//                         Prev
//                     </button>
//                     <button 
//                         className={`py-1 px-4 ${currentPage === totalPages ? 'bg-gray-400 hidden' : 'bg-green-600'} text-white mx-1`} 
//                         onClick={handleNext} 
//                         disabled={currentPage === totalPages}
//                     >
//                         Next
//                     </button>
//                 </div>
//                 {/* <div className="text-center mt-2">
//                     Page {currentPage} of {totalPages}
//                 </div> */}
//             </div>
//         </div>
//     );
// }

// export default UserList;
































// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import UserItem from "../UserItem";

// // Fetch data with pagination
// const getData = async ({ queryKey }) => {
//   const [_, page, perPage] = queryKey;
//   const response = await axios.get(`http://localhost:3000/users?_page=${page}&_per_page=${perPage}`);
//   return response.data;
// };

// function UserList({ onUserSelect }) {
//   const itemsPerPage = 6;  // Items per page (6 users per page)
//   const [currentPage, setCurrentPage] = useState(1);  // Manage current page
//   const [totalPages, setTotalPages] = useState(5);  // Set the initial total pages to the response value

//   // Fetch data using React Query
//   const { data, error, isFetching } = useQuery({
//     queryKey: ["users", currentPage, itemsPerPage],  // Dynamically update query key when page changes
//     queryFn: getData,
//     keepPreviousData: true,  // This keeps the previous data while the new page is loading
//   });

//   // Handle loading state
//   if (isFetching) return <div className="w-6/12">Data is loading...</div>;

//   // Handle error state
//   if (error) return <div className="w-6/12">Something went wrong: {error.message}</div>;

//   const users = data?.data || [];
//   const paginationInfo = data?.pagination || {}; // Extract pagination info
//   const { prev, next, pages } = paginationInfo;

//   // Handle previous button click
//   const handlePrev = () => {
//     if (prev) {
//       setCurrentPage(prev);  // Set to the previous page number
//     }
//   };

//   // Handle next button click
//   const handleNext = () => {
//     if (next) {
//       setCurrentPage(next);  // Set to the next page number
//     }
//   };

//   return (
//     <div className="w-6/12">
//       <div className="p-2 border">
//         <h2 className="text-2xl font-semibold mb-5">All Users</h2>
//         <div className="flex flex-wrap">
//           {users.map((user) => (
//             <div key={user.id} onClick={() => onUserSelect(user.id)} className="cursor-pointer">
//               <UserItem user={user} />
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center py-3">
//           {/* Prev Button */}
//           <button
//             className={`py-1 px-4 ${prev ? 'bg-green-600' : 'bg-gray-400'} text-white mx-1`} 
//             onClick={handlePrev} 
//             disabled={!prev}  // Disable if there's no previous page
//           >
//             Prev
//           </button>
//           {/* Next Button */}
//           <button
//             className={`py-1 px-4 ${next ? 'bg-green-600' : 'bg-gray-400'} text-white mx-1`} 
//             onClick={handleNext} 
//             disabled={!next}  // Disable if there's no next page
//           >
//             Next
//           </button>
//         </div>
//         <div className="text-center mt-2">
//           Page {currentPage} of {pages}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserList;













// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// // import UserItem from "./UserItem";
// import UserItem from "../UserItem"

// const getData = async ({ queryKey }) => {
//   const [_, page, perPage] = queryKey;
//   const response = await axios.get(`http://localhost:3000/users?_page=${page}&_per_page=${perPage}`);
//   return response.data;
// };

// function UserList({ onUserSelect }) {
//   const itemsPerPage = 6;
//   const { data, error, isFetching } = useQuery({
//     queryKey: ["users", 1, itemsPerPage],
//     queryFn: getData,
//   });

//   if (isFetching) return <div className="w-6/12">Data is loading...</div>;
//   if (error) return <div className="w-6/12">Something went wrong: {error.message}</div>;

//   const users = data?.data || [];


//   return (

//     <div className="w-6/12">
//     <div className="p-2 border">
//         <h2 className="text-2xl font-semibold mb-5">All Users</h2>
//         <div className="flex flex-wrap">


            
//           {users.map((user) => (
//             <div key={user.id} onClick={() => onUserSelect(user.id)} className="cursor-pointer">
//               <UserItem user={user} />
//             </div>
//           ))}





//             {currentUsers && currentUsers.map(user => <UserItem key={user.id} user={user} />)}
//         </div>
//         <div className="flex justify-center py-3">
//             <button 
//                 className={`py-1 px-4 ${currentPage === 1 ? 'bg-gray-400 hidden' : 'bg-green-600'} text-white mx-1`} 
//                 onClick={handlePrev} 
//                 disabled={currentPage === 1}
//             >
//                 Prev
//             </button>
//             <button 
//                 className={`py-1 px-4 ${currentPage === totalPages ? 'bg-gray-400 hidden' : 'bg-green-600'} text-white mx-1`} 
//                 onClick={handleNext} 
//                 disabled={currentPage === totalPages}
//             >
//                 Next
//             </button>
//         </div>
//         {/* <div className="text-center mt-2">
//             Page {currentPage} of {totalPages}
//         </div> */}
//     </div>
// </div>




//   );
// }

// export default UserList;




















// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
// import UserItem from "../UserItem";
// import axios from "axios";

// // Fetching data from the API

// const getData = async () => {

//     const response = await axios.get('http://localhost:3000/users');
//     return response.data;
// }

// function UserList() {
//     // State for current page
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 6; // Items per page

//     const { 
//         data: users, 
//         error, 
//         isFetching 
//     } = useQuery({
//         queryKey: ["users"],
//         queryFn: getData,
//     });    

//     if(isFetching) return <div className="w-6/12">Data is loading .........</div>;
//     if(error) return <div className="w-6/12">Something error {error.message}</div>; 

//     // Calculate total pages
//     const totalPages = users ? Math.ceil(users.length / itemsPerPage) : 0;

//     // Slice users for the current page
//     const currentUsers = users ? users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

//     // Navigation button handlers
//     const handlePrev = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNext = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     return (
//         <div className="w-6/12">
//             <div className="p-2 border">
//                 <h2 className="text-2xl font-semibold mb-5">All Users</h2>
//                 <div className="flex flex-wrap">
//                     {currentUsers && currentUsers.map(user => <UserItem key={user.id} user={user} />)}
//                 </div>
//                 <div className="flex justify-center py-3">
//                     <button 
//                         className={`py-1 px-4 ${currentPage === 1 ? 'bg-gray-400 hidden' : 'bg-green-600'} text-white mx-1`} 
//                         onClick={handlePrev} 
//                         disabled={currentPage === 1}
//                     >
//                         Prev
//                     </button>
//                     <button 
//                         className={`py-1 px-4 ${currentPage === totalPages ? 'bg-gray-400 hidden' : 'bg-green-600'} text-white mx-1`} 
//                         onClick={handleNext} 
//                         disabled={currentPage === totalPages}
//                     >
//                         Next
//                     </button>
//                 </div>
//                 {/* <div className="text-center mt-2">
//                     Page {currentPage} of {totalPages}
//                 </div> */}
//             </div>
//         </div>
//     );
// }

// export default UserList;

















// // ***************** these are my first code ****************
// import { useQuery } from "@tanstack/react-query";
// import UserItem from "../UserItem";
// import axios from "axios";

// const getData = async () => {
//     const response = await axios.get('http://localhost:3000/users');
//     return response.data;
// }

// function UserList() {

//     const { 
//         data: 
//         users, 
//         error, 
//         isFetching 
//     } = useQuery({
//         queryKey: ["users"],
//         queryFn: getData,
//         // refetchInterval: 3000,
//         // staleTime: 5000,
//     });    

//     if(isFetching) return <div className="w-6/12">Data is loading .........</div>;
//     if(error) return <div className="w-6/12">something error {error.message} </div>; 

    

//     return (
//         <div className="w-6/12">
//         <div className="p-2 border">
//             <h2 className="text-2xl font-semibold mb-5">All Users</h2>
//             <div className="flex flex-wrap">
//                 {users && users.map(user => <UserItem key={user.id} user={user}
//                  />)}
        
//             </div>
//      <div className="flex justify-center py-3">
//        <button className="py-1 px-4 bg-green-600 text-white mx-1">Prev</button>
//        <button className="py-1 px-4 bg-green-600 text-white mx-1">Next</button>
//     </div>
//         </div>
//     </div>
//     );
// }

// export default UserList;




























// function CreateUser() {

//     const handleSubmit = (e) => {
//         e.preventDefault();
   

//         const formData = new FormData(e.target)
//         const newData = Object.fromEntries(formData)

//         console.log(newData);
        
        
//     }

//     return (
//         <div className="w-3/12">
//         <div className="p-2 border">
//             <h1 className="text-2xl font-semibold mb-5">Create a New User</h1>

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
//                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//                 >
//                     Save User
//                 </button>
//             </form>
//         </div>
//     </div>
//     );
// }

// export default CreateUser;