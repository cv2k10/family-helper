import { useSelector, useDispatch } from "react-redux";
import Link from 'next/link';

import Avatar from "react-avatar";

const LoginUser = () => { 
  const authFb = useSelector(state => state.authFb);
  const fbRedirectPath = useSelector((state) => state.control.fbRedirectPath);

  return (
    <Link href="/user-menu">
      {/* <a><img style={{width:"40px", height:"40px", borderRadius: "50%"}} src={authFb.pictureUrl} /></a> */}
      <Avatar
        name={authFb.name}
        size="30"
        round={true}
        textSizeRatio={2.5}
        fgColor={"#FFFFFF"}
        color={Avatar.getRandomColor("sitebase", [
          "#0077b6",
          "#e9c46a",
          "#006d77",
        ])}
      />
    </Link>
  );
}

export default LoginUser;