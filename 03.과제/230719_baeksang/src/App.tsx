import { RoutesComponent } from '@/routes/routes';
import { Header } from '@/components';
import { Footer } from '@/components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header />
      <RoutesComponent />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
