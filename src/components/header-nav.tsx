// App.tsx
import { useState } from "react";
import { NavLink } from "react-router";
import { Navbar, Typography, IconButton } from "@material-tailwind/react";

function NavItem({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-blue-gray-700 hover:bg-blue-gray-50 hover:text-blue-900",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

const HeaderNav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Navbar className="header-wrapper">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="span" className="text-lg font-bold">
          Study Corner
        </Typography>

        {/* Desktop / large tablet */}
        <div className="hidden lg:flex items-center gap-2">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
          <NavItem to="/contact" label="Contact" />
          <NavItem to="/sign-in" label="Sign In" />
          <NavItem to="/sign-up" label="Sign Up" />
        </div>

        {/* Mobile + tablet menu button */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          // ripple={false}
          onClick={() => setOpenNav((prev) => !prev)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile + tablet dropdown */}
      {openNav && (
        <div className="mt-3 flex flex-col gap-2 border-t pt-3 lg:hidden">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/sign-in">Sign In</a>
          <a href="/sign-up">Sign Up</a>
        </div>
      )}
    </Navbar>
  );
};

export default HeaderNav;
