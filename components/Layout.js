import React, { useState } from "react";
import Footer from "./Footer";
import CtaProfessionals from "./CtaProfessionals";
import AuthModal from "./AuthModal";

import Nav from "./Nav";
import useWindowSize from "../utils/useWindowSize";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const size = useWindowSize();
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === "loading";
  console.log("user", user);
  const [showModal, setShowModal] = useState(false);
  const [showModalPro, setShowModalPro] = useState(false);
  const [professionalsHistory, setProfessionalsHistory] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const openModalPro = () => setShowModalPro(true);
  const closeModalPro = () => setShowModalPro(false);
  // useEffect(() => {
  //   console.log("data", session);
  //   console.log("status", status);
  //   console.log("user", user);
  //   console.log("isLoadingUser", isLoadingUser);
  // }, [session, status, user, isLoadingUser]);

  return (
    <div className="flex flex-col  min-h-screen">
      <Nav
        session={session}
        size={size}
        openModal={openModal}
        openModalPro={openModalPro}
        setProfessionalsHistory={setProfessionalsHistory}
      />

      <main>{children}</main>
      <AuthModal
        show={showModal}
        onClose={closeModal}
        professionalsHistory={professionalsHistory}
      />
      <CtaProfessionals
         show={showModalPro}
         onClose={closeModalPro}

      />
      <Footer />
    </div>
  );
}
