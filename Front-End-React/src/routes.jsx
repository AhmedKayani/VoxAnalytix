import {
  HomeIcon,
  UserIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentArrowUpIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  UploadAudio,
  CallHistory,
  HelpAndSupport,
  Account,
  Result,
  ResultPast,
} from "@/pages/dashboard";

import { AdminHome } from "@/pages/admin";

import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard Home",
        path: "/home",
        element: <AdminHome />,
      },
    ],
  },
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Dashboard Home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <DocumentArrowUpIcon {...icon} />,
        name: "Upload Audio",
        path: "/upload-audio",
        element: <UploadAudio />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Call History",
        path: "/call-history",
        element: <CallHistory />,
      },
      {
        icon: <QuestionMarkCircleIcon {...icon} />,
        name: "Help & Support",
        path: "/help-and-support",
        element: <HelpAndSupport />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: "Account",
        path: "/account",
        element: <Account />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Log Out",
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        name: "ResulPage",
        path: "/result-page",
        element: <Result />,
      },
      {
        name: "ResulPastPage",
        path: "/result-past-page",
        element: <ResultPast />,
      },
    ],
  },
  {
    layout: "auth",
    pages: [
      {
        name: "Sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
