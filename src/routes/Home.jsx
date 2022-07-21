import React from 'react';
import Header from '../components/Header';

import iconHome from '../img/iconHome.jpg';

function Home() {
  return (
    <div className="h-screen bg-green p-4">
      <Header />
      <div className="h-[calc(100%-100px)] flex flex-col justify-between">
        <section className="flex flex-col items-center text-center gap-4 mt-28 md:mt-14">
          <img
            src={iconHome}
            alt="homepage ice cream"
            className="w-60 h-60 rounded-full "
          />
          <h1 className="text-3xl">
            Bienvenue
            <br />
            sur Le Glacier
          </h1>
          <p className="text-xl">Pour les amateurs de bonnes glaces</p>
        </section>
        <section className="flex flex-col gap-2">
          <button
            type="button"
            className="bg-dark-blue py-2 rounded-xl font-black md:w-[20%] md:m-auto hover:text-slate-100  hover:scale-125 ease-in-out duration-200"
          >
            SE CONNECTER
          </button>
          <button
            type="button"
            className="hover:text-pink ease-in-out duration-200"
          >
            S&rsquo;inscrire
          </button>
        </section>
      </div>
    </div>
  );
}

export default Home;
