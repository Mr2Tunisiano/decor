import { useSelector } from 'react-redux';
import AdminHero from './components/adminHero';
import AdminPanel from './components/adminPanel';
import Login from './components/login';

function Adminpage() {
  const IsLogged = useSelector((state) => state.login);
  return (
    <>
      <AdminHero />
    {(IsLogged === true) ? <AdminPanel /> : <Login />}
    </>
  );
}
export default Adminpage