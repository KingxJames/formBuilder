import { CreateFormPage } from "./pages/CreateFormPage/CreateFormPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormBuilder } from "./components/FormBuilder/FormBuilder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CreateFormPage />} />
          <Route path="/FormBuilder" element={<FormBuilder />} />

          {/* <Route path="/" element={<WorkFlow  name="" />} /> */}
          {/* <Route path="/" element={<FormElements />} /> */}
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/create-form" element={<CreateFormPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
