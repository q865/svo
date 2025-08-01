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
import FinancialAllowance from './components/FinancialAllowance/FinancialAllowance';
import SocialGuarantees from './components/SocialGuarantees/SocialGuarantees';
import HowToApply from './components/HowToApply/HowToApply';
import ContactFormSection from './components/ContactFormSection/ContactFormSection';
import Equipment from './components/Equipment/Equipment';
import TrainingStages from './components/TrainingStages/TrainingStages';
import OurHeroes from './components/OurHeroes/OurHeroes';
import Faq from './components/Faq/Faq';
import CommissariatMap from './components/CommissariatMap/CommissariatMap';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App bg-brand-gray-darker">
      <Header />
      <Hero />
      <Vacancies />
      <CallToAction />
      <News />
      <ServiceConditions />
      <NewVolunteers />
      <ServiceDetails />
      <ContractAdvantages />
      <FinancialAllowance />
      <SocialGuarantees />
      <HowToApply />
      <ContactFormSection />
      <Equipment />
      <TrainingStages />
      <OurHeroes />
      <Faq />
      <CommissariatMap />
      <Footer />
    </div>
  );
}

export default App;
