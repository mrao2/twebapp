import React, { useContext, useState } from "react";
import UserProvider from "../contexts/UserProvider";
import Terminal from "../components/displays/terminal";
import Col from "../components/wrappers/Col";
import DataTags from "../components/menu/dataTags";
import _ from "lodash";
import Button from '@material-ui/core/Button'

const LoginMsg = "Uh oh, there's nothing to show! " +
    "Login to see all of your events. ";

    let obj;

const Profile = () => {
    const [selected, setSelected] = useState("All");
    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData) ? LoginMsg: "Explore Your Data";
    const options = Object.keys(userData).filter(key => {
        return userData[key] !== null;
    });
    let eventData = {}
    const getEvents = () => {
        
       
    }
    return (
        <div className="page">
            <p className="page-title" style={{ textAlign: "center" }}>
                {text}
            </p>

            <Col className="col-4" style={{ verticalAlign: "top" }}>
                <Button variant="contained"  onClick={() => { fetch("https://api.meetup.com/Openstl/events/",{
                    method: 'GET',
                    headers: {
                        "Content-Type": 'application/json',
                        'Authorization': 'Bearer 4edc2a40744d4ff5df0649c98aba370d',
                        'cors': "no-cors"
                    },

                })
                .then(res => res.json())
                .then(data => obj = data)
                .catch(err => {
                    console.log(err);
                });
                return obj; }}
                
                >
                    Get Events
                </Button>
                <br/>
                <Button variant="contained" disabled>
                    Get RSVPs
                </Button>
            </Col>

            <Col className="col-8">
                <Terminal
                    userData={obj}
                    selected={selected}
                />
            </Col>
            <div style={{ marginBottom: 20 }} />
        </div>
    );
};

export default Profile;