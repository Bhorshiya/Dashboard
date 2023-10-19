// import './App.css';
// import React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import WavingHandIcon from '@mui/icons-material/WavingHand';
// // import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { Divider, Grid } from '@mui/material';

// const drawerWidth = 240;

// const text = 100;
// function App() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//             bgcolor: 'midnightblue',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Typography 
//         sx={{
//           color: 'white',
//           textAlign: 'center'
//         }}variant = "h5">Dashboard</Typography>
//         <Toolbar />
//         {/* <Divider /> */}
//         <List 
//         sx={{
//           color:'white'
//         }}>
//           {['Dashboard', 'Product', 'Customers', 'Income', 'Promote', 'Help'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//         <Toolbar />
//         <Divider/>


//         <Grid container spacing={1}>
//             <Grid xs={6}>
//               <Typography paragraph >
//                 Hello Shahrukh <WavingHandIcon
//                 sx={{
//                   color: 'wheat'
//                 }}/>
//               </Typography>
//             </Grid>
            
//           {/* <Divider/> */}
//           <Box 
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               '& > :not(style)': {
//                 m: 1,
//                 width: 250,
//                 height: 128,
//                 margin: 3,
//               },
//             }}
//           >
//             <Paper elevation={5}></Paper>
//             <Paper elevation={5} />
//             <Paper elevation={5} />
//             <Paper elevation={5} />
//           </Box>

//           <Box 
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               '& > :not(style)': {
//                 m: 1,
//                 // width: 200,
//                 // height: 128,
//                 margin: 3,
//               },
//             }}
//           >
//             <Paper elevation={5} sx={{
//               width:800,
//               height:350,
              
//             }}> 
            
//             <Typography sx={{
//               marginLeft:2,
//               color:'black'
//               }} variant='h6'> <strong>
//                 Overview
//                 </strong>
//             </Typography>
//             <Typography sx={{
//               marginLeft:2,
//               color:'gray',
//               }} variant='h7'>
//                 Monthly Earnings
//             </Typography>
            
//             </Paper>

//             <Paper elevation={5} sx={{
//               width:300,
//               height:350,
//             }}>
//               <Typography sx={{
//               marginLeft:2,
//               color:'black'
//               }} variant='h6'> <strong>
//                 Customers
//                 </strong>
//             </Typography>
//             <Typography sx={{
//               marginLeft:2,
//               color:'gray',
//               }} variant='h7'>
//                 Customers that buy Products
//             </Typography>




//             </Paper>
//           </Box>
//         </Grid>


//       </Box>

//   );
// }

// export default App;




import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App