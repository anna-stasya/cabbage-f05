import { useLocation } from 'react-router-dom';
import paths from '../../config/paths';
import BackgroundUser from '../Backgrounds/BackgroundUser/BackgroundUser';
import BackgroundTrans from '../Backgrounds/BackgroundTrans/BackgroundTrans';

export default function Background({ children }) {
    const location = useLocation();

    const locationUser =
    location.pathname === paths.register || location.pathname === paths.login;
  const locationUserActivity =
    location.pathname === paths.transactions ||
        location.pathname === paths.reports;
    
    return (
    <>
      {locationUser && <BackgroundUser>{children}</BackgroundUser>}
      {locationUserActivity && (
        <BackgroundTrans location={location.pathname === paths.reports}>
          {children}
        </BackgroundTrans>
      )}
    </>
  )
}