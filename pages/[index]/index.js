import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

import BaseLayout from "../../components/BaseLayout";
import Dashboard from "../../components/Dashboard";

const App = () => {
  const router = useRouter();

  const { index } = router.query;

  return (
    <BaseLayout>{index === "dashboard" ? <Dashboard /> : null}</BaseLayout>
  );
};

export default App;
