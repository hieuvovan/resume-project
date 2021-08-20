import React from 'react';

const Home = () => {

  return (
    <section className="h-screen relative section-home">
      <div className="absolute left-1/2 top-1/2 my-information">
        <h1 className="text-7xl text-center font-bold pb-6 my-name">Hieu <span className="highlight">Vo</span></h1>
        <p className="text-3xl text-center my-position">I am <span className="font-bold underline-highlight">Web Developer</span></p>
      </div>
    </section>
  )
}

export default Home;
