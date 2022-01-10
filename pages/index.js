import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    fetch("/api");
    router.push("/[index]", "/dashboard");
  }, [router]);
  return null;
};

export default Home;
