import { RoutesComponent } from '@/routes/routes';
import { Header } from '@/components';
import { Footer } from '@/components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvier } from '@/Providers';

const App = () => {
  return (
    <>
      <UserProvier>
        <Header />
        <RoutesComponent />
        <Footer />
      </UserProvier>
      <ToastContainer />
    </>
  );
};

export default App;
