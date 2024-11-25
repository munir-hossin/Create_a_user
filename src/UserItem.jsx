
function UserItem({ user, onUserSelect }) {
  return (
  
      <div className="p-2 text-center">
      <p className="text-xl font-semibold">{user.name}</p>
      <p>{user.username}</p>
      <p className="text-red-600">{user.email}</p>
      <button 
              onClick={() => onUserSelect(user)} 
              className="bg-green-500 hover:bg-green-600 px-3 py-1 mt-2"
            >
              View Details
            </button>
    </div>
  );
}

export default UserItem;
































// import { useNavigate } from "react-router-dom";


// function UserItem({user}) {
//   const navigate = useNavigate();

 

//     return (
//         <div className=" text-center">
//         {/* <div className="w-6/12 text-center"> */}
//         <div className="p-2">
//           <div className="border p-2 bg-slate-100">
//           <p className="text-2xl font-semibold">
//             {user.name}
//             </p>
//             <p>{user.username}</p>
//             <p className="text-red-600 mb-3">
//              {user.email}
//             </p>
       
//              <button 
//                 onClick={() => navigate(`/user/${user.id}`)} 
//                 className="bg-blue-500 text-white px-3 py-1 mt-2"
//               >
//                 View Details
//               </button>

//           </div>
//         </div>
//         </div>
//     );
// }

// export default UserItem;













//      {/* <button className="px-3 py-1 bg-green-600 text-white">
//               View Details
//             </button> */}