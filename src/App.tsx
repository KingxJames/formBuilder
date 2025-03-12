import "./App.css";
import { CreateFormPage } from "./pages/CreateFormPage/CreateFormPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/FormBuilder/Header/Header";
import { FormElements } from "./components/FormBuilder/FormElement/FormElement";
import { WorkFlow } from "./components/FormBuilder/Workflow/WorkFlow";
import { FormBuilder } from "./components/FormBuilder/FormBuilder";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormBuilder />} />
          {/* <Route path="/" element={<WorkFlow  name="" />} /> */}
          {/* <Route path="/" element={<FormElements />} /> */}
          {/* <Route path="/" element={<Header />} /> */}
          {/* <Route path="/" element={<CreateFormPage />} /> */}
          <Route path="/create-form" element={<CreateFormPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
