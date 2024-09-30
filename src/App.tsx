import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Resume />}></Route>
      </Routes>
    </Layout>
  );
};

export default App;
