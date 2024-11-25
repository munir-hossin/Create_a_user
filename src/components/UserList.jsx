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
    <div >
      <h2 className="text-2xl font-bold ml-5 mt-5 pb-3 text-center lg:text-start">All Users</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {currentUsers.map(user => (
          <div key={user.id} className="p-2 border rounded m-2">
            <UserItem user={user} onUserSelect={onUserSelect} />
          </div>
        ))}
      </div>

      <div className="flex justify-center py-3">
        {currentPage > 1 && (
          <button
            onClick={() => setSearchParams({ page: currentPage - 1 })}
            className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 mx-1"
          >
            Prev
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => setSearchParams({ page: currentPage + 1 })}
            className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 mx-1"
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
// import { useSearchParams } from "react-router-dom";
// import UserItem from "../UserItem";
// import axios from "axios";

// // Fetching data from the API
// const getData = async () => {
//   const response = await axios.get('http://localhost:3000/users');
//   return response.data;
// }

// function UserList({ onUserSelect }) {
//   const [searchParams, setSearchParams] = useSearchParams();
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

//   return (
//     <div className="">
//       <h2 className="text-2xl font-bold ml-5 mb-5">All Users</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
//         {currentUsers.map(user => (
//           <div key={user.id} className="p-2 border rounded m-2">
//             <UserItem user={user} onUserSelect={onUserSelect} />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center py-3">
//         {currentPage > 1 && (
//           <button
//             onClick={() => setSearchParams({ page: currentPage - 1 })}
//             className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 mx-1"
//           >
//             Prev
//           </button>
//         )}
//         {currentPage < totalPages && (
//           <button
//             onClick={() => setSearchParams({ page: currentPage + 1 })}
//             className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 mx-1"
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UserList;

































// import { useQuery } from "@tanstack/react-query";
// import { useSearchParams } from "react-router-dom";
// import UserItem from "../UserItem";
// import axios from "axios";

// // Fetching data from the API
// const getData = async () => {
//   const response = await axios.get('http://localhost:3000/users');
//   return response.data;
// }

// function UserList({ onUserSelect }) {
//   const [searchParams, setSearchParams] = useSearchParams();
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

//   return ( 
//     <div className="">
//       <h2 className="text-2xl font-bold ml-5 mb-5">All Users</h2>

//       <div className="grid grid-cols-12">
//         {currentUsers.map(user => (
//           <div key={user.id} className="p-2 col-span-6 border rounded m-2">
//             <UserItem user={user} onUserSelect={onUserSelect} />
//           </div>
//         ))}
//       </div>

//       <div className="flex justify-center py-3">
   
//         {currentPage > 1 && (
//           <button 
//             onClick={() => setSearchParams({ page: currentPage - 1 })} 
//             className="bg-green-600 hover:bg-green-700  py-1 px-4 mx-1"
//           >
//             Prev
//           </button>
//         )}

      
//         {currentPage < totalPages && (
//           <button 
//             onClick={() => setSearchParams({ page: currentPage + 1 })} 
//             className="bg-green-600 hover:bg-green-700  py-1 px-4 mx-1"
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UserList;






















