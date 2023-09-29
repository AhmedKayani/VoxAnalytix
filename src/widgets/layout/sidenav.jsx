import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import profilePic from "../../../public/img/ProfilePicture.png";

import { useMaterialTailwindController, setOpenSidenav } from "@/context";

/**
 *
 * Sidenav Component
 *
 * The Sidenav component is a React component that renders a side navigation bar. It allows users to navigate to different pages of the application.
 *
 * Components:
 * - Avatar: Displays the user's profile picture.
 * - Typography: Displays text.
 * - IconButton: A button component with an icon.
 * - XMarkIcon: An icon component displaying an X mark.
 * - NavLink: Allows navigation to a page.
 * - Button: A button component for navigation.
 *
 * Props:
 * - brandImg (string, default: "/img/logo-ct.png"): URL of the brand image.
 * - brandName (string, default: "Call Analysis"): Name of the brand.
 * - routes (array): An array of route objects, each containing:
 *   - layout (string): Layout of the page.
 *   - title (string): Title of the page.
 *   - pages (array of objects): Pages with properties:
 *     - icon: Icon component representing the page.
 *     - name: Name of the page.
 *     - path: Path of the page.
 *
 * Usage Example:
 * ```jsx
 * import Sidenav from './Sidenav';
 *
 * const navigationRoutes = [
 *   {
 *     layout: "dashboard",
 *     title: "Dashboard",
 *     pages: [
 *       {
 *         icon: <DashboardIcon />,
 *         name: "Dashboard Home",
 *         path: "/home",
 *       },
 *       // Add more pages as needed
 *     ],
 *   },
 *   // Add more routes as needed
 * ];
 *
 * // Inside a React component's render method:
 * <Sidenav brandImg="/img/logo.png" brandName="My App" routes={navigationRoutes} />
 * ```
 *
 * Dependencies:
 * - This component relies on the following libraries:
 *   - react
 *   - @mui/material
 *   - @mui/icons-material
 *   - prop-types
 *
 * Notes:
 * - The Sidenav component uses components from the @mui/material library for rendering.
 * - It manages the state of the navigation bar using the useMaterialTailwindController hook.
 *
 **/

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="flex h-full flex-col justify-between">
        {/* This div contains the avatar and the navigation links */}
        <div>
          <div
            className={`relative border-b ${
              sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
            }`}
          >
            <Link to="/" className="flex items-center gap-4 py-6 px-8">
              <div className="flex items-center gap-4">
                <Avatar
                  src={profilePic}
                  alt="avatar"
                  size="lg"
                  variant="circular"
                />
                <div>
                  <Typography variant="h6" color="white">
                    Ahmed Shahzad
                  </Typography>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    QA Analyst
                  </Typography>
                </div>
              </div>
            </Link>
            <IconButton
              variant="text"
              color="white"
              size="sm"
              ripple={false}
              className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
              onClick={() => setOpenSidenav(dispatch, false)}
            >
              <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
            </IconButton>
          </div>
          <div className="m-4">
            {routes.map(({ layout, title, pages }, key) => (
              <ul key={key} className="mb-4 flex flex-col gap-1">
                {title && (
                  <li className="mx-3.5 mt-4 mb-2">
                    <Typography
                      variant="small"
                      color={sidenavType === "dark" ? "white" : "blue-gray"}
                      className="font-black uppercase opacity-75"
                    >
                      {title}
                    </Typography>
                  </li>
                )}
                {pages.map(({ icon, name, path }) => (
                  <li key={name}>
                    {icon && (
                      <NavLink to={`/${layout}${path}`}>
                        {({ isActive }) => (
                          <Button
                            variant={isActive ? "gradient" : "text"}
                            color={
                              isActive
                                ? sidenavColor
                                : sidenavType === "dark"
                                ? "white"
                                : "blue-gray"
                            }
                            className="flex items-center gap-4 px-4 capitalize"
                            fullWidth
                          >
                            {icon}
                            <Typography
                              color="inherit"
                              className="font-medium capitalize"
                            >
                              {name}
                            </Typography>
                          </Button>
                        )}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        {/* This div contains the footer logo */}
        {/* <div className="">
          <img src={projectLogo} alt="Project Logo" className="mx-auto w-32" />
        </div> */}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Call Analysis",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
