import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import exppic from '../snapshot.jpg';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function Experience(){
    return (
        <Box sx={{ width: '100%' }}>
        <Grid direction='column' justifyContent="center" alignItems="stretch" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item textAlign='left'>
              <Typography variant='h3' align='left'>
              3D modelling
              </Typography>
              <img src={exppic} height='300' align='center' />
              <Typography align='left'>
              3D modelling using CloudCompare
                <Typography display="block"> 
                  My text will be on the next line 
                </Typography>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
          <Item textAlign='left'>
              <Typography variant='h3' align='left'>
              FYP project
              </Typography>
              <img src={exppic} height='300' align='center' />
              <Typography align='left'>
              3D modelling using CloudCompare
                <Typography display="block"> 
                  My text will be on the next line 
                </Typography>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
      </Box>
    )
}