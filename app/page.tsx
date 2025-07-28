import Hero from './sections/Hero';
import Footer from './sections/Footer';
import Features from './sections/Feature'
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonial';
import Faq from './sections/Faq';
import ContactForm from './sections/ContactForm';

export default function Home() {
  return (
    <div className='scrollbar-hide'>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials/>
      <Faq />
      <ContactForm/>
      <Footer/>
    </div>
  );
}
