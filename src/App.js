import { AppProvider } from './components/contexts/ArticlesContext';
import Home from "./Pages/Home";
import ArticleDetails from "./Pages/ArticleDetails";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const  App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
