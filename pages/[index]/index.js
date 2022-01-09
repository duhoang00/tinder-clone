import { useRouter } from "next/router";

import BaseLayout from "../../components/BaseLayout";
import Dashboard from "../../components/Dashboard";
import Liked from "../../components/Liked";
import Passed from "../../components/Passed";

const App = () => {
  const router = useRouter();

  const { index } = router.query;

  return (
    <BaseLayout>
      {index === "dashboard" ? (
        <Dashboard />
      ) : index === "liked" ? (
        <Liked />
      ) : index === "passed" ? (
        <Passed />
      ) : null}
    </BaseLayout>
  );
};

export default App;
