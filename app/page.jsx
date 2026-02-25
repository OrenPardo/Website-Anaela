import Hero from './components/Hero';
import Specializations from './components/Specializations';
import Recruitment from './components/Recruitment';
import ForYou from './components/ForYou';
import Contact from './components/Contact';
import ScrollAnimations from './components/ScrollAnimations';

export default function Page() {
  return (
    <>
      <ScrollAnimations />
      <Hero />
      <Specializations />
      <Recruitment />
      <ForYou />
      <Contact />
    </>
  );
}
