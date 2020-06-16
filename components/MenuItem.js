import Link from 'next/link';

const MenuItem = ({ href, title, textStyle }) => {
  return (
    <li className="sitem">
      <Link href={href}>
        <a className="stitle">
          {textStyle==='strong'? <strong>{title}</strong>: <span>{title}</span> }
        </a>
      </Link>
    </li>
  );
};

export default MenuItem;