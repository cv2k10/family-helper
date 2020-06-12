import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';

const LoginUser = () => { 
  const authFb = useSelector(state => state.authFb);

  return (
    <Link href="/auth/logout/">
      <a><img style={{width:"40px", height:"40px", borderRadius: "50%"}} src={authFb.pictureUrl} /></a>
    </Link>    
  );
}

export default LoginUser;