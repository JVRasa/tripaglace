import React, { useState } from 'react';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between mb-14 ">
      {!isOpen ? (
        <button
          type="button"
          className="fixed z-10 cursor-pointer hover:scale-125 ease-in-out duration-200 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuAlt2Icon className="h-14 w-14 text-purple" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="fixed right-4 z-20 cursor-pointer hover:scale-125 ease-in-out duration-500"
        >
          <XIcon className="h-14 w-14 text-purple" />
        </button>
      )}
      <nav
        className={`top-0 left-0 fixed bg-green w-[100vw] h-full z-10 ${
          isOpen
            ? 'translate-x-0 shadow-[0px_0px_0px_600px_#E4C1F9]'
            : '-translate-x-full shadow-[0px_0px_0px_0px_#E4C1F9]'
        } ease-in-out duration-700`}
      >
        <ul className="h-[90%] flex flex-col justify-center items-center gap-8">
          <li>
            <Link
              to="/parlour"
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-black hover:text-pink hover:text-4xl tracking-wide md:text-5xl md:hover:text-6xl"
            >
              LISTE DES GLACIERS
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-black hover:text-[#4E98BE] hover:text-4xl tracking-wide md:text-5xl md:hover:text-6xl"
            >
              MES FAVORIS
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-black hover:text-purple hover:text-4xl tracking-wide md:text-5xl md:hover:text-6xl"
            >
              MON PROFIL
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-black hover:text-dark-blue  hover:text-4xl tracking-wide md:text-5xl md:hover:text-6xl"
            >
              SE DECONNECTER
            </Link>
          </li>
        </ul>
      </nav>

      <div className="fixed right-6 h-14 w-14 bg-slate-300 rounded-xl">a</div>
    </div>
  );
}

export default Header;
