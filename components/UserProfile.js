import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';

import NoUser from './NoUser';
import LoginUser from './LoginUser';

const UserProfile = () => {
  const authFb = useSelector(state => state.authFb);

  return (
    <>
    {authFb.isAuth ? <LoginUser />: <NoUser />}
    </>
  );
}

export default UserProfile;