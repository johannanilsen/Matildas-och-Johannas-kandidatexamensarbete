import React, { Component } from 'react';
import { Redirect } from "react-router-dom";



class Testinfo2of3 extends Component {
   
    constructor() {
        super();
        this.state = {
          i_agree: false,
          redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
      handleSubmit () {
        this.setState({redirect: !this.state.redirect});

      }
      handleChange(event) {
        this.setState({i_agree: !this.state.i_agree});

      }
     

    render() {
      
        if (this.state.redirect) {
        return <Redirect to='/Test2of3'/>;
        }
    return (

        <div className= "infoBig">
        <div className="header_info"> Testomgång 2/3</div>

        <div className="info">
        <div className="horizontal_aligment">
                <div className="whyhowwhat" id = "why">Info:</div> 
                <div className="whyhowwhat_text_important"> Du har nu fått skapa två behagligt ljud. Din nästa uppgift kommer bli att istället skapa obehagliga ljud. Det kommer gå till på exakt samma sätt som föregående steg men du ska nu arbeta fram ljud som enligt dig låter obehagliga. Ännu en gång, ta din tid och lycka till!   </div>
            </div>
         
            <div>
                <div className="info_checkbox">
                            <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> 
                            <div className="whyhowwhat_text">Jag har läst och förstått!  </div>
                 </div>
                <div className="arrow">
                        {this.state.i_agree ?  <button  className="toKnapp"  onClick={this.handleSubmit}> Till test </button> :  <button  className="distoEnkat" style = {{opacity: 0.5}}> Till test </button>}
                 </div> 

        </div>
    </div>
    </div>
    )
  }
}
export default Testinfo2of3;