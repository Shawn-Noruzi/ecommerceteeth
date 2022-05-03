import React, { useEffect } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import useWindowSize from "../utils/useWindowSize";
import { useSession } from "next-auth/react";
export default function Layout({ children }) {
  const size = useWindowSize();
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === "loading";
  // useEffect(() => {
  //   console.log("data", session);
  //   console.log("status", status);
  //   console.log("user", user);
  //   console.log("isLoadingUser", isLoadingUser);
  // }, [session, status, user, isLoadingUser]);

  return (
    <div className="flex flex-col  min-h-screen">
      <Nav session={session} size={size} />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
