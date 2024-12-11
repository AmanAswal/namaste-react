import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        }
    }

    async componentDidMount () {
        const data = await fetch("https://api.github.com/users/amanaswal");
        const json = await data.json();
        console.log(json); 
    }

    render(){
        const {name, location} = this.props;
        return (
            <div className="user-card">
                <h1>counttt: {this.state.count}</h1>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Contact: +91-82829123</h3>
            </div>
        )
    }
}

export default UserClass;



/// 50,000