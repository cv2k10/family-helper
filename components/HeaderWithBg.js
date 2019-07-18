const HeaderWithBg = props => {
  return (
    <div className="header-bg">
      <h1>{props.title}</h1>
      <style jsx>{`
        .header-bg {
          background: url(${props.bgimg}) center center / cover no-repeat;
          height: 8.4em;
          display: flex;
        }
        .header-bg h1 {
          font-size: 1.5em;
          text-align: center;
          text-shadow: 0 2px 9px rgba(0,0,0,.43);
          margin: auto;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default HeaderWithBg;