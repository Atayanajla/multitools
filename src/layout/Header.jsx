import { Link as RouterLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-4 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-white/60" : "bg-transparent"
      }`}
    >
      <RouterLink
        to="/"
        className="font-bold text-xl tracking-wider cursor-pointer z-50"
      >
        Multi Fitur
      </RouterLink>

      <div className="flex items-center gap-4 md:gap-8">
        <ul className="hidden md:flex items-center gap-5">
          <li className="relative">
            <button onClick={() => toggleDropdown("kalkulator")} className="hover:font-bold">
              Kalkulator ▾
            </button>
            {openDropdown === "kalkulator" && (
              <ul className="absolute top-full left-0 mt-2 min-w-[90px] backdrop-blur-md bg-white/60 shadow-md rounded-md py-2 list-none text-center ">
                <li>
                  <RouterLink
                    to="/tools/basic"
                    onClick={() => setOpenDropdown(null)}
                    className="hover:font-bold hover:border-b hover:border-gray-400"
                  >
                    Basic
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/tools/bmi"
                    onClick={() => setOpenDropdown(null)}
                    className="hover:font-bold hover:border-b hover:border-gray-400"
                  >
                    BMI
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/tools/suhu"
                    onClick={() => setOpenDropdown(null)}
                    className="hover:font-bold hover:border-b hover:border-gray-400"
                  >
                    Suhu
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/tools/tanggal"
                    onClick={() => setOpenDropdown(null)}
                    className="hover:font-bold hover:border-b hover:border-gray-400"
                  >
                    Tanggal
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/tools/usia"
                    onClick={() => setOpenDropdown(null)}
                    className="hover:font-bold hover:border-b hover:border-gray-400"
                  >
                    Usia
                  </RouterLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <button onClick={() => toggleDropdown("stopwatch")} className="hover:font-bold">
              Stopwatch/Timer ▾
            </button>
            {openDropdown === "stopwatch" && (
              <ul className="absolute top-full left-0 mt-2 min-w-[100px] backdrop-blur-md bg-white/60 shadow-md rounded-md py-2 list-none text-center">
                <li>
                  <RouterLink
                    to="/tools/stopwatch"
                    onClick={() => setOpenDropdown(null)}
                    className="hover:font-bold hover:border-b hover:border-gray-400"
                  >
                    Stopwatch
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/tools/timer"
                    onClick={() => setOpenDropdown(null)}
                    className="hover:font-bold hover:border-b hover:border-gray-400"
                  >
                    Timer
                  </RouterLink>
                </li>
              </ul>
            )}
          </li>
          <li className="relative">
            <RouterLink to="/tools/todolist" className="hover:font-bold">Todo List</RouterLink>
          </li>
          <li className="relative">
            <RouterLink to="/tools/note" className="hover:font-bold">Notes</RouterLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
