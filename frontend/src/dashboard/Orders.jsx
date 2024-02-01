import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useSelector } from 'react-redux';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

const events=[{id:1,name:"Outdoor Wedding Party",link:"https://media.weddingz.in/images/7941daefa912e70969e8804792325945/top-5-outdoor-wedding-venues-in-gurgaon-for-you-to-get-married-in.jpg",price:"150000",location:"Thrissur",dur:"",peop:"",phon:"",statu:"Pending"},
                {id:2,name:"Lagoon Wedding Hall",link:"https://image.wedmegood.com/resized/450X/uploads/member/3391766/1661512242_WhatsApp_Image_2022_08_26_at_4.29.53_PM__2_.jpeg",price:"80000",location:"Coimbatore",dur:"",peop:"",phon:"",statu:"Pending"},
                {id:3,name:"French Town Party Hall",link:"https://image.wedmegood.com/resized/800X/uploads/member/2876203/1646646852_WhatsApp_Image_2022_02_08_at_19.36.31.jpeg",price:"100000",location:"Coimbatore",dur:"",peop:"",phon:"",statu:"Pending"}
              ]
// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const data=useSelector(state=>state)
const bookings=data.allProducts.cartProduct
function filter_status(event) {
  return event.statu == "Pending";
}
function filter_status1(event) {
  return event.statu == "Approved";
}

var pending = bookings.filter(filter_status);
var approved=bookings.filter(filter_status1);
  return (
    <React.Fragment>
      <Title>Pending Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {/* <TableCell></TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>No. of Peoples</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pending.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              {/* <TableCell>{row.price}</TableCell> */}
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.peop}</TableCell>
              <TableCell>{row.phon}</TableCell>
              <TableCell>{row.statu}</TableCell>
              <TableCell align="right">{`$${row.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Title>Approved Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {/* <TableCell></TableCell> */}
            <TableCell>Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>No. of Peoples</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {approved.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              {/* <TableCell>{row.price}</TableCell> */}
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.peop}</TableCell>
              <TableCell>{row.phon}</TableCell>
              <TableCell>{row.statu}</TableCell>
              <TableCell align="right">{`$${row.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
