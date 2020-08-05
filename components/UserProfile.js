import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';

import NoUser from './NoUser';
import LoginUser from './LoginUser';

const UserProfile = ({pageProps}) => {
  const authFb = useSelector(state => state.authFb);

  return (
    <>
    {pageProps.user || authFb.isAuth ? <LoginUser />: <NoUser />}
    </>
  );
}

export default UserProfile;