import { useState } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import UserDetails from './UserDetails';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="order-1 lg:order-3 lg:col-span-3 p-4 text-center lg:text-start">
        <UserDetails user={selectedUser} />
      </div>
      

      <div className="order-2 lg:order-2 lg:col-span-6 py-4 lg:px-0 px-3">
        <div>
          <UserList onUserSelect={setSelectedUser} />
        </div>
      </div>
      
      <div className="order-3 lg:order-1 lg:col-span-3 p-4 lg:py-4 lg:px-0">
        <CreateUser />
      </div>
    </div>
  );
}

export default App;




















// import { useState } from 'react';
// import CreateUser from './components/CreateUser';
// import UserList from './components/UserList';
// import UserDetails from './UserDetails';

// function App() {
//   const [selectedUser, setSelectedUser] = useState(null);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12">
//       <div className="lg:col-span-3 p-4">
//         <CreateUser />
//       </div>
//       <div className="lg:col-span-6 py-4">
//         <div className="border-r">
//           <UserList onUserSelect={setSelectedUser} />
//         </div>
//       </div>
//       <div className="lg:col-span-3 pl-3 p-4">
//         <UserDetails user={selectedUser} />
//       </div>
//     </div>
//   );
// }

// export default App;






















// import { useState } from 'react';
// import CreateUser from './components/CreateUser';
// import UserList from './components/UserList';
// import UserDetails from './UserDetails';

// function App() {
//   const [selectedUser, setSelectedUser] = useState(null); 

//   return (
//     <div className="grid grid-cols-12">
//       <div className="col-span-3 ">
//         <CreateUser />
//       </div>
//       <div className="col-span-6 py-4">
//           <div className="border-r">
//             <UserList onUserSelect={setSelectedUser} /> 
//           </div>
      
//       </div>
//           <div className="col-span-3 pl-3">
//             <UserDetails user={selectedUser} />
//           </div>
//     </div>
//   );
// }

// export default App;











