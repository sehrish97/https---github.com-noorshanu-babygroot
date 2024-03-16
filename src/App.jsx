import AppLayout from "./AppLayout";


import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout />
            }
          />
       
        </Routes>



    </BrowserRouter>
  );
}

export default App;