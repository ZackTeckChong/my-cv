import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





export default function Portfolio() {
        return (
    <div>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="space-around" spacing={4}>
          
            <Grid item>
        <Card  sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="350"
          width="300"
          image="/Pic/IMG_20220703_225134.jpg"
          alt="Home.profile.profilepic"
        />
        <CardContent>
          <Typography variant="h3">
           CHONG KHUI TECK
          </Typography>
          <Typography gutterBottom variant="h5" color="text.secondary">
            SOFTWARE DEVELOPER
          </Typography>
          <Typography   variant="body1" color="text.secondary">
          Phone number : 01119697644
          </Typography>
          <Typography gutterBottom  variant="body1" color="text.secondary">
          Address: 1D, Bukit Lima Timur 2E/3 96000, Sibu, Sarawak
          </Typography>
          <Typography gutterBottom  variant="body1" color="text.secondary">
          Email: ahteckchong@gmail.com
          </Typography>
          
        </CardContent>
        
     </Card>
            </Grid>
            <Grid item>
            <Card  sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="350"
          width="300"
          image="/Pic/catmusuem.PNG"
          alt="Home.experince.pic"
        />
        <CardContent>
          <Typography variant="h3">
           Experience
          </Typography>
          <Typography gutterBottom variant="body1" color="text.secondary">
            3D Modelling
          </Typography>
          <Typography gutterBottom  variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          
        </CardContent>
        
     </Card>
            </Grid>
            <Grid item>
            <Card  sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="350"
          width="300"
          image="/Pic/UNIMAS-logo.png"
          alt="Home.Education.Unilogo"
        />
        <CardContent>
          <Typography variant="h3">
           Education
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
          
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}
