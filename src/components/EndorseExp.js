import React from 'react';
import {Card, CardContent, Box, Grid, Divider} from '@material-ui/core';

import ButtonWhite from './ButtonWhite';
import ButtonBlue from './ButtonBlue';
import { ReactComponent as GithubIcon } from '../images/github_icon.svg';
import { ReactComponent as VerifiedImages } from '../images/verified_images.svg';


const EndorseExp = () => {
    return (
        <Box mt={4} mb={4}>
            <Card className="education-box-container">
                <CardContent className="profile-card-content">
                    <Box className="endorse-box-ctr">
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={6} md={6} sm={6}>
                            <div className="endorse-item-left">
                                <ButtonWhite>Endorse + </ButtonWhite>
                                <ButtonBlue>Verify Experience</ButtonBlue>
                                <div className="yc-logo">
                                    <img src="https://springrole.com/images/yc-logo.png" />                        
                                </div>
                            </div>
                            </Grid>
                            <Grid item xs={12} lg={6} md={6} sm={6}>
                                <div className="endorse-item-right">
                                    <div className="endorse-github-section">
                                        <div className="endorse-github-icon">
                                            <GithubIcon />
                                        </div>
                                        <div className="experience-text">Github</div>
                                    </div>
                                    <Divider orientation="vertical" />

                                    <div class="experience-bars-ctr">
                                        <div class="bars-ctr">
                                            <div class="experience-txt">11+<span>yrs</span></div>
                                            <div class="grid-bar grid-bar-1"></div>
                                            <div class="grid-bar grid-bar-2"></div>
                                            <div class="grid-bar grid-bar-3"></div>
                                        </div>
                                        <div class="experience-text">Experience</div>
                                    </div>
                                    <Divider orientation="vertical" />

                                    <div className="endorse-verified-section">
                                        <div className="endorse-verified-icon">
                                            <VerifiedImages />
                                        </div>
                                        <div className="experience-text">Verified</div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}


export default EndorseExp;