import { Chip, Container, Divider, Grid, List, ListItem, Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/cesna.png';
// custom styling
const useStyles = makeStyles({
    background: { backgroundColor: '#F6F6F6', marginTop: '160px' },

})
const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.background}>
            <Container sx={{ mt: '60px', py: '60px' }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Grid item>
                        <img src={logo} alt="footer logo" />
                    </Grid>
                    <Grid item>
                        <Stack direction="row" spacing={1}>
                            <Chip label={<i className="fab fa-linkedin-in"></i>} />
                            <Chip label={<i className="fab fa-twitter"></i>} />
                            <Chip label={<i className="fab fa-facebook-f"></i>} />
                            <Chip label={<i className="fab fa-instagram"></i>} />
                            <Chip label={<i className="fab fa-youtube"></i>} />
                        </Stack>
                    </Grid>
                </Grid>
                <Divider variant="middle" sx={{ py: '5px' }} />
                <Grid container spacing={4} sx={{ mt: '10px' }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h4' component={'h4'} sx={{ fontSize: '18px' }}>
                            Site Map
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link to='/'>Search Jobs</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/jobs'>Job seekers</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/employers'>Employers</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/about-us'>About Us</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/join-us'>Join Us</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/contact-us'>Contact Us</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h4' component={'h4'} sx={{ fontSize: '18px' }}>
                            Blogs
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link to='/'>Search Jobs</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/jobs'>Job seekers</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/employers'>Employers</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/about-us'>About Us</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/join-us'>Join Us</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/contact-us'>Contact Us</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h4' component={'h4'} sx={{ fontSize: '18px' }}>
                            Contact Us
                        </Typography>
                        <List>
                            <ListItem disablePadding>
                                <Link to='/'>Search Jobs</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/jobs'>Job seekers</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/employers'>Employers</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/about-us'>About Us</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/join-us'>Join Us</Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link to='/contact-us'>Contact Us</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant='h4' component={'h4'} sx={{ fontSize: '18px' }}>
                            Subscribe for update
                        </Typography>

                    </Grid>
                </Grid>
                <Grid container item spacing={2} sx={{ pt: '60px' }}>
                    <Typography variant='9' component={'p'}>
                        © 2021 Cesna Jobs – Recruitment experts worldwide
                    </Typography>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;