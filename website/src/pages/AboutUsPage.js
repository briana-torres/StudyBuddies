import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';

const AboutUsPage = () => {
    let history = useHistory();

    const handleBack = () => {
        history.goBack();
    };

    return (
        <>
            <AppBar position="static" color="transparent" elevation={0} sx={{ mt: 2, width: "94%" }}>
                <Toolbar>
                    <IconButton onClick={handleBack} sx={{ visibility: 'visible' }}>
                        <ArrowBackIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h4" component="h3" style={{ flexGrow: 1, textAlign: 'center' }}>
                        About Us
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{ mt: 4, width: "60%", textAlign: 'center'}}>
                <Typography variant="body1" align="center" sx={{ mt: 4, fontSize: "1rem" }}>
                    "The Study Community" exists to uplift minority Computer Science students at Northeastern University. Our mission is to dismantle the barriers to academic success and social integration by providing a dedicated platform for resource sharing and community building.
                    In listening to the experiences of minority CS students, we identified a critical need for a support system that caters to both academic and social challenges. Our website facilitates the formation of study groups that not only enhance learning but also foster meaningful connections among students from similar backgrounds.
                    Navigation through "The Study Community" is straightforward and purposeful, with clear pathways to finding or creating study groups under the "Find Groups" and "My Groups" sections. We've refined our platform based on user feedback, prioritizing clarity, error prevention, and a seamless user experience.
                    Our "Study Buddy" feature epitomizes our commitment to productive group study sessions, making it easier for students to collaborate, track progress, and support each other.
                    Join us in creating a more inclusive and connected academic environment where every student has the support they need to excel.
                </Typography>
            </Container>
        </>
    );
};

export default AboutUsPage;
