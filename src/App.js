import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Vacancies from './components/Vacancies/Vacancies';
import CallToAction from './components/CallToAction/CallToAction';
import News from './components/News/News';
import ServiceConditions from './components/ServiceConditions/ServiceConditions';
import NewVolunteers from './components/NewVolunteers/NewVolunteers';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ContractAdvantages from './components/ContractAdvantages/ContractAdvantages';

function App() {
  return (
    <div className="App bg-neutral-900">
      <Header />
      <Hero />
      <Vacancies />
      <CallToAction />
      <News />
      <ServiceConditions />
      <NewVolunteers />
      <ServiceDetails />
      <ContractAdvantages />
    </div>
  );
}

export default App;
