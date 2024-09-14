import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Live from './pages/Live/Live';
import SetList from './pages/SetList/SetList';
import LiveDetail from './pages/Live/LiveDetail';
import Venue from './pages/Venue/Venue';
import Result from './pages/Result/Result';
import { Page404 } from './page404';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/live' element={<Live />} />
          <Route path='/venue' element={<Venue />} />
          <Route path='/result' element={<Result />} />
          <Route path='/set-list' element={<SetList />} />
          <Route path='/set-list/:id' element={<LiveDetail />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
