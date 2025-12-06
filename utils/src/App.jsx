import Users from "./pages/Users";

export default function App() {
  return <Users />;
}




// import axios from "axios"
// import { useEffect, useState } from "react"
// import usePagination from "./hook/usePagination"
// import Pagination from "./components/Pagination"
// import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
// import { Users } from "lucide-react";

// function App() {
//    const [users, setUsers] = useState([])
  
//   useEffect(() =>{
//       const fetchUser = async () =>{
//        const res =  await axios.get('https://jsonplaceholder.typicode.com/users')  
//         setUsers(res.data)
//    }
//        fetchUser()    
//   },[])
//     const {
         
//            pageCount,
//            currentPageItems,
//            goToPage
//           } = usePagination(users, 3)
//   return (
//     <>  
//       <h1 className="text-3xl font-bold underline w-[90%] bg-blue-500 text-white text-center p-3 mx-20 mt-5"> Mes utilisateur   </h1>
//       <div className="w-[90%] mx-20 h-auto my-10 p-20 flex-wrap bg-blue-100 flex justify-around">
//          {
//             currentPageItems.map( user =>
//              <div key={user.id}  className="border-1 border-blue-600 m-2 p-5 w-[30%]">
//                 <p>{user.name}</p>
//                 <p>{user.email}</p>
//                 <p>{user.phone}</p>
//                 <p>{user.username}</p>
//             </div>

//             )
//          }
//            <Pagination 
//              pageCount={pageCount}
//              onPageChange={goToPage}   
//            />
//               <Users />
//       </div>

//       <Users />
//     </>
//   )
// }

// export default App
