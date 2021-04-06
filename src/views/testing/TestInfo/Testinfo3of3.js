import React, { Component } from 'react';
import { Redirect } from "react-router-dom";



class Testinfo3of3 extends Component {
   
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
        return <Redirect to='/Test3of3'/>;
        }
    return (

        <div className= "infoBig">
        <div className="header_info"> Testomgång 3/3</div>

        <div className="info">
        <div className="horizontal_aligment">
                <div className="whyhowwhat" id = "how">Info:</div> 
                <div className="whyhowwhat_text_important"> Din sista uppgift kommer bli att ännu en gång skapa ljud som enligt ditt tycke låter behagliga. Det kommer alltså gå till exakt likadant som första omgången där din uppgift var att reglera fram två behagliga ljud. Efter denna omgång är testet klart och du kan återgå till allt annat roligt skolarbete du har framför dig. Tack för att du deltog!   </div>
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
export default Testinfo3of3;