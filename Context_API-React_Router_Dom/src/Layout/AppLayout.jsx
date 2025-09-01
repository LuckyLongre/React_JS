import { Outlet, useNavigation } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";

export const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <Loader />;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
