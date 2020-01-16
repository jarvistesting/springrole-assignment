import React from 'react';
import {Box, Container, Grid} from '@material-ui/core';

import FooterLink from '../utils/footerlink.json'
import FooterChild from './FooterChild.js';

const Footer = () => {
    return (
        <Box className="footer-ctr">
            <Container>
                <Container>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={4} sm={3} md={3} lg={3}>
                            <div className="footer-heading">Connect</div>
                            <FooterChild data={FooterLink.connect} />
                        </Grid>
                        <Grid item xs={4} sm={3} md={3} lg={3}>
                            <div className="footer-heading">Explore</div>
                            <FooterChild data={FooterLink.explore} />
                        </Grid>
                        <Grid item xs={6} sm={3} md={3} lg={3}>
                            <div className="footer-heading">
                                <img className="address-img" src="https://frontend.springrole.com/5c5bff190798b29920e213079e2eeef3.png" />
                            </div>
                            <a className="footer-text" target="_blank" href="mailto:communications@springrole.com">
                                {FooterLink.address.email}
                            </a>
                            <a className="footer-text" target="_blank" href="https://www.google.com/maps/place/SpringRole+India+Private+Limited/@12.935155,77.60827,15z/data=!4m5!3m4!1s0x0:0x36cd798c5c6ed67d!8m2!3d12.935155!4d77.60827">
                                {FooterLink.address.addressValue}
                            </a>
                        </Grid>
                    </Grid>
                    <Box mt={8} className="term-condition">
                        {
                            FooterLink.termcondition.map((item, index) => {
                                return (
                                    <React.Fragment key={`term_condition_${index}`}>
                                        <a className={index !== FooterLink.termcondition.length -1 ? "term-condition-text-border" : "term-condition-text"} target="_blank" href={item.link}>
                                            {item.text}
                                        </a>
                                    </React.Fragment>
                                )
                            })
                        }
                    </Box>
                </Container>
            </Container>
        </Box>
    )
}

export default Footer;