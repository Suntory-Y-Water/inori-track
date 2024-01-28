import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import Live from './components/Live';
import SetList from './components/SetList';
import LiveDetail from './components/LiveDetail';
import Venue from './components/Venue';
import Result from './components/Result';

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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
