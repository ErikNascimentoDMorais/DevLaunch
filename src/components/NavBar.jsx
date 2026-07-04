import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Courses", to: "/courses" },
  { name: "Contact", to: "/contact" },
  { name: "Dashboard", to: "/dashboard" },
];

const NavBar = () => {
  //--------------Hamburguer Menu State-------------------------
  const [open, setOpen] = useState(false);
  //------------------------------------------------------------

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/*-----------------------------Logo---------------------------------*/}
        <Link to={"/"} className="font-bold text-blue-600 text-lg">
          DevLaunch
        </Link>
        {/*-------------------------------------------------------------------*/}
        {/*------------------------------Desktop Menu-------------------------*/}
        <div className="hidden md:flex gap-6">
          {navLinks.map((x) => (
            <Link
              to={x.to}
              key={x.name}
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition"
            >
              {x.name}
            </Link>
          ))}
        </div>
        {/*--------------------------------------------------------------------*/}
        {/*--------------------Hamburguer Menu------------------------------*/}
        <div
          className="md:hidden text-slate-700 dark:text-slate-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
        {/*-----------------------Hambuguer Menu When is open-----------------*/}
        {open && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3">
            {navLinks.map((x) => (
              <Link
                key={x.to}
                to={x.to}
                onClick={() => setOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600"
              >
                {x.name}
              </Link>
            ))}
          </div>
        )}
        {/*-----------------------------------------------------------------*/}
        {/*-----------------------------------------------------------------*/}
      </div>
    </div>
  );
};

export default NavBar;
