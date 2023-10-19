import React from 'react'
 import 
 { BarChart,Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart } 
 from 'recharts';
 import WavingHandIcon from '@mui/icons-material/WavingHand';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data2 = [
  { label: '25', value: 5 },
  { label: '50', value: 10 },
  { label: 'Group C', value: 40 },
  { label: 'Group D', value: 30 },
  { label: 'Group E', value: 5 },
  { label: 'Group F', value: 10 },
];

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'top',
  dominantBaseline: 'top',
  fontSize: 20,
}));

const colorScheme = '#FF5733';
function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 5} y={top + height/5}>
      {children}
    </StyledText>
  );
}


function Home() {

    const data = [
        {
          name: 'Jan',
          uv: 6000,
          // pv: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          uv: 5500,
          // pv: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          uv: 10000,
          // pv: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          uv: 6000,
          // pv: 3908,
          amt: 2000,
        },
        {
          name: 'May',
          uv: 7000,
          // pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jun',
          uv: 3000,
          // pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jul',
          uv: 7000,
          // pv: 4300,
          amt: 2100,
        },
        {
          name: 'Aug',
          uv: 8000,
          // pv: 4300,
          amt: 2100,
        },
        {
          name: 'Sep',
          uv: 8000,
          // pv: 4300,
          amt: 2100,
        },
        {
          name: 'Oct',
          uv: 7000,
          // pv: 4300,
          amt: 2100,
        },
        {
          name: 'Nov',
          uv: 7000,
          // pv: 4300,
          amt: 2100,
        },
        {
          name: 'Dec',
          uv: 8000,
          // pv: 4300,
          amt: 2100,
        },
      ];

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Hi Shahrukh <WavingHandIcon sx={{color:'wheat'}}/>,</h3>
        </div>

        <Box 
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 230,
                height: 130,
                margin: 3,
              },
            }}
          >

            <Paper elevation={1} >
                <Grid container spacing={2}>
                <Grid xs={6}><MonetizationOnOutlinedIcon 
                sx={{
                    color:'green', 
                    borderRadius: '100%',
                    opacity:0.5,
                    backgroundColor: 'lightgreen',
                    color: 'green',
                    marginLeft:3,
                    marginTop:3,
                    padding: '30px',
                    fontSize: '40px',
                    alignItems:'center',
                    alignContent:'center',
                    }}
                    />
                    </Grid>
                        <Grid xs={6} sx={{
                            marginTop:3,
                            padding:3,
                        }}>
                            <Typography sx={{color:'gray',fontSize:'15px',}}>Earnings</Typography>
                            <Typography sx={{color:'black',fontSize:'20px',}}><strong>$198K</strong></Typography>
                            <Typography sx={{fontSize:'9px',}}>37.8% this month</Typography>
                        </Grid>
                    </Grid>
            </Paper>
            <Paper elevation={1}>
            <Grid container spacing={2}>
                <Grid xs={6}>
                <ListAltOutlinedIcon
                sx={{
                    color:'green', 
                    borderRadius: '100%',
                    opacity:0.5,
                    backgroundColor: 'violet',
                    color: 'blueviolet',
                    marginLeft:3,
                    marginTop:3,
                    padding: '30px',
                    fontSize: '40px',
                    alignItems:'center',
                    alignContent:'center',
                    }}/>
                    </Grid>
                        <Grid xs={6} sx={{
                            marginTop:3,
                            padding:3,
                        }}>
                            <Typography sx={{color:'gray',fontSize:'15px',}}>Orders</Typography>
                            <Typography sx={{color:'black',fontSize:'20px',}}><strong>$2,4k</strong></Typography>
                            <Typography sx={{fontSize:'10px',}}>2% this month</Typography>
                        </Grid>
                    </Grid>
            </Paper>
            <Paper elevation={1} >
            <Grid container spacing={2}>
                <Grid xs={6}>
            <AccountBalanceWalletOutlinedIcon
                sx={{
                    color:'green', 
                    borderRadius: '100%',
                    opacity:0.5,
                    backgroundColor: 'lightblue',
                    color: 'blue',
                    marginLeft:3,
                    marginTop:3,
                    padding: '30px',
                    fontSize: '40px',
                    alignItems:'center',
                    alignContent:'center',
                    }}/>
                    </Grid>
                        <Grid xs={6} sx={{
                          marginTop:3,
                          padding:3,  
                        }}>
                            <Typography sx={{color:'gray',fontSize:'15px',}}>Balance</Typography>
                            <Typography sx={{color:'black',fontSize:'20px',}}><strong>$2.4k</strong></Typography>
                            <Typography sx={{fontSize:'10px',}}>2% this month</Typography>
                        </Grid>
                    </Grid>

            </Paper>
            <Paper elevation={1} >
            <Grid container spacing={2}>
                <Grid xs={6}>
            <ShoppingBagOutlinedIcon
                sx={{
                    color:'green', 
                    borderRadius: '100%',
                    opacity:0.5,
                    backgroundColor: 'lightpink',
                    color: 'red',
                    marginLeft:3,
                    marginTop:3,
                    padding: '30px',
                    fontSize: '40px',
                    alignItems:'center',
                    alignContent:'center',
                    }}/>
                    </Grid>
                        <Grid xs={6} sx={{
                            marginTop:3,
                            padding:3,
                        }}>
                            <Typography sx={{color:'gray',fontSize:'15px',}}>Total Sales</Typography>
                            <Typography sx={{color:'black',fontSize:'20px',}}><strong>$89k</strong></Typography>
                            <Typography sx={{fontSize:'10px',}}>11% this month</Typography>
                        </Grid>
                    </Grid>
            </Paper>
          </Box>

          <Box 
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                margin: 3,
              },
            }}
          >
            <Paper elevation={1} sx={{
              width:750,
              height:300,
              
            }}> 
            
            <Typography sx={{
              marginLeft:2,
              color:'black'
              }} variant='h6'> <strong>
                Overview
                </strong>
            </Typography>
            <Typography sx={{
              marginLeft:2,
              color:'gray',
              }} variant='h7'>
                Monthly Earnings
            </Typography>

            <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={500}
            data={data}
            margin={{
                top: 5,
                right: 30,
                opacity:0.7,
                borderRadius:20,
            }}
            >
                <XAxis dataKey="name" />
                <Bar dataKey="uv" fill="blue" opacity={0.1}/>
                </BarChart>
            </ResponsiveContainer>
            </div>
            </Paper>
            <Paper elevation={1} sx={{
              width:265,
              height:300,
            }}>
              <Typography sx={{
              marginLeft:2,
              color:'black'
              }} variant='h6'> <strong>
                Customers
                </strong>
            </Typography>
            <Typography sx={{
              marginLeft:2,
              color:'gray',
              }} variant='h7'>
                Customers that buy Products
            </Typography>
            <PieChart
      series={[
        {
          data: data2,
          cx: 100,
          cy: 100,
          innerRadius: 50,
          outerRadius: 80,
          colors: [colorScheme],
        },
      ]}
      height={300}
      slotProps={{
        legend: { hidden: true },
      }}
    >
    </PieChart>
        </Paper>

          </Box>

       <Paper sx={{marginTop:1,}}>

        <Typography sx={{color:'black',marginLeft:2,marginTop:1,}}><strong>Product Sell</strong></Typography>
        <Grid container rowSpacing={1}>
          <Grid xs={6} >
        <Typography sx={{color:'gray', fontSize:15,marginLeft:2,marginTop:1,}}><strong>Product Name</strong></Typography></Grid>
        <Grid xs={2}>
        <Typography sx={{color:'gray', fontSize:15,marginTop:1,}}><strong>Product Name</strong></Typography></Grid>
        <Grid xs={2}>
        <Typography sx={{color:'gray', fontSize:15,marginTop:1,}}><strong>Product Name</strong></Typography></Grid>
        <Grid xs={2}>
        <Typography sx={{color:'gray', fontSize:15,marginTop:1,}}><strong>Product Name</strong></Typography></Grid>
        </Grid>
          <List sx={{ width: '100%', maxWidth: 1400, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <img src='/assets/images/boo1.jpg'></img> */}
        </ListItemAvatar>
        {/* <image src="/assets/images/boo1.jpg/"/> */}
        <ListItemText
          primary="Abstract 3D"
          secondary={
            <React.Fragment>
              <Grid container rowSpacing={1}>
              <Grid xs={5} >
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, itaque!
              </Typography></Grid>
              <Grid xs={2}>
              <Typography sx={{textAlign:'center',marginLeft:8}}>32 in Stock</Typography></Grid>
              <Grid xs={2}>
              <Typography sx={{textAlign:'center',marginLeft:8}}>$45.99</Typography></Grid>
              <Grid xs={2}>
              <Typography sx={{textAlign:'center',marginLeft:8}}>20</Typography></Grid>
              </Grid>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sharphens Illustrations"
          secondary={
            <React.Fragment>
              <Grid container rowSpacing={1}>
              <Grid xs={5} >
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, itaque!
              </Typography></Grid>
              <Grid xs={2}>
              <Typography sx={{textAlign:'center',marginLeft:8}}>32 in Stock</Typography></Grid>
              <Grid xs={2}>
              <Typography sx={{textAlign:'center',marginLeft:8}}>$45.99</Typography></Grid>
              <Grid xs={2}>
              <Typography sx={{textAlign:'center',marginLeft:8}}>20</Typography></Grid>
              </Grid>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List></Paper>
    </main>
  )
}
export default Home