import React from 'react';
import {Container, Grid} from '@material-ui/core';

import UserContextProvider from '../context/userContext'
import GithubContextProvider from '../context/githubContext'
import Education from '../components/Education';
import Skills from '../components/Skills';
import UserProfile from '../components/UserProfile';
import ProtocolHeading from '../components/ProtocolHeading';
import WorkExperience from '../components/WorkExperience';
import LogoutBanner from '../components/LogoutBanner';
import Github from './Github';
import EndorseExp from './EndorseExp';

const BodyContainer = () => {

    return (
        <div className="body-container">
            <Container>
                <LogoutBanner />
                <UserContextProvider>
                    <UserProfile />
                    <EndorseExp />
                    <ProtocolHeading />
                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={12} md={8} lg={8}>
                            <WorkExperience />
                            <Education />
                        </Grid> 
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Skills />
                            <GithubContextProvider>
                                <Github />
                            </GithubContextProvider>
                        </Grid> 
                    </Grid>
                </UserContextProvider>
            </Container>
        </div>
    )
}


export default BodyContainer;