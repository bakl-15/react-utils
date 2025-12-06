export default function Card({ user }) {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-lg">{user.name}</h3>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm">{user.email}</p>
      <p className="text-sm">{user.phone}</p>
    </div>
  );
}
