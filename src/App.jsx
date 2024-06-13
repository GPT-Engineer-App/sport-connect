import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { SessionProvider } from "next-auth/react";

function App() {
  return (
    <SessionProvider session={pageProps.session}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </SessionProvider>
  );
}

export default App;
