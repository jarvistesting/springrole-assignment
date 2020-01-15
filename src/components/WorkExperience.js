import React, {useContext} from 'react';
import {isEmpty, has} from 'lodash';
import {Box, Card, CardContent, Divider, Grid} from '@material-ui/core';

import {userContext} from '../context/userContext';

const WorkExpDetail = (workarr = []) => {
    return(
        workarr.map((item, index) => {
            return (
                <React.Fragment key={`work_exp_${index}`}>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={2} md={2} lg={2} className="work-exp-img-ctr">
                                <img className="work-exp-item-img" src={item.company.logo_url} />
                            </Grid>
                            <Grid item xs={12} sm={7} md={7} lg={7} className="wrok-exp-detail-ctr">
                                <div>
                                    <p className="company-name-header">{item.company.name}</p>
                                    <p className="company-name">{item.designation}</p>
                                    <p className="position-duration">{item.start_date} - {item.end_date} &nbsp; ({item.duration})</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={3} md={3} lg={3}></Grid>
                        </Grid>
                    </Box>
                    {
                        item.skills_data.length > 0 ? (
                            <Box>
                                <Grid container>
                                    <Grid item lg={2} sm={2} md={2} lg={2}></Grid>
                                    <Grid item lg={10} sm={10} md={10} lg={10}>
                                        <p className="workedon">Worked on</p>
                                        {
                                            item.skills_data.map(item => <span className="exp-skills" key={`skill_${item.id}`}>{item.skill_name}</span>)
                                        }
                                    </Grid>
                                </Grid>
                            </Box>
                        ) : (
                            null
                        )
                    }
                    <Divider className="work-exp-detail-divider" />
                </React.Fragment>
            )
        })
    )
}

const WorkExperience = () => {
    const {userData} = useContext(userContext)
    console.log("user experience component", userData);

    return (
        !isEmpty(userData) && has(userData, 'workex')? (
            <Box>
                <h2 className="heading">Work Experience</h2>
                <Card className="education-box-container">
                    <CardContent className="text-left">
                        {WorkExpDetail(userData.workex[0])}
                    </CardContent>
                </Card>
            </Box>
        ) : (
            null
        )
    )
}

export default WorkExperience;