import heroBg from "@/assets/hero-bg.jpg";

const navLinks = ["Games", "Studio", "Careers", "Support"];

const Index = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Dark concrete monolith with neon magenta light"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Magenta flicker overlay on right side */}
      <div className="animate-flicker absolute right-0 top-0 h-full w-[30%] pointer-events-none mix-blend-screen opacity-0">
        <div className="absolute inset-0 bg-gradient-to-l from-magenta/10 to-transparent" />
      </div>

      {/* Dark overlay for left text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Navigation — part of the main block on desktop, hamburger on mobile */}
        <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
          {/* Logo */}
          <div className="font-heading text-lg font-bold tracking-tight text-offwhite md:text-xl">
            WobbleCraft
          </div>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-sm text-asphalt transition-colors duration-200 hover:text-offwhite"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#"
            className="hidden font-heading text-sm font-medium text-offwhite md:block"
          >
            Our Games
          </a>

          {/* Mobile hamburger */}
          <button className="flex flex-col gap-1.5 md:hidden" aria-label="Menu">
            <span className="block h-[1px] w-5 bg-offwhite" />
            <span className="block h-[1px] w-5 bg-offwhite" />
            <span className="block h-[1px] w-5 bg-offwhite" />
          </button>
        </nav>

        {/* Main content — vertically centered in left 70% */}
        <div className="flex flex-1 items-center px-6 md:px-12 lg:w-[70%] lg:px-16">
          <div className="flex flex-col gap-10">
            {/* Badge */}
            <span className="font-body text-xs uppercase tracking-[0.2em] text-asphalt">
              iOS Native
            </span>

            {/* Headline */}
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-offwhite md:text-7xl lg:text-8xl">
              Built for Players.
              <br />
              Trusted by{" "}
              <span className="text-offwhite">millions.</span>
            </h1>

            {/* CTA button */}
            <div>
              <a
                href="#"
                className="inline-block border border-offwhite px-8 py-3 font-heading text-sm font-medium text-offwhite transition-colors duration-200 hover:border-magenta hover:text-magenta"
              >
                View Portfolio
              </a>
            </div>

            {/* Social proof */}
            <p className="font-body text-xs uppercase tracking-[0.15em] text-asphalt">
              1M+ Players — App Store Rating 4.9/5
            </p>
          </div>
        </div>

        {/* Bottom paragraph */}
        <div className="px-6 pb-8 md:px-12 lg:w-[50%] lg:px-16 lg:pb-12">
          <p className="font-body text-sm leading-relaxed text-asphalt">
            Delivering unforgettable mobile experiences that captivate players,
            push the boundaries of iOS performance, and bring imagination to
            life in the palm of your hand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
