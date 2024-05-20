import { CarouselsSection } from "./components/CarouselsSection"
import { HeroSection } from "./components/HeroSection"
import { StepsSection } from "./components/StepsSection"

export const Homepage = () => {
  return (
    <section>
      <HeroSection />
      <StepsSection />
      <CarouselsSection />
    </section>
  )
}
