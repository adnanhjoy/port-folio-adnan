import { Toaster } from 'react-hot-toast'
import './App.css'
import Loader from './components/loader/Loader';
import { Suspense, lazy } from 'react';
const Home = lazy(() => import('./components/Home/Home'));

function App() {

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
      <Toaster />
    </>
  )
}

export default App
