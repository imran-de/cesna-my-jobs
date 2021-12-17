import { Button, Container, Divider, Grid, InputBase, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import bannerImg from '../../../Images/Banner.png';

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 250, 0.3), rgba(255, 255, 255, 0.3)),url(${bannerImg})`,
        minHeight: '80vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    bgRed: { backgroundColor: '#E40046' },
    ColorRed: {
        color: '#E40046'
    },
    ColorWhite: { color: '#F9F9F9' },
    '@media (max-width: 768px)': {
        dNoneSm: {
            display: 'none',
        },
    },
}
)
const Banner = () => {
    const classes = useStyles();
    return (
        <section className={classes.background}>
            <Box>
                <Container>
                    <Grid container spacing={2} sx={{ pt: '80px' }}>
                        <Grid item xs={12} md={8}>
                            <Typography className={classes.ColorWhite} variant='h1' component={'h1'} sx={{ fontSize: { xs: '36px', md: '70px' } }}>
                                Worldwide <br className={classes.dNoneSm} /> recruitment company
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Typography className={classes.ColorWhite} variant='p' component={'p'} sx={{ borderLeft: `4px solid #E40043`, pl: '15px', mt: '30px' }}>
                                We are a global network of leading executive search professionals  in Asia/Pacific, China, Europe and America.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: '40px' }}>
                        <Grid item xs={12} md={4}>
                            <Button className={classes.ColorRed} variant='text'>Latest Jobs</Button>
                            <Button className={classes.ColorRed} variant='text'>Register</Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: '65px' }}>
                        <Grid item xs={12} md={7}>
                            <Typography variant='h6' component={'h6'} className={classes.ColorWhite}>
                                Job Search
                            </Typography>
                            <Paper
                                component="form"
                                sx={{ display: 'flex', alignItems: 'center' }}>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Job Title, Skills or Key words"
                                    inputProps={{ 'aria-label': 'Job Title, Skills or Key words' }}
                                />
                                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Locations"
                                    inputProps={{ 'aria-label': 'Locations' }}
                                />
                                <Button type="submit" className={classes.bgRed} sx={{ px: '30px', py: '10px', color: '#F9F9F9', ":hover": { color: '#E40042' } }} aria-label="search">
                                    search
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </section>
    );
};

export default Banner;