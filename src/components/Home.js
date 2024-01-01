import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    useEffect(() => {
        let userName = sessionStorage.getItem('userName');
        if(userName === '' || userName === null){
            navigate('/login');
        }
    },[])
    return (
        <>
        <div className="header">
            <Link to={'/'}>Home</Link>
            <Link style={{float:'right'}} to={'/login'}>Logout</Link>
        </div>
        <h1 className="text-center">Home</h1>
        </>
    )
}

export default Home;