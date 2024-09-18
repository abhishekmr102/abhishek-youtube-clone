import {BrowserRouter,Routes,Route} from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Feed from "./components/Feed";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <AppContext>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
        <Route path="/video/:id" element={<VideoDetails/>}/>
      </Routes>
   </BrowserRouter>
    </AppContext>
  );
}

export default App;