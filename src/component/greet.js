import React, { Component } from 'react'
import Skillbar from 'react-skillbars';
import Typography from '@mui/material/Typography';

const skills = [
    {type: "CloudCompare", level: 80},
    {type: "Blender", level: 80},
    {type: "python", level: 40},
    {type: "Java", level: 40},
    {type: "Javascript", level: 50},
    {type: "React", level: 55},
    {type: "html", level: 50},
    {type: "python", level: 55},
    {type: "matlab", level: 75},
  ];

  const additionalSkill = [
    {type: "Office", level: 85},
    {type: "Photoshop", level: 75},
    {type: "PremierPro", level: 75},
  ];

  const colors = {
    bar: "#3498db",
    title: {
      text: "white",
      background: "#black",
    }
    
  };

function Greet(){
return(
    <div>
    <Typography>Skills</Typography>
    <Skillbar skills={skills} height={50}/>
    <Typography>Additional Skills</Typography>
    <Skillbar skills={additionalSkill} height={50}/>
    </div>
)

}

export default Greet