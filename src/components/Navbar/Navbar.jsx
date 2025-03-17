import React from "react";
import { useCycle, motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function MobileHeader() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const navLinks = [
    { key: 1, title: "Home", href: "/" },
    { key: 2, title: "World News", href: "/news" },
    { key: 4, title: "About Me", href: "/about" },
  ];

  const menuVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.36, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <header className="h-[10svh] w-full flex items-center justify-between px-5 z-50 sticky border-b-4 border-black mb-0 bg-slate-50">
      <div>
        <Link to="/">
          {" "}
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold uppercase font-poppins hover:text-cherry ">
            SBC Worlwide
          </h2>{" "}
        </Link>
      </div>
      <div className="relative z-50">
        <motion.button
          animate={mobileNav ? "open" : "closed"}
          onClick={() => toggleMobileNav()}
          className="flex flex-col space-y-2"
        >
          <motion.span
            variants={{
              closed: {
                rotate: 0,
                backgroundColor: "#D2042D",
                transition: {
                  duration: 0.8,
                },
              },
              open: { rotate: 45, y: 12, backgroundColor: "#D2042D" },
            }}
            whileHover={{ backgroundColor: "#D2042D" }}
            className="w-8 h-1 rounded-xl  block z-50 hover:bg-cherry"
          />
          <motion.span
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            className="w-8 h-1 rounded-xl bg-cherry  block z-50 hover:bg-cherry"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, backgroundColor: "#D2042D" },

              open: { rotate: -45, y: -12, backgroundColor: "#D2042D" },
            }}
            className="w-8 h-1 rounded-xl  block z-50 hover:bg-cherry"
          />
        </motion.button>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-24 w-full bg-black h-full origin-top flex flex-col p-10 z-0"
          >
            <div>
              <h1 className="text-2xl uppercase"></h1>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center justify-center gap-5 z-0 w-full h-[50%] relative top-40"
            >
              {navLinks.map((link) => (
                <div key={link.key} className="overflow-hidden hover:scale-110">
                  <MobileNavLink
                    title={link.title}
                    href={link.href}
                    toggleMobileNav={toggleMobileNav}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const MobileNavLink = ({ title, href, toggleMobileNav }) => {
  const linkVar = {
    initial: {
      y: "-30svh",
      transition: {
        duration: 0.2,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0, 0.5, 0.45, 1],
      },
    },
  };

  return (
    <motion.div
      variants={linkVar}
      className="text-5xl uppercase text-cherry scroll-smooth hover:text-lm-dark-green hover:scale-150"
    >
      <Link
        to={href}
        onClick={() => {
          toggleMobileNav();
        }}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default MobileHeader;
