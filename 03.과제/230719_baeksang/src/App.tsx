import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { Footer, Header } from '@/components';
import { UserProvier } from '@/providers';
import { RoutesComponent } from '@/routes/routes';

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
