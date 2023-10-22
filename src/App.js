import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageViewSet } from './components/PageViewSet';
import { PageCreateSet } from './components/PageCreateSet';

import { PageSelectSet } from './components/PageSelectSet';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set" element={<PageViewSet/>} />
        <Route path="/admim" element={<PageCreateSet/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
