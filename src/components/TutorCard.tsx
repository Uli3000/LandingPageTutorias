import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, brown, green, orange, pink, purple, red, yellow } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { LinkedIn, Reddit } from '@mui/icons-material';
import { useMemo } from 'react';

export default function TutorCard({name, subject, gender} : {name: string, subject: string, gender: 'male' | 'female'}) {
  const firstLetter = name.charAt(0)
  const colors = [red, blue, green, yellow, orange, purple, pink, brown]
  const avatarColor = useMemo(() => colors[Math.floor(Math.random() * 8)],[])
  const tutorImageNumber = useMemo(() => Math.floor(Math.random()* (77 - 1)) + 1, [])

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: `${avatarColor[500]}` }} aria-label="recipe">
            {firstLetter}
          </Avatar>
        }
        title={name}
        subheader={subject}
      />
      <CardMedia
        component="img"
        height="194"
        image={`https://xsgames.co/randomusers/assets/avatars/${gender}/${tutorImageNumber}.jpg`}
        alt="Tutor image"
        sx={{objectFit: 'contain'}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum esse magnam quos unde totam, placeat nemo dolorum incidunt repellat obcaecati labore, quidem, nobis quia? Tempora dolor eum quam quisquam in.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="linkedin">
          <LinkedIn />
        </IconButton>
        <IconButton aria-label="reddit">
          <Reddit />
        </IconButton>
      </CardActions>
    </Card>
  );
}
