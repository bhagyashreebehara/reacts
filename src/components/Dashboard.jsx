import React from 'react'
import  Row  from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import Header from './Header'
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';




const data = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxVEmvpLMenxT_Wg84DngwEzZfB2Jm5-Ffeg&s',
    title: 'Rado Watch',
    description: '4.21M views',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2067_yU7kMXUlWDYixMKA99F41iwYNgISdQ&s',
    title: 'FastTrack Watch',
    description: '4.74M views',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZ5HVXsuw_8KUf_RF2TeoyadPprTgHScmfw&s',
    title: 'Fossil Watch',
    description: '3.98M views',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbLQwmesOvDKxUGcHsoGKzUrDteRyeHweqQ&s',
    title: 'Armani Watch',
    description: '3.98M views',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJxXPpXoxstALKx4xe99YDSAxtBMOxm7WVA&s',
    title: 'TiTan Watch',
    description: '3.98M views',
  }
];


 function BasicLineChart() {
  return (
    <div>
    <Row>
    <Col sm={2}>
    <Header/>
    </Col>
    <Col sm={10}>
    <h1 className='huuu'>DASHBOARD</h1>

    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <p>% percentage of  <br />
      buyers</p><Gauge width={100} height={100} value={60}/> 
      <p>% percentage of production </p>
      <Gauge width={100} height={100} value={50} valueMin={10} valueMax={60} />
    </Stack>
    </Col>
    <br />
    <Row>
      <Col sm={2}></Col>  
   <Col sm={5}>
   <br />
   <br />
   <br />
   <h2>Profit & Loss Statistics</h2>
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
 </Col>
 <Col sm={5}>
 <br />
 <br />
 <br />
 <h2>Pie chart of Production</h2>
 <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'buyers' },
            { id: 1, value: 15, label: 'brands' },
            { id: 2, value: 20, label: 'production' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
</Col>
 </Row>
   </Row>
  
        </div>
  )
}

export default BasicLineChart
