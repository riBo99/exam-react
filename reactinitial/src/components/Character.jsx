import React from "react";
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { useState } from 'react'

function Character({characterData}) {
    const [details, setDetails] = useState(false)

    const handleDetailsButton = () => setDetails(!details)

    return (
        <Box sx={{position:"relative", left: "40%", top: 300 }} className='character'>
            <Card variant="outlined" sx={{backgroundColor: "lightgray", width: 400}}>
                <CardContent>
                    <Typography variant="h5">
                        {characterData.name}
                    </Typography>
                    {details ? <Typography variant="h6">{characterData.details}</Typography>: ""}
                </CardContent>
                <Button variant="contained" onClick={handleDetailsButton}>{details ? "show less" : "show more"}</Button>
            </Card>
        </Box>
    ) }

export default Character