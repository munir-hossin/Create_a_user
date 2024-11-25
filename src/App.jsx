import { useState } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
import UserDetails from './UserDetails';

function App() {
  const [selectedUser, setSelectedUser] = useState(null); 

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 ">
        <CreateUser />
      </div>
      <div className="col-span-6 py-4">
          <div className="border-r">
            <UserList onUserSelect={setSelectedUser} /> 
          </div>
      
      </div>
          <div className="col-span-3 pl-3">
            <UserDetails user={selectedUser} />
          </div>
    </div>
  );
}

export default App;

















// import { useState } from 'react';
// // import CreateUser from './components/CreateUser';
// // import UserList from './components/UserList';
// // import UserDetails from './components/UserDetails';

// // import { Routes, Route } from 'react-router-dom';
// import CreateUser from './components/CreateUser';
// import UserList from './components/UserList';
// import UserDetails from './UserDetails';

// function App() {
//   const [selectedUser, setSelectedUser] = useState(null); // স্টেট সংরক্ষণের জন্য

//   return (
//     <div className="flex">
//       <div className="w-1/3 p-4 border-r">
//         <CreateUser />
//         <UserList onSelectUser={setSelectedUser} />
//       </div>
//       <div className="w-2/3 p-4">
//         <UserDetails user={selectedUser} />
//       </div>
//     </div>
//   );
// }

// export default App;





























// import { Routes, Route } from 'react-router-dom';
// import CreateUser from './components/CreateUser';
// import UserList from './components/UserList';
// import UserDetails from './UserDetails';


// function App() {
//   return (
//     <div className="flex">
//       <div className="w-1/3"> {/* Sidebar অংশ */}
//         <CreateUser />
//       </div>
//       <div className="w-2/3"> {/* Main Content */}
//         <Routes>
//           <Route path="/users" element={<UserList />} />
//           <Route path="/user/:id" element={<UserDetails />} />
//           <Route path="/" element={<UserList />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }


// export default App;
























// import { Routes, Route } from 'react-router-dom';
// // import CreateUser from './components/CreateUser';
// // import UserList from './components/UserList';
// // import UserDetails from './components/UserDetails';
// import CreateUser from './components/CreateUser';
// import UserList from './components/UserList';
// import UserDetails from './UserDetails';

// function App() {
//   return (
//     <div className="flex">
//       <Routes>
//         {/* Route to display the User List */}
//         <Route path="/users" element={<UserList />} />

//         {/* Route to display Create User */}
//         <Route path="/create-user" element={<CreateUser />} />

//         {/* Route to display User Details, using a dynamic parameter */}
//         <Route path="/user/:id" element={<UserDetails />} />

//         {/* Default route to User List */}
//         <Route path="/" element={<UserList />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;



// import { Routes, Route } from 'react-router-dom';
// import CreateUser from './components/CreateUser';
// import UserList from './components/UserList';
// import UserDetails from './UserDetails';

// function App() {
//   return (
//     <div className="flex">
//       <Routes>
//         <Route path="/users" element={<UserList />} />
//         {/* <CreateUser /> */}
//         <Route path="/CreateUser" element={<CreateUser />} />
//         <Route path="/user/:id" element={<UserDetails />} />
//         <Route path="/" element={<UserList />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;







// import CreateUser from "./components/CreateUser";
// import UserList from "./components/UserList";
// import UserDetails from "./UserDetails";

// function App() {
//   return (
//       <div className="flex">
//         <CreateUser />
//         <UserList /> 
//         <UserDetails id={5} />
//       </div>
//   );
// }

// export default App;






