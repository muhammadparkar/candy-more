import { Categories } from "./components/Categories";
import { Collection } from "./components/Collection";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScallopDivider } from "./components/ScallopDivider";
import { Story } from "./components/Story";
import { Testimonials } from "./components/Testimonials";
import { TrustStats } from "./components/TrustStats";
import { WhyUs } from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStats />
        <Categories />
        <ScallopDivider />
        <Collection />
        <Story />
        <WhyUs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
