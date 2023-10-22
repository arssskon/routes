import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageViewSet } from './components/PageViewSet';
import { PageCreateSet } from './components/PageCreateSet';
import { FormCreateSet } from './components/FormCreateSet'
import { FormCreateCard } from './components/FormCreateCard'


import { PageSelectSet } from './components/PageSelectSet';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageSelectSet/>} />
        <Route path="/set" element={<PageViewSet/>} />
        <Route path="/admin" element={<PageCreateSet/>} > 
            <Route path="set" element={<FormCreateSet/>}/>
            <Route path="card" element={<FormCreateCard/>}/>
        </Route>
        <Route path="*" element={<PageCreateSet/>} />

        <Route path="/set/:id" element={<PageViewSet/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
