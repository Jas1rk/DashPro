import React from "react";

const Mobilenavbar = () => {
  const navitems = {
    item1: "Dashboard",
    item2: "Products",
    item3: "Payments",
    item4: "Categories",
    item5: "Orders",
    item6: "About",
    item7: "Service",
    item8: "Contact",
    item9: "Settings",
    item10: "Logout",
  };
  return (
    <nav className="sm:hidden flex flex-col bg-blue-950 text-white p-3 space-y-2 z-50">
      {Object.keys(navitems).map((data, index) => (
        <div key={index} className="flex list-none gap-2 mt-1">
          <li className="">{navitems[data]}</li>
        </div>
      ))}
    </nav>
  );
};

export default Mobilenavbar;
