import React from 'react'


class Form2 extends React.Component {
    constructor() {
        super();
        this.state = {
            line1: "",
            line2: "",
            city: "",
            zip_c: ""
        };
        this.handleNext = this.handleNext.bind(this);
    };



    render() {
        const { line1, line2, city, zip_c } = this.state;
        return (
            <form id="form2" action="http://127.0.0.1:3000/Form2" method="post">
                <label for="line1">line1</label><br></br>
                <input type="text" name="line1" /><br></br><br></br>

                <label for="line2">line2</label><br></br>
                <input type="text" name="line2" /><br></br><br></br>

                <label for="city">city</label><br></br>
                <input type="text" name="city" /><br></br><br></br>

                <label for="zip_c">zip code</label><br></br>
                <input type="number" name="zip_c" /><br></br><br></br>
                <input type="submit" value="Next" />
            </form>
        )
    }
}

export default Form2;