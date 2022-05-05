import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import  AuthModal  from "./AuthModal";
import Nav from "./Nav";
import useWindowSize from "../utils/useWindowSize";
import { useSession } from "next-auth/react";
export default function Layout({ children }) {
  const size = useWindowSize();
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === "loading";

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  // useEffect(() => {
  //   console.log("data", session);
  //   console.log("status", status);
  //   console.log("user", user);
  //   console.log("isLoadingUser", isLoadingUser);
  // }, [session, status, user, isLoadingUser]);

  return (
    <div className="flex flex-col  min-h-screen">
      <Nav session={session} size={size} openModal={openModal} />

      <main>{children}</main>
      <AuthModal show={showModal} onClose={closeModal} />
      <Footer />
    </div>
  );
}
