import { RoutesComponent } from '@/routes/routes';
import { Header } from '@/components';
import { Footer } from '@/components';

const App = () => {
  return (
    <>
      <Header />
      <RoutesComponent />
      <Footer />
    </>
  );
};

export default App;
