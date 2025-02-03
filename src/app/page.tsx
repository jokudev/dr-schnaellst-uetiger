import Image from "next/image";
import AboutCard from "./components/AboutCard";
import EventInfoCards from "./components/EventInfoCards";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-background/80 dark:bg-background/90 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
              Dr schnällscht Ütiger
            </h1>
            <p className="text-xl md:text-2xl text-foreground">
              Veranstaltet vom
              <Link 
                href="https://www.tvitingen.ch/" 
                target="_blank" 
                className="inline-block ml-2 bg-transparent dark:bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-2xl p-2 transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
              >
                <Image src="/tvi-logo.png" alt="TVI Logo" width={50} height={50} className="inline-block mr-2" /> 
                Turnverein Ütige
              </Link>
            </p>
          </div>
        </div>
      </div>

      <EventInfoCards />

      <AboutCard />
    </main>
  );
}
