import React, { Component } from 'react';
import { Redirect } from "react-router-dom";



class Testinfo1of3 extends Component {
   
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
        return <Redirect to='/Test1of3'/>;
        }
    return (

        <div className= "infoBig">
        <div className="header_info"> Testomgång 1/3</div>

        <div className="info">
        <div className="horizontal_aligment">
                <div className="whyhowwhat" id = "what">Info:</div> 
                <div className="whyhowwhat_text_important"> Din första uppgift kommer bli att skapa ljud som du tycker låter behagliga. Två snarlika ljud kommer sporadiskt spelas upp och du kommer kunna reglera hur dessa låter med hjälp av två olika paneler som styr respektive ljud. Se till att anpassa din volym till en lämplig sådan och behåll sedan samma volym under hela testet. Ta din tid och reglera tills du är nöjd och har åstadkommit två ljud som du själv anser vara behagliga, lycka till!  </div>
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
export default Testinfo1of3;