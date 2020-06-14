import Link from 'next/link';

const MenuItem = ({href, title}) => {
  return (
    <li className="sitem">
      <Link href={href}>
        <a className="stitle">{title}</a>
      </Link>
    </li>
  );
}

export default MenuItem;