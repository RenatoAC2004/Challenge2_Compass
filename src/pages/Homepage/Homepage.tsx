import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { CarouselsSection } from "./components/CarouselsSection"
import { HeroSection } from "./components/HeroSection"

export const Homepage = () => {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <CarouselsSection />
      <Footer />
    </section>
  )
}
