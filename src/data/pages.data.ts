import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import VerifyToken from "@/pages/auth/VerifyToken";
import Homepage from "@/pages/Homepage";
import Notfound from "@/pages/Notfound";

export const pages = [
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "/auth/login",
    Component: Login,
  },
  {
    path: "/auth/register",
    Component: Register,
  },
  {
    path: "/auth/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/auth/verify-token",
    Component: VerifyToken,
  },
  {
    path: "*",
    Component: Notfound,
  },
];
