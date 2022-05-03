import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react"
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (

    <SessionProvider session={pageProps.session}>
      <ShopProvider>
        {pageProps.noLayout ? (
          <Component {...pageProps} key={router.asPath} />
        ) : (
          <Layout>
            <Component {...pageProps} key={router.asPath} />
          </Layout>
        )}
      </ShopProvider>
    </SessionProvider>

  );
}

export default MyApp;
