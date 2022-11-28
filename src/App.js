import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/layout";
import { ROUTES } from './routes/routes'
import './app.scss';

function App() {
  return (
    <div className="app" style={{ background: 'url(../../assets/bg.jpg)' }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            {ROUTES.map((route, index) => {
              return <Route key={index} path={route.path} element={route.element} />
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
