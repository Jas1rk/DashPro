import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
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
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <Skeleton count={1} width={`80%`} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <Skeleton count={1} width={`80%`} />
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <Skeleton count={1} width={`80%`} />
                    </td>
                    <td className="px-6 py-4 text-sm text-blue-600 underline">
                      <Skeleton count={1} width={`80%`} />
                    </td>
                  </tr>
                ))
              ) : (
                <>
                  {users.map((user) => (
                    <tr
                      className="bg-white border-b hover:bg-gray-100"
                      key={user.id}
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {user?.username || <Skeleton />}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {user?.email || <Skeleton />}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {user?.phone || <Skeleton />}
                      </td>
                      <td className="px-6 py-4 text-sm text-blue-600 underline">
                        {user?.website || <Skeleton />}
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default UserList;
