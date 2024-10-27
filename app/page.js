import Counter from "@/Components/Counter/Counter";
import Features from "@/Components/Features/Features";
import Banner from "@/Components/Header/Banner/Banner";

import Projects from "@/Components/Projects/Projects";
import Service from "@/Components/Service/Service";
import Team from "@/Components/Team/Team";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <Projects></Projects>
      <Team></Team>
      <Counter></Counter>
      <Features></Features>
    </div>
  );
}
