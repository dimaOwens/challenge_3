import React from 'react'
import axios from "axios";

class Form3 extends React.Component {
    constructor() {
        super();
        this.state = {
            card_n: "",
            exp_date: "",
            cvv: "",
            bzc: ""

        };
        this.handleNext = this.handleNext.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit = e => {
        e.preventDefault();
        // get our form data out of state
        const { card_n, exp_date, cvv, bzc } = this.state;

        axios.post("/form1", { card_n, exp_date, cvv, bzc }).then(result => {
            console.log(this.card_n);
            console.log(card_n);
        });
    };


    render() {
        const { card_n, exp_date, cvv, bzc } = this.state;
        return (
            <form id="form3" action="http://127.0.0.1:3000/Form3" method="post">
                <label for="card#">card #</label><br></br>
                <input type="number" name="card_n" /><br></br><br></br>

                <label for="exp_date">expiry date</label><br></br>
                <input type="date" name="exp_date" /><br></br><br></br>

                <label for="cvv">CVV</label><br></br>
                <input type="number" name="cvv" /><br></br><br></br>

                <label for="bzc">billing zip code</label><br></br>
                <input type="number" name="bzc" /><br></br><br></br>
                <input type="submit" value="Next" />
            </form>
        )
    }
}

export default Form3;