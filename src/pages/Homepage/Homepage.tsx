import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { CarouselsSection } from "./components/CarouselsSection"
import { HeroSection } from "./components/HeroSection"
import { StepsSection } from "./components/StepsSection"

export const Homepage = () => {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <StepsSection />
      <CarouselsSection />
      <Footer />
    </section>
  )
}
