import { p } from "framer-motion/client";
import React, { useState } from "react";

const Search = ({ users }) => {
  const [search, setSearch] = useState("");

  const searchUsers = users.filter((user) => {
    return user.username.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div>
        <input
          type="search"
          placeholder="search users..."
          className="w-full p-2 rounded-md bg-white-700 border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-blue-600"
          value={search}
          onChange={(event) => setSearch(event.target.value.trim())}
        />
        <div className="absolute mx-5">
          {search && (
            <div className=" flex flex-col m-2 justify-center items-center p-2 bg-white shadow-xl z-50 relative rounded-md overflow-hidden mt-1 w-80 md:w-96 ">
              {searchUsers.length > 0 ? (
                searchUsers.map((user, index) => (
                  <div
                    className="flex gap-5 cursor-pointer p-2 hover:bg-blue-900 rounded-md hover:text-white duration-500 hover:translate-1"
                    key={index}
                  >
                    <p className="">{user?.username}</p>
                    <p className="">{user?.email}</p>
                  </div>
                ))
              ) : (
                <p>No users found</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
