import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserList from "../features/user/UserList";

const queryClient = new QueryClient();

export default function Users() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-[#131314] min-h-screen">
        <h1 className="text-3xl font-bold text-center text-white py-6">
          Liste des utilisateurs
        </h1>
        <UserList />
      </div>
    </QueryClientProvider>
  );
}
