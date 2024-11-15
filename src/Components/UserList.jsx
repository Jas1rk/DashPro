import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserList = ({ onUserData }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
        onUserData(data);
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
      <section className="h-[23rem] p-8 md:p-0">
        <div className=" container mx-auto p-5 bg-white rounded-md shadow-md mt-24">
          <h2 className="font-bold">USERS</h2>
          <div className="overflow-y-auto overflow-x-auto h-[20rem] scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-transparent scrollbar-thumb-rounded-lg ">
            <table className="  shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  {["Name", "Email", "Mobile", "Website"].map((head) => (
                    <th
                      key={head}
                      className="p-2 text-left text-sm font-medium"
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
                      <td className="p-2 text-sm text-gray-700">
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
                        <td className="p-3 text-sm text-gray-700">
                          {user?.username}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-700">
                          {user?.email}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-700">
                          {user?.phone}
                        </td>
                        <td className="px-3 py-4 text-sm text-blue-600 underline">
                          {user?.website}
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserList;
