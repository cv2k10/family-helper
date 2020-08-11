import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import Avatar from "react-avatar";

const NoUser = () => {
  const authFb = useSelector((state) => state.authFb);
  const fbRedirectPath = useSelector((state) => state.control.fbRedirectPath);

  return (
    <Link href="/user-menu">
      {/* <a><img style={{width:"40px", height:"40px", borderRadius: "50%"}} src={authFb.pictureUrl} /></a> */}
      <Avatar
        facebookId={"000000000000000000"}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFOklEQVRoge2aWWxVRRjHf22jUWiVSnGrFFppAVu0hsTgisbtVUFEXIpL4oMxmpBYcUN9kAcrPmB8kKASVxJDQowSEx8gMWKISjAN1taQoFFcWhNqF6Hc3uvD901m7uX0nJlzDvrSf3Lz3Zz5f8vcM/PNzDcXpjGNU4KqnO3NA5YDHUAbMAeYqW1jwCDQDxwE9gA/5+w/E5qB54EBoBT4+QHYAMzPGkSWN9IOPAPcCdTos++B3cB+oA/4AxjWtrOB84FFwFLgBmCxtk0C24GXVO8/QS2wCTiB/KpDGsDCFLYWARvVRgmYAHqww/GUoRMZ4yXgb6Ab6VhW1AJPAiNquw+4NAe7kVgB/KOOPgEaPQOcr9zTPPiNwKfqYxy4LU2gcXgAKCBjuZv4uXU18CbwE+UTewzYCVyW4KsKWK++CsDaLIG7WKEGjwN3xfBmAR9hAy8CR4CvgX3AX9hfegOSLOKwRn0WyOHNdCLDaRJYHcObCXyrgQ4ADyMdc1EN3IEdnkVgG3BmjN016nucDHOmFrs2dCdwNytvDyd3oBKdwDrgF9X5IIH/FHbNSZVYNmEndtycmIUMgRFgboD9ucCv6uPKGF4VsEt5PQH2ARm/J5AUe2ECd7U6eSfUCfJmSsArCbyLkB9qAll7vPGhOnjCg2veXJrs0qm6n3twzRB7z9d4C5IpBvFbYbepg1t8HTioV92DHtxaZAdQIGJvVh2h0IXsnd5Acn8SzlA57sGdyr/Pnm8U2ILE1jWVIRf3qPQd80MqZ3vyXZynctCT/67KuysbKjvSDCxAXvWAp/HfVV7gyXfRpvKQJ79PPwuBJrehsiPLVe4OCOY7lZ0BOgbXqNwboGNiu959WNmRDpXfBBjer/KKAB2D61R+GaBjYutwH1Z2xLzq/gDDN6o8K8JeHE4HGvT70gA9E1ub+7DSsTH8W4DhW1U+juyffDEBPKbfrw3QM7HNcR9WdqRO5WiA4SMqk3YAUTBnmuFYVjlGVNbFkXqRBSokld6sOocIW93Xqk4JuClAr0F1euNIe5U0L8AwyEGqmGS8Ar2qszXQVzMSY2yC+FhJywKNg5xHiuooCRcrNyQ7GlyFxLjTfVg5R8wi2EY4diBbjec8uM8qd0cKPya22AX7fqS3m1M4qEe2K0VgVQxvlXKGVCcUryMxnrTfcmHGX8hYd3E7cjSdaog1a9skUgtIgz4kxqYk4o9KTFNwA5swWiPaWrUtZEviYjH22FuGqJXYnKFjX10MTP2q5MEJhYkp6ZwP2IPVEOlKlweQTkQtkI3adiCF3TqkpFTALzMCUlAuIWXMELQjh7HjwIyI9hnaNgZcEmj7aQKPuiYgU3zwLY2uA46qs5djuD3KOao6PiWe1MUHsEWFXUQfRauQ88QWZK9kim4bsdcMUahRThFbDN+KbOmj/FQDn5GyHATlBbr1zvMGZNEz+6QScAyZgCHVwCWqc8yxcxi5NHJ3tmZIpS7QQXnJ9D41OuY43gc8CpyT1oHqPgJ85dgdQy6RupA3l6lkarASyRTGibldWpLVcATakbc06fgrIAttLngI25m3iZ8DWVEDvIXtxIN5O1iJraR/QUAuD0ALsj031w+5vYlKXI5NAMPIPUeW+WEwG3gByWBmYiddCGVGHfAq9jJ0BClCL0hhqxVJ8+bu0FyG5nEv6Y12pNjtJoJe5AhwL3I4a0K26vX6fRmS/V7DHqvNXHgfe139v6AFeBG7aw759CNDKvN8y/svHM1ItbIdOQacix0mo8CflP+F43DO/qcxjbzxL3VBcDMQW6Z7AAAAAElFTkSuQmCC"
        size={"30"}
        round={true}
        textSizeRatio={2.5}
        fgColor={"#FFFFFF"}
        color={"#AAAAAA"}
      />
    </Link>
  );
};

export default NoUser;