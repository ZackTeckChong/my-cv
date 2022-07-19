import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Education(){
    return(
      <div>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={4}>
          
        <Grid item>
            <Card  sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="500"
          width="300"
          image="/Pic/UNIMAS-logo.png"
          alt="Home.Education.Unilogo"
        />
        <CardContent>
          <Typography variant="h3">
          Universiti Malaysia Sarawak
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
          Bachelor of Computer Science (Computational Science) with Honours
          </Typography>
          <Typography gutterBottom  variant="body2" color="text.secondary">
          Universiti Malaysia Sarawak (2017-2021) Bachelor of
          Computer Science (Hons)- Computational Science,
          Universiti Malaysia Sarawak
          -CGPA 2.93
          </Typography>
          
        </CardContent>
        
     </Card>
            </Grid>
            <Grid item>
            <Card  sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="500"
          width="300"
          image="/Pic/SMKCH.jpeg"
          alt="Home.Education.SMKlogo"
        />
        <CardContent>
          <Typography variant="h3">
           SMK Chung Hua,Sibu
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
          Sijil Tinggi Pelajaran Malaysia (STPM) CGPA 2.08 with Muet Band 3
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
          Sijil Pelajaran Malaysia (SPM) 1As, 1Bs, 7Cs
          </Typography>
      
        </CardContent>
        
     </Card>
            </Grid>
          
        </Grid>
      </Grid>
    </Grid>
      </div>
    );
}