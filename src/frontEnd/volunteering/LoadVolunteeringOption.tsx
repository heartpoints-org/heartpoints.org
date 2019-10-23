import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import { Space } from '../page/Space';
import { Image } from "../forms/viewEditToggleables/Image";
import { PageTitle } from '../page/PageTitle';
import { EditButton } from '../buttons/EditButton';
import { defaultOrgLogoSrc } from '../organizations/data/defaultOrgLogoSrc';
import { Page } from '../page/Page';

export const LoadVolunteeringOption = ({creatorEmail, imageThumbnailURL, title, homepage, jobTitle, jobDescription, navTo}) => {
    return(
        <Page>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                <Grid item>
                    <Image field={{value: imageThumbnailURL || defaultOrgLogoSrc}} isEditMode={false} />
                </Grid>
                <Grid item>
                    <PageTitle>
                        {jobTitle} 
                    </PageTitle>
                    <Typography variant="caption"><a href={homepage}>{title}</a></Typography>
                </Grid>
            </Grid>
            <Space />
            <Typography variant="body1"><strong>Job Description:</strong> {jobDescription}</Typography>
            <Space />
            <Typography variant="caption" style={{color: "lightgray"}}>Created by: {creatorEmail}</Typography>
        </Page>
    );
}