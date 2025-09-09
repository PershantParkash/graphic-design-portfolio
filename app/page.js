import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio"
import BookingSection from "./components/BookingSection"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Header />
       <Hero />
       <Portfolio/>
       <BookingSection/>
       <Footer />
    </div>
  );
}
