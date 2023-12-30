import { Layout } from './shared/Layout/layout';
import "normalize.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/login';
import { RestrictArea } from './pages/Restrict/restrictArea';
import { Home } from './pages/Home/home';
import { AuthContextProvider } from './contexts/AuthContext';
import { SignOn } from './pages/SignOn/signOn';
import { Cart } from './pages/Cart/cart';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
          <Layout>
            <Routes>
              {/* Public Routes */}
              <Route path='/' element={<Home />}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/signon' element={<SignOn/>}/>
              <Route path='/cart' element={<Cart/>}/>

              {/* Private Routes */}
              <Route path='/restrict' element={<RestrictArea />} />
            </Routes>
          </Layout>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
