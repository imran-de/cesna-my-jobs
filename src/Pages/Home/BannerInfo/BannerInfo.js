import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import image from '../../../Images/home2.png';
import useStyles from '../../Shared/Styles/useStyles';
const BannerInfo = () => {
    const classes = useStyles();
    return (
        <Box>
            <Container>
                <Grid container spacing={2} sx={{ my: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <img src={image} alt="images" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h2' component={'h2'} className={`${classes.title} title`}>
                            Linking top-level candidates to the best companies worldwide
                        </Typography>
                        <Typography variant='p' component={'p'} sx={{ mt: '40px' }}>
                            Cesna Recruitment was incorporated in Seoul in 1999 and founded its first international branch in New York, United States in 2003. Since then, we have helped over 4,000 companies shape the global industry landscape, and have expanded to business offices in San Jose, New Jersey, Dallas, Washington DC, Shanghai, and Singapore. <br /> <br />

                            We help our clients search for successful and motivated employees who will contribute to a dynamic, productive, and efficient professional environment.

                        </Typography>
                        <Button className={classes.bgRed} sx={{ mt: '60px', px: '30px', py: '10px', backgroundColor: '#E40046', color: '#F9F9F9', ":hover": { color: '#E40042' } }}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BannerInfo;