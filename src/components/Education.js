import React, {useContext} from 'react';
import {isEmpty} from 'lodash';
import {Card, CardContent, Box, Divider} from '@material-ui/core';

import {userContext} from '../context/userContext';


const Education = () => {
    const {userData} = useContext(userContext);

    return (
        !isEmpty(userData) ? (
            <>
                <h2 className="heading">Education</h2>
                <Card className="education-box-container">
                    <CardContent className="text-left">
                        {
                            userData && userData.education.length && userData.education[0].length ? (
                                userData.education[0].map((item, index) => (
                                    <React.Fragment key={`education_detail_${index}`}>
                                        <div className="edu-parent-ctr">
                                            <img src="https://frontend.springrole.com/66995ea0a66c78113bc7930e926104fe.png" alt="education image" className="education-image" />
                                            <Box className="education-box-content-container">
                                                <h3 className="education-content-heading">{item.institution_name}</h3>
                                                <h3 className="education-content-description">{item.location}</h3>
                                                <h3 className="education-content-description">{item.department}</h3>
                                                <h3 className="education-content-description">{item.start_date} - {item.end_date}</h3>
                                            </Box>
                                        </div>
                                        {
                                            index !== userData.education[0].length - 1 ? <Divider className="divider"/> : null
                                        }
                                    </React.Fragment>
                                ))
                                
                            ) : null
                        }
                    </CardContent>
                </Card>
            </>
        ) : (null)
    );
}

export default Education;