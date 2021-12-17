import { Container, FormControl, Grid, OutlinedInput, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Banner from '../../Shared/Banner/Banner';

import joinUs from '../../../Images/joinus.png';
import { useForm } from 'react-hook-form';

const JoinUs = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Box>
            <Banner />
            <Container>
                <Grid container spacing={2} sx={{ my: '40px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography className='title' variant='h2' component={'h2'}>
                            Careers at Cesna
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='p' component={'p'} sx={{ width: { xs: '100%', md: '70%' } }}>
                            Cesna Recruitment is continually expanding our global business network scale to various positions in diverse industries around the world, thereby giving rise to new and valuable connections between talented professionals and corporations.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={joinUs} style={{ width: '456px', maxWidth: '100%', margin: 'auto' }} alt="a man and woman stand focus on screen" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ width: '584px', maxWidth: '100%', margin: 'auto' }}>
                            <Typography variant='h2' sx={{ fontSize: { xs: '24px', md: '50px' } }}>
                                Apply to be a Recruiter at Cesna Recruitment
                            </Typography>

                            <Box component='from' onSubmit={handleSubmit(onSubmit)}>
                                <FormControl sx={{ width: '90%' }}>
                                    <OutlinedInput placeholder="First Name" {...register("firstName")} />

                                </FormControl>
                                <FormControl sx={{ width: '90%', mt: '10px' }}>
                                    <OutlinedInput placeholder="Last Name" {...register("lastName")} />
                                </FormControl>
                                <FormControl sx={{ width: '90%', mt: '10px' }}>
                                    <OutlinedInput type='email' placeholder="xyz@domain.com" {...register("email")} />
                                </FormControl>
                                <FormControl sx={{ width: '90%', mt: '10px' }}>
                                    <OutlinedInput placeholder="phone Number" {...register("email")} />
                                </FormControl>
                                <FormControl sx={{ width: '90%', mt: '10px' }}>
                                    <OutlinedInput type='password' placeholder='password' {...register("password", { required: true })} />
                                </FormControl>
                                <FormControl sx={{ width: '90%', mt: '10px' }}>
                                    <OutlinedInput type='file' placeholder="upload resume" {...register("resume")} />
                                </FormControl>

                                {/* errors will return when field validation fails  */}
                                {errors.exampleRequired && <span>This field is required</span>}

                                <Button type="submit" variant='contained' sx={{ backgroundColor: '#E40043', mt: '20px', px: '40px' }}>Submit</Button>

                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default JoinUs;