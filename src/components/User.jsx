import { useEffect, useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/amanaswal");
        const json = await data.json();
        console.log(json);
    }

    return (
        <div className="user-card">
            <h1>count: {count}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: Ghaziabad</h2>
            <h3>Contact: +91-82829123</h3>
        </div>
    )
}

export default User;