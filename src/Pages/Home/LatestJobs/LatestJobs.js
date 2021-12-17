import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../Shared/Styles/useStyles';

const LatestJobs = () => {
    const classes = useStyles();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <Box className={classes.bgOfWhite}>
            <Container sx={{ py: '45px' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Typography variant='h2' component={'h2'} className={`${classes.title} title`}>
                        Latest Jobs
                    </Typography>
                    <Typography variant='div' component={'div'} sx={{ pt: '20px' }}>
                        <Link to='/jobs' className={classes.colorRed}>view all <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i></Link>
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{ mt: '60px' }}>
                    {
                        jobs.map((job, index) => <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper elevation={3} sx={{ p: '20px', height: '80%' }}>
                                <Typography variant='h6' component={'h6'} className={classes.jobTitle}>
                                    {job?.title.slice(0, 30)} {job?.title.length > 30 && "..."}
                                </Typography>
                                <Typography variant='p' component={'p'} sx={{ mt: '20px' }}>
                                    Location
                                </Typography>
                                <Typography variant='p' component={'p'} sx={{ mt: '20px' }}>
                                    {job?.body.slice(0, 100)} {job?.body.length > 100 && "..."}
                                </Typography>
                                <Button sx={{ my: '20px', px: '30px', py: '10px', color: '#E40046', fontWeight: '700', textTransform: 'uppercase' }}>
                                    Read More <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                                </Button>
                            </Paper>
                        </Grid>
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default LatestJobs;