import React, {useContext} from 'react';
import {isEmpty} from 'lodash';
import {Card, CardContent, Box, Divider, Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AvatarGroup } from '@material-ui/lab';

import {userContext} from '../context/userContext';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));

const getEndorsedValue = (endorsedArr = []) => {
    let endorsed_str = '';
    if (endorsedArr.length) {
        for (let i in endorsedArr) {
            endorsed_str = endorsedArr[i].name.full ? `${endorsed_str} ${endorsedArr[i].name.full},` : `${endorsed_str} ${endorsedArr[i].name.first},`;
        }
    } 
    return endorsed_str.substring(0, endorsed_str.length-1);
}

const getAvatar = (endorsedArr = [], classes) => {

    return (
        endorsedArr.map((item, index) => {
            return (
                <Avatar alt="" src={item.avatar_url} className={classes.small} />
            )
        })
    )
}

const Skills = () => {
    const {userData} = useContext(userContext);
    const classes = useStyles();
    
    return (
        !isEmpty(userData) ? (
            <>
                <h2 className="heading">Skills</h2>
                <Card className="skills-box-container">
                    <CardContent className="text-center">
                        {
                            userData && userData.skills.length  ? (
                                userData.skills.map((item, index) => (
                                    <React.Fragment key={`skills_detail_${index}`}>
                                        <Box className="skills-box-content-container">
                                            <h3 className="education-content-heading">{item.skill_name}</h3>
                                            <div className="meter-ctr">
                                                <div className="meter-pellet meter-pellet-1 "></div>
                                                <div className="meter-pellet meter-pellet-2 "></div>
                                                <div className="meter-pellet meter-pellet-3 "></div>
                                                <div className="meter-pellet meter-pellet-4 "></div>
                                                <div className="meter-pellet meter-pellet-5 "></div>
                                                <div className="meter-active-pellet meter-pellet-5 " style={{left: '196px'}}></div>
                                            </div>
                                            <Box className="skills-avatar-container">
                                                <AvatarGroup>
                                                    {getAvatar(item.endorsed_by.users, classes)}
                                                    
                                                </AvatarGroup>
                                                <h3 className="skills-content-description"> 
                                                    Endorsed by {getEndorsedValue(item.endorsed_by.users)}
                                                </h3>
                                            </Box>
                                        </Box>
                                        <Divider />
                                    </React.Fragment>
                                ))
                                
                            ) : null
                        }
                    </CardContent>
                </Card>
            </>
        ): (null)
    );
}

export default Skills;