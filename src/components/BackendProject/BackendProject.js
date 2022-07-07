import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useMediaQuery } from 'react-responsive';

import { backEnd } from '../../data';
import './backendProject.css';

export default function Projects() {
	const isMobile = useMediaQuery({
		query: '(max-width: 899px)',
	});

	return (
		<Container>
			<h1 className="backend-project-title">Back End Projects</h1>
			<div className="backend-project-text">
				<p>
					The back-end, also called the server side, consists of the server
					which provides data on request, the application which channels it, and
					the database which organizes the information.
				</p>
				<p>
					The projects below ranged from using a combination of technologies and
					frameworks such as JavaScript, Inquirer, SQL, NoSQL, Sequelize,
					Express, and Node.
				</p>
			</div>
			<Grid
				container
				spacing={2}
				sx={
					isMobile
						? {}
						: {
								border: 'solid 20px #363535',
								padding: '2rem',
								borderRadius: '30px',
								justifyContent: 'center',
						  }
				}>
				{backEnd.map((item) => {
					return (
						<Grid
							item
							md={4}
							sm={12}
							xs={12}
							key={item.id}
							sx={{
								display: 'flex',
								justifyContent: 'center',
							}}>
							<Card sx={{ width: isMobile ? 'auto' : 345 }}>
								<CardMedia
									component="img"
									alt="Project image"
									height="200"
									image={item.img}
									sx={{
										width: '100%',
										objectFit: 'contain',
									}}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h6"
										component="div"
										sx={{
											fontWeight: '700',
											textTransform: 'uppercase',
											textAlign: 'center',
										}}>
										{item.title}
									</Typography>
								</CardContent>
								<CardActions
									sx={{
										display: 'flex',
										justifyContent: 'center',
									}}>
									<Button
										size="small"
										href={item.repo}
										target="_blank"
										rel="noreferrer"
										sx={{
											color: '#ff4500',
											fontWeight: '700',
										}}
										className="btn-text">
										See the Code
									</Button>
								</CardActions>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}
