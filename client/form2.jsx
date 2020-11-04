import React from 'react'


class Form1 extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: ""
        };
        this.handleNext = this.handleNext.bind(this);
    };



    render() {
        const { name, email, password } = this.state;
        return (
            <form id="form1">
                <label for="name">name</label><br></br>
                <input type="text" id="name" name="name" /><br></br><br></br>
                <label for="email">email</label><br></br>
                <input type="email" id="email" name="email" /><br></br><br></br>

                <label for="password">password</label><br></br>
                <input type="password" id="password" name="password" /><br></br><br></br>
                <input type="submit" value="Next" />
            </form>
        )
    }
}

export default Form1;