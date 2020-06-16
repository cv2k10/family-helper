const moment = require("moment");
const emailStorekeeper = 'lfei2k@gmail.com';

const mailMessangeToStore = ({ created, fullname, email, phone, message }) => {
  const createdDate = moment(created).format();
  const html = `
    <div dir="ltr">
    <div><font size="6" style="font-family:garamond,&quot;times new roman&quot;,serif;font-style:italic;color:rgb(61,133,198)">Family Helper&nbsp; </font><font color="#000000" face="trebuchet ms, sans-serif">Find the helps you've always wanted</font></div>
    <div><font color="#3d85c6" face="garamond, times new roman, serif" size="1"><i>______________________________<wbr>______________________________<wbr>______________________________<wbr>__________________</i></font></div>
    <div>
        <br>
    </div>Enquiry from <b>${fullname}</b>,
    <div><br></div>

    <div>The messange information:</div>
    <div><br></div>

    <div>Date: <b>${createdDate}</b></div>
    <div>Name: <b>${fullname}</b></div>
    <div>Email: <b><a href="mailto:${email}" target="_blank">${email}</a></b></div>
    <div>Phone: <b><a href="tel:${phone}">${phone}</a></b></div>
    <div><b><br></b></div>

    <div>Message</div>
    <div><b>${message}</b></div>
    <div><b><br></b></div>

    <div style="text-align:center"><a href="https://familyhelper.com.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://familyhelper.com.com&amp;source=gmail&amp;ust=1567151440643000&amp;usg=AFQjCNEByi9lACUw4pNCCB7Y3wLYFshpSA">Family Helper</a> | <a href="mailto:admin@familyhelper.com.my" target="_blank">admin@familyhelper.com.my</a> | 6012-765 3400</div>
</div>`;

  return {
    from: `"Family Helper" <${emailStorekeeper}>`, // sender address
    to: `${emailStorekeeper}`, // list of receivers
    subject: `Enquiry from ${email} Family Helper`, // Subject line
    html, // plain text body
    html, // html body
  };
};

module.exports = mailMessangeToStore;
