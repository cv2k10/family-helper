const moment = require('moment');

const mailCustomer = ({created, fullname, email, gender, age, health, healthstatus, phone, fulladdress, urgent, service, otherservice, date, period, time, price, area, pickup, visit}) => {
    const createdDate = moment(created).format("ddd, DD MMM YYYY");
    const serviceDate = moment(date).format("ddd, DD MMM YYYY");
    const periodText = `${period} Hours Services`;
  const html = `
    <div dir="ltr">
    <div><font size="6" style="font-family:garamond,&quot;times new roman&quot;,serif;font-style:italic;color:rgb(61,133,198)">Family Helper&nbsp; </font><font color="#000000" face="trebuchet ms, sans-serif">Find the helps you've always wanted</font></div>
    <div><font color="#3d85c6" face="garamond, times new roman, serif" size="1"><i>______________________________<wbr>______________________________<wbr>______________________________<wbr>__________________</i></font></div>
    <div>
        <br>
    </div>Dear <b>${fullname}</b>,
    <div>
        <br>
    </div>
    <div>Thank&nbsp;you for ordering a service from Family Helper.&nbsp;</div>
    <div><i>Kindly proceed to make payment amount RM150.00 to our <b>Maybank account: 60123333454</b>.</i></div>
    <div><i>Email or Whatapp bank slip once you have made the payment.</i></div>
    <div>
        <br>
    </div>
    <div>The order information:</div>
    <div>
        <br>
    </div>
    <div>Order Date: <b>${createdDate}</b></div>
    <div>Order Id: <b>203002</b></div>
    <div>Service Name:&nbsp;<b>${service}</b><b><br></b></div>
    <div>Total price:<b>${price}</b></div>
    <div>
        <br>
    </div>
    <div>Full&nbsp;Name: <b>${fullname}</b></div>
    <div>Email Address: <b><a href="mailto:${email}" target="_blank">${email}</a></b></div>
    <div>Gender: <b>${gender}</b></div>
    <div>Age: <b>${age}</b></div>
    <div>
        <br>
    </div>
    <div>Health Status: <b>${health}</b></div>
    <div>Phone&nbsp;Number: <b>${phone}</b></div>
    <div><b><br></b></div>
    <div>Full Address:&nbsp;</div>
    <div><b>${fulladdress}</b></div>
    <div>
        <br>
    </div>
    <div>Urgent Phone Number: <b>${phone}</b></div>
    <div>Service Date: <b>${serviceDate}</b></div>
    <div>Period: <b>${periodText}</b></div>
    <div>Time: <b>${time}</b></div>
    <div>
        <br>
    </div>
    <div>Pickup Location:&nbsp;</div>
    <div><b>${pickup}</b></div>
    <div>
        <br>
    </div>
    <div>Visit Location:&nbsp;</div>
    <div><b>${visit}</b></div>
    <div><b><br></b></div>
    <div>Price: <b>${price}</b></div>
    <div><b><br></b></div    
    <div>Best Regards,</div>
    <div>from&nbsp;</div>
    <div>Family Helper</div>
    <div><b><br></b></div>
    <div style="text-align:center"><a href="https://familyhelper.com.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://familyhelper.com.com&amp;source=gmail&amp;ust=1567151440643000&amp;usg=AFQjCNEByi9lACUw4pNCCB7Y3wLYFshpSA">Family Helper</a> | <a href="mailto:admin@familyhelper.com.my" target="_blank">admin@familyhelper.com.my</a> | 6012-765 3400</div>
</div>`;
  const text = `Family Helper  Find the helps you've always wanted
*____________________________________________________________________________________________________________*

Dear *Daniel Tan*,

Thank you for ordering a service from Family Helper.
*Kindly proceed to make payment amount RM150.00 to our Maybank account:
60123333454.*
*Email or Whatapp bank slip once you have made the payment.*

The order information:

Order Date: *30 Aug 2019*
Order Id: *203001*
Service Name: *Doctor Appointment*
Total price:* RM150.00*

Full Name: *Daniel Tan*
Email Address: *dltan345@gmail.com <dltan345@gmail.com>*
Geender: *Male*
Age: *54*

Health Status: *good*
Phone Number: *012-456 2345*

Full Address:
*425, Jalan Fri Mas 23/21,*
*Taman Kri Mas Industrial Park*
*12300 Kuala Lumpur.*

Urgent Phone Number: *012-324 5356*
Date: *5 Sept 2019*
Start Time: *10:00am*
Period: *4 Hour Service*

Pickup Location:
*425, Jalan Fri Mas 23/21,*
*Taman Kri Mas Industrial Park*
*12300 Kuala Lumpur.*

Visit Location:
*Tawakal Hospital, Setapak, Kuala Lumpur.*

Best Regards,
from
Family Helper

Family Helper <https://familyhelper.com.com> | admin@familyhelper.com.my |
6012-765 3400`;

  return {
    from: '"Family Helper" <webtest@deltaweb.com.my>', // sender address
    to: `${email}`, // list of receivers
    subject: "Order invoice from Family Helper", // Subject line
    text, // plain text body
    html // html body      
  };

};

module.exports = mailCustomer;