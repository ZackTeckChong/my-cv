import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import exppic from '../snapshot.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { border, borderRadius } from '@mui/system';
import { blue } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border: 0

    
  }));

 const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '16px'
    
  }));


export default function Experience(){
    return (
        <Box sx={{ width: '100%' }}>
        <Grid direction='column' justifyContent="center" alignItems="stretch" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item >
            <Typography variant='h3' align='left'>
              Internship
              </Typography>
              <Item2>
            <ImageList sx={{ width: 700, height: 500 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">3D Modelling Photo</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Item2>
    <Typography align='center' variant='h6'>
    use equipment collect data at the site, 
    and turn the data into a pointcloud to form a 3D model and place it on the client's website
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
          <Item textAlign='left'>
              <Typography variant='h3' align='left'>
              FYP project
              </Typography>
              <Item2>
            <ImageList sx={{ width: 1000, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
      <ListSubheader component="div">Hybrid of Bluetooth Beacon with Wi-Fi Mapping for Improving Indoor Positioning</ListSubheader>
      </ImageListItem>
      {itemData2.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Item2>
              <Typography align='center' variant='h6'>
              Use matlab to form the coordinates and optimal number of the best placement of bluetooth beacon for each shape
                
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    )
}


const itemData = [
    {
      img: '/Pic/SIANGTITEMPLE.PNG.jpg',
      title: 'Cat Musuem',
      author: 'TIC',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: '/Pic/CANE.PNG.jpg',
      title: 'Sugar Cane Juicer',
      author: 'TIC',
    },
    {
      img: '/Pic/MERIAM.PNG.jpg',
      title: 'Cannon',
      author: 'TIC',
    },
    {
      img: '/Pic/SKIHTEMPLE.PNG.jpg',
      title: 'Sikh Temple',
      author: 'TIC',
      cols: 2,
    },
  ];


  const itemData2 = [
    {
      img: '/Pic/BEACON2.png',
      title: 'Triangle',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: '/Pic/beacon.png',
      title: 'Square',
    },
  ];