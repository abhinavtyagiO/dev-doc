import Navbar from "../components/navbar";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";

function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider value={{ user: {}, username: "abhi" }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
