import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("here is response", data);
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <section className="bg-white rounded-md shadow-md p-3 w-96 sm:w-[42rem]">
        <h2 className="font-bold">USERS</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-900 text-white">
              <tr>
                {["Name", "Email", "Mobile", "Website"].map((head) => (
                  <th
                    key={head}
                    className="px-4 py-3 text-left text-sm font-medium"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  className="bg-white border-b hover:bg-gray-100"
                  key={user.id}
                >
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {user?.username}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {user?.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {user?.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-blue-600 underline">
                    {user?.website}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UserList;
