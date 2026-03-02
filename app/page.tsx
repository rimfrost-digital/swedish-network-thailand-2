import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Comparison } from "@/components/comparison";
import { HowItWorks } from "@/components/how-it-works";
import { CompanyRegistry } from "@/components/company-registry";
import { TalentBank } from "@/components/talent-bank";
import { LocalTeams } from "@/components/local-teams";
import { Events } from "@/components/events";
import { ConnectMeetings } from "@/components/connect-meetings";
import { Qualification } from "@/components/qualification";
import { FAQ } from "@/components/faq";
import { Forms } from "@/components/forms";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Comparison />
        <HowItWorks />
        <CompanyRegistry />
        <TalentBank />
        <LocalTeams />
        <Events />
        <ConnectMeetings />
        <Qualification />
        <FAQ />
        <Forms />
      </main>
      <Footer />
    </>
  );
}
