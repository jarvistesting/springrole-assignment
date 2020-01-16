import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import {IconButton, Box, Collapse, Grid} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ButtonWhite from './ButtonWhite';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& > * + *': {
        marginTop: theme.spacing(2),
        }
    },
    standardSuccess: {
        padding: '10px 20px !important',
        color: '#ffffff',
        backgroundColor: '#6a819b !important'
    },
    firstPart: {
        fontWeight: 'bold'
    },
    actionCtr: {
        display: 'flex',
        alignItems: 'center'
    },
    message: {
        width: '100%'
    },
    rightContent: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}));

const LogoutBanner = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <Box mt={4} mb={4}>
            <div className={classes.root}>
                <Collapse in={open}>
                    <Alert
                        icon={false}
                        classes={{
                            standardSuccess: classes.standardSuccess,
                            message: classes.message
                        }}
                    >
                        <Grid container spacing={2} className={classes.actionCtr}>
                            <Grid item lg={6} md={6} sm={6} xs={12}>
                                <p><span className={classes.firstPart}>Join Kartik on SpringRole - </span>A verified professional network powered by the blockchain</p>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={12} className={classes.rightContent}>
                                <ButtonWhite>Join SpringRole</ButtonWhite>
                                <ButtonWhite>Login</ButtonWhite>
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Alert>
                </Collapse>
            </div>
        </Box>
    )
}

export default LogoutBanner;