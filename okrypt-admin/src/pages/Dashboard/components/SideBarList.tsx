import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { SideList } from "../../../constants/sidebar";
import { removeLocalStorage } from "../../../helpers/storage";

const SideBarList = ({
  setisShowSideBar,
}: {
  setisShowSideBar: (state: boolean) => void;
}) => {
  const location = useLocation();
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const toggleSubMenu = (id: string) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  const handleMenuClick = (list: any) => {
    list.submenu ? toggleSubMenu(list.id) : setisShowSideBar(false);
  };

  const handleLogout = () => {
    removeLocalStorage("admin_token");
    window.location.reload();
  };

  return (
    <nav>
      <ul className="text-[1.6rem]">
        {SideList.map((list) => (
          <li key={list.id} className="mb-14">
            <div
              className={`flex justify-between items-center px-4 py-3 rounded-[.6rem] cursor-pointer ${
                location.pathname === list.path
                  ? "text-secondary bg-gray-700"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => handleMenuClick(list)}
            >
              {/* Render Link only if there is no submenu */}
              {list.submenu ? (
                <span className="block w-full">{list.title}</span>
              ) : (
                <Link to={list.path} className="w-full block">
                  {list.title}
                </Link>
              )}

              {list.submenu &&
                (expandedItemId === list.id ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                ))}
            </div>

            {/* Submenu items */}
            {list.submenu && expandedItemId === list.id && (
              <ul className="ml-6 mt-2 space-y-2">
                {list.submenu.map((subItem) => (
                  <li onClick={() => setisShowSideBar(false)} key={subItem.id}>
                    <Link
                      to={subItem.path}
                      className={`block px-4 py-2 rounded-[.4rem] ${
                        location.pathname === subItem.path
                          ? "text-secondary bg-gray-600"
                          : "hover:bg-gray-600"
                      }`}
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <p
          onClick={handleLogout}
          className="ml-[1rem]  text-red cursor-pointer"
        >
          Logout
        </p>
      </ul>
    </nav>
  );
};

export default SideBarList;
