  
import React from "react";
import Terminal from "../components/displays/terminal";
import CardList from "../components/cards/cardList";

const Home = () => {
    return (
        <div className="page" style={{ textAlign: "center" }}>
            <p className="page-title">Hack Night Sign In</p>
            <p style={{ fontSize: 20 }}>
                Log In to Manage Events 
                <br/>
            </p>
            
            <br/>
            <CardList />
            <div style={{ marginBottom: 20 }} />
            
        </div>
    );
};

export default Home;