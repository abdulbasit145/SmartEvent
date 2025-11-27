import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled 
        ? "bg-gradient-to-br from-[#020617] via-[#051627] to-[#0f172a]/95 backdrop-blur-md border-b border-white/10" 
        : "bg-transparent"
    }`}>
      
      <div className="relative container mx-auto px-4 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-10 relative">
            <h1 className="text-xl sm:text-2xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-accent to-pink-400 bg-clip-text">
                Smart Events
              </span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="block h-0.5 w-full bg-gradient-to-r from-accent to-pink-400 mt-1" />
                )}
              </Link>
            ))}
            <Button
              asChild
              className="h-10 rounded-full bg-accent px-6 text-sm font-semibold shadow-lg shadow-accent/40 hover:bg-accent/90 text-white ml-2"
            >
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-[110] relative text-white hover:text-white/80 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Outside container to take full width */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 pb-4 space-y-3 border-t border-white/10 pt-4 z-[110] bg-gradient-to-br from-[#020617] via-[#051627] to-[#0f172a] rounded-b-2xl backdrop-blur-md px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-2 rounded-lg font-medium transition-all ${
                isActive(link.path)
                  ? "text-white bg-white/10 font-semibold"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="w-full mt-2 h-11 rounded-full bg-accent text-white font-semibold shadow-lg shadow-accent/40 hover:bg-accent/90"
          >
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Book Now
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;