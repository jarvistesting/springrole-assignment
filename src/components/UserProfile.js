import React, {useContext} from 'react';
import {Card, CardContent, Box, Grid} from '@material-ui/core';
import {isEmpty} from 'lodash';

import {userContext} from '../context/userContext';
import ButtonWhite from './ButtonWhite';
import { ReactComponent as MessageIcon } from '../images/message_icon.svg';

const UserProfile = () => {
    const {userData} = useContext(userContext);

    return (
        !isEmpty(userData) ? (
            <Card className="education-box-container">
                <CardContent className="profile-card-content">
                    <Box className="profile-box-ctr">
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={2} md={3}>
                                <div className='profile-img-ctr'>
                                    <img src={userData.user_details.avatar_url} alt="User Profile" />
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={10} md={9} className="detail-container">
                                <Box className="info-ctr">
                                    <div className="info-left-section">
                                        <p className="user-name">{userData.user_details.name}</p>
                                        <p className="user-designation">{userData.user_details.current_job_designation} at {userData.user_details.current_company}</p>
                                        <p className="user-location">{userData.user_details.current_location}</p>
                                    </div>
                                    <div className="info-right-section">
                                        <ButtonWhite>
                                            Message
                                            <MessageIcon />
                                        </ButtonWhite>
                                    </div>
                                </Box>
                                <Box className="user-proficiency-parent" mt={4}>
                                    <Grid container spacing={3}>
                                        {
                                            userData.skills.map((item, index) => {
                                                return (
                                                    <Grid item xs={12} sm={3} lg={2} md={3} className="skill-widget-grid-ctr">
                                                        <div className="skill-widget-ctr">
                                                            <div>{item.skill_name}</div>
                                                            <div className="click-ctr click-ctr-5"></div>
                                                        </div>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Box>
                                <Box className="user-profile-url">
                                    <p className="url">{userData.user_details.url}</p>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        ) : (
            null
        )
    );
}

export default UserProfile;