import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router và Routes từ react-router-dom
import BreedList from './components/BreedList';
import ErrorPage from './components/ErrorPage';

const App: React.FC = () => {
  return (
    <Router>  {/* Bọc toàn bộ ứng dụng trong Router */}
      <Routes>
        {/* Định nghĩa các routes */}
        <Route path="/" element={<BreedList />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

