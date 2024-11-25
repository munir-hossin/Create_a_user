function UserDetails({ user }) {
  if (!user) {
    return <h2 className="text-2xl mt-3 font-bold border-b pb-7 mb-4">User Details</h2>
  }

  return (
    <div >
      <h2 className="text-2xl font-bold mt-3 border-b pb-7 ">User Details</h2>
      <p className="text-xl"><strong>Name:</strong> {user.name}</p>
      <p className="text-xl"><strong>Username:</strong> {user.username}</p>
      <p className="text-xl"><strong>Email:</strong> {user.email}</p>
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












