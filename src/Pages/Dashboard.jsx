// import { use } from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {

  // const fetchUsers = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   return res.json();
  // };

  //   const users = use(fetchUsers());
   
    
   




  return (
    <div className="flex h-full flex-1">
      <div className="p-2 md:p-10   bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <h1 className="text-3xl font-bold">Dashboard Page</h1>
          {/* <ul>
        {users.map((user) => (
          <div key={user.id} className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
            <h2 className='text-xl font-bold'>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </ul> */}
        <Outlet />
        <div className="flex gap-2">
          {[...new Array(4)].map((_, i) => (
            <div
              key={"first" + i}
              className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
        <div className="flex gap-2 flex-1">
          {[...new Array(2)].map((_, i) => (
            <div
              key={"second" + i}
              className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
