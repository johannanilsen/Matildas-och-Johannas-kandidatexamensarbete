import { CheckBox, Opacity } from "@material-ui/icons";
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";




class Info extends Component {
   
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
        console.log(this.state.redirect)
        console.log(this.state.i_agree)

        if (this.state.redirect) {
        return <Redirect to='/enkat1'/>;
        }
    return (

        <div className= "infoBig">
        <div className="header_info"> Hej och välkommen till Matildas och Johannas kandidatexamensarbete! </div>

        <div className="info">
        <div className="horizontal_aligment">
                <div className="whyhowwhat" id = "important">Viktigt:</div> 
                <div className="whyhowwhat_text_important"> Det är viktigt att du inte uppdaterar sidan under testets gång! Testet görs fördelaktigt i webbläsaren Google Crome. </div>
            </div>
            <div className="horizontal_aligment">
                <div className="whyhowwhat" id = "why">Varför:</div> 
                <div className="whyhowwhat_text">Arbetet är en del av projektet Sonification of goods in a store där du kommer vara med och bidra med värdefull data. </div>
            </div>
            <div className="horizontal_aligment">
                <div className="whyhowwhat" id = "how">Var:</div>  
                <div className="whyhowwhat_text">Vi ser gärna att du utför detta test på en så lugn och tyst plats som möjligt, där du känner att du kan koncentrera dig.  </div>
            </div>
            <div className="horizontal_aligment">
                <div className="whyhowwhat" id = "what">Hur:</div> 
                <div className="whyhowwhat_text">Testet kommer gå ut på att du ska reglera två olika ljud. Ljuden kommer spelas upp sporadiskt och det är viktigt att du hör dessa ordentligt. Vidare instruktion på hur ljuden ska regleras kommer. </div>
            </div>
            
            
            <div>
                <div className="info_checkbox">
                            <input
                            type="checkbox"
                            defaultChecked={this.state.i_agree}
                            onChange={this.handleChange}
                            /> 
                            <div className="whyhowwhat_text">Jag godkänner att mina personuppgifter och interaktionsdata sparas fram till 30 juni 2021 </div>
                 </div>
                <div className="arrow">
                        {this.state.i_agree ?  <button  className="toKnapp"  onClick={this.handleSubmit}> Till Enkät </button> :  <button  className="distoEnkat" style = {{opacity: 0.5}}> Till Enkät </button>}
                 </div> 

        </div>
    </div>
    </div>
    )
  }
}
export default Info;