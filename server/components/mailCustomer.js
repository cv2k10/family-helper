const mailCustomer = ({fullname, email}) => {
  const html = `Order from <b>${fullname} at ${email}</b>`;
  const text = `Order from ${fullname} at ${email}`;

  return {
    from: '"Family Helper" <lfei2k@gmail.com>', // sender address
    to: "cv2k10@gmail.com", // list of receivers
    subject: "Mail from Family Helper", // Subject line
    text, // plain text body
    html // html body      
  }
};



module.exports = mailCustomer;