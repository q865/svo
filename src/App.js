import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Vacancies from './components/Vacancies/Vacancies';
import CallToAction from './components/CallToAction/CallToAction';
import News from './components/News/News';

function App() {
  return (
    <div className="App bg-neutral-900">
      <Header />
      <Hero />
      <Vacancies />
      <CallToAction />
      <News />
    </div>
  );
}

export default App;
