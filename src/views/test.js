import React from "react";



function Test (){

  return( 
    <div className="feelings" onChange={(e) => {
      window.webAudioXML.init();
      console.log(e.target.value*100);
      window.webAudioXML.querySelector("#osc1").frequency = e.target.value*100;
    }}>
      1<input className="test" type="radio" value="1" name="test"  /> 
      2<input className="test" type="radio" value="2" name="test" /> 
      3<input className="test" type="radio" value="3" name="test" /> 
      4<input className="test" type="radio" value="4" name="test" /> 
      5<input className="test" type="radio" value="5" name="test" /> 
      6<input className="test" type="radio" value="6" name="test" /> 
      7<input className="test" type="radio" value="7" name="test" /> 
</div>
    )
}
  export default Test;