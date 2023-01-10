import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, TextField, DialogActions, CircularProgress} from '@mui/material'
import { useEffect } from 'react'

function Subscription() {
    const [open, setOpen] = useState(false);
    const [subscription, setsubscription] = useState("");
    const [subscriptionButton, setSubscriptionButton] = useState(false);
    const [resReceived, setResReceived] = useState(false);
    const [subButtonIsClicked, setSubButtonIsClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 10000);
    }, [])

    useEffect(() => {
        console.log(subscription)
        if(subscription.includes("@",".")){
            setSubscriptionButton("enabled")
        }
    }, [subscription])

    const handleSubButton = () => {
        setSubButtonIsClicked(true)
        fetch("https://demoapi.com/api/series/newsletter", {
            method: "POST",
            body: JSON.stringify({
                email: subscription
            }),
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setResReceived(true)
        })
    }
    useEffect(() => {
        if(resReceived === true) {
            setTimeout(() => {
                setOpen(false)
            }, 5000)
        }
    }, [resReceived])

    return (
        <div>
            <Dialog open={open}>
                <DialogTitle>Subscribe</DialogTitle>
                {subButtonIsClicked ? (resReceived ? (
                    <DialogContent>
                        <DialogContentText>
                            Subscribed!
                        </DialogContentText>
                    </DialogContent>
                ):(
                    <DialogContent>
                        <CircularProgress/>
                    </DialogContent>
                )
                ):(
                    <>
                    <DialogContent>
                        <DialogContentText>
                            Subscribe to our newsletter!
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={event => {setsubscription(event.target.value)}}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleSubButton} variant={subscriptionButton}>Subscribe</Button>
                    </DialogActions>
                    </>
                )
            }
            </Dialog>
        </div>
    )
}

export default Subscription