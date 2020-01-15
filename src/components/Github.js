import React, {useContext} from 'react';
import {Card, CardContent, Box, Divider} from '@material-ui/core';
import {isEmpty} from 'lodash';

import {githubContext} from '../context/githubContext';
import { ReactComponent as Followers } from '../images/followers.svg';
import { ReactComponent as Star } from '../images/star.svg';
import { ReactComponent as GithubScore } from '../images/github_score.svg';
import { ReactComponent as Repositories } from '../images/repositories.svg';
import { ReactComponent as Language } from '../images/language.svg';


const Github = () => {
    const {githubData} = useContext(githubContext);
    console.log("githubdata", githubData, Followers);
    
    return (
        !isEmpty(githubData) ? (
            <>
                <h2 className="heading">Github Profile</h2>
                <Card className="skills-box-container">
                    <CardContent className="text-center">
                        <Box className="github-box-ctr justify-btw">
                            <div className="github-item-ctr">
                                <Followers />
                                <div className="github-item-desc">
                                {
                                    githubData && githubData.dump.followers ? (
                                        <>
                                            <span className="value">{githubData.dump.followers}</span>
                                            <span className="sub-text">Followers</span>
                                        </>
                                    ) : null
                                }
                                </div>
                            </div>
                            <div className="github-item-ctr">
                                <Star />
                                <div className="github-item-desc">
                                {
                                    githubData && githubData.dump.stars ? (
                                        <>
                                            <span className="value">{githubData.dump.stars}</span>
                                            <span className="sub-text">Stars</span>
                                        </>
                                    ) : null
                                }
                                </div>
                            </div>
                        </Box>
                        <Box className="github-box-ctr justify-btw">
                            <div className="github-item-ctr">
                                <GithubScore />
                                <div className="github-item-desc">
                                {
                                    githubData && githubData.dump.score ? (
                                        <>
                                            <span className="value">{githubData.dump.score}</span>
                                            <span className="sub-text">Github Score</span>
                                        </>
                                    ) : null
                                }
                                </div>
                            </div>
                            <div className="github-item-ctr">
                                <Repositories />
                                <div className="github-item-desc">
                                {
                                    githubData && githubData.dump.repositories ? (
                                        <>
                                            <span className="value">{githubData.dump.repositories}</span>
                                            <span className="sub-text">Repositories</span>
                                        </>
                                    ) : null
                                }
                                </div>
                            </div>
                        </Box>
                        <Divider />
                        <Box className="github-box-ctr justify-center">
                            <div className="github-item-ctr">
                                <Language />
                                <div className="github-item-desc">
                                {
                                    githubData && githubData.dump.languages ? (
                                        <>
                                            <span className="value-small">{githubData.dump.languages.join(",")}</span>
                                            <span className="sub-text">Languages Used</span>
                                        </>
                                    ) : null
                                }
                                </div>
                            </div>
                        </Box>
                        <div className="text-left">
                        {
                            githubData && githubData.dump.github_user_id ? (
                                <a className="github-link" target="_blank" href={`https://github.com/${githubData.dump.github_user_id}`}>Visit Github Profile &gt;</a>
                            ) : null
                            }
                        </div>
                    </CardContent>
                </Card>
            </>
        ) : (null)
        
    );
}

export default Github;