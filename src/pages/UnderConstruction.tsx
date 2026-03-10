import { Construction } from "lucide-react";
import { Link } from "react-router-dom";

const UnderConstruction = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-6 bg-background text-center px-6">
    <Construction className="h-16 w-16 text-magenta" />
    <h1 className="font-heading text-4xl font-bold text-offwhite">Under Construction</h1>
    <p className="font-body text-sm text-asphalt max-w-md">
      We're working hard to bring this page to life. Check back soon!
    </p>
    <Link
      to="/"
      className="mt-4 inline-block border border-offwhite px-6 py-2 font-heading text-sm font-medium text-offwhite transition-colors duration-200 hover:border-magenta hover:text-magenta"
    >
      Back to Home
    </Link>
  </div>
);

export default UnderConstruction;
