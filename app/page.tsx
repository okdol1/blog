import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5 h-screen">
      <section className="h-full flex justify-center items-center">
        <div className="group relative animate-float">
          <Image
            src="/images/astronaut.png"
            alt="astronaut"
            width={120}
            height={120}
          />
          <span className="absolute top-0 left-0 hidden group-hover:inline-block">
            Hello!
          </span>
        </div>
      </section>
    </main>
  );
}
