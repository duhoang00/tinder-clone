import { useRouter } from "next/router";

import BaseLayout from "../../components/BaseLayout";
import Dashboard from "../../components/Dashboard";
import Liked from "../../components/Liked";

const App = () => {
  const router = useRouter();

  const { index } = router.query;

  return (
    <BaseLayout>
      {index === "dashboard" ? (
        <Dashboard />
      ) : index === "liked" ? (
        <Liked />
      ) : null}
    </BaseLayout>
  );
};

export default App;
