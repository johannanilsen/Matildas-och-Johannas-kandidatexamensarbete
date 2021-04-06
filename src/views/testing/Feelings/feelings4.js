import react, { useState } from "react"
import { db } from "../../../firebase"
import { useHistory} from "react-router-dom";
import { useSelector } from "react-redux"

 
function Feelings4 (){
    const [feeling_1, setFeeling_1] = useState("")
    const [feeling_2, setFeeling_2] = useState("")
    const [feeling_3, setFeeling_3] = useState("")
    const [feeling_4, setFeeling_4] = useState("")
    const [feeling_5, setFeeling_5] = useState("")

    let history = useHistory();
    const userId = useSelector(state => state)



    const handleSubmit = (e) =>{
        e.preventDefault();
        
          

        db.collection('Resultat').doc(userId)
          .collection('Feelings').doc("Feelings4").set({
            feeling_1: feeling_1, 
            feeling_2: feeling_2, 
            feeling_3: feeling_3, 
            feeling_4: feeling_4,
            feeling_5: feeling_5,
       
        }).then(()=>{
            console.log("klar")
        }).catch(error => {
            console.log("fail")
        })
        history.push("/")


    };

    return(
        <div className = "infoBig">
        <div className="header_info" >Beskriv hur du känner dig </div>
        <div className="info">
        <form className="feelingsform" onSubmit={handleSubmit}>
            <div className="feelings" onChange={(e) => setFeeling_1(e.target.value)}>
                    <div className="feelingTitleLeft"> Ledsam </div>
                    1<input className="feeling" type="radio" value="1" name="Ledsam/Munter"  /> 
                    2<input className="feeling" type="radio" value="2" name="Ledsam/Munter" /> 
                    3<input className="feeling" type="radio" value="3" name="Ledsam/Munter" /> 
                    4<input className="feeling" type="radio" value="4" name="Ledsam/Munter" /> 
                    5<input className="feeling" type="radio" value="5" name="Ledsam/Munter" /> 
                    6<input className="feeling" type="radio" value="6" name="Ledsam/Munter" /> 
                    7<input className="feeling" type="radio" value="7" name="Ledsam/Munter" /> 
                    <div className="feelingTitleRight">Munter</div>
            </div>
            <div className="feelings" onChange={(e) => setFeeling_2(e.target.value)}>
                    <div className="feelingTitleLeft"> Missbelåten </div> 
                    1<input className="feeling" type="radio" value="1" name="Missbelåten/Belåten" /> 
                    2<input className="feeling" type="radio" value="2" name="Missbelåten/Belåten" /> 
                    3<input className="feeling" type="radio" value="3" name="Missbelåten/Belåten" /> 
                    4<input className="feeling" type="radio" value="4" name="Missbelåten/Belåten" /> 
                    5<input className="feeling" type="radio" value="5" name="Missbelåten/Belåten" /> 
                    6<input className="feeling" type="radio" value="6" name="Missbelåten/Belåten" /> 
                    7<input className="feeling" type="radio" value="7" name="Missbelåten/Belåten" /> 
                    <div className="feelingTitleRight"> Belåten </div>
            </div>
            <div className="feelings" onChange={(e) => setFeeling_3(e.target.value)}>
                    <div className="feelingTitleLeft"> Sömnig </div>
                    1<input className="feeling" type="radio" value="1" name="Sömnig/Klarvaken" /> 
                    2<input className="feeling" type="radio" value="2" name="Sömnig/Klarvaken" /> 
                    3<input className="feeling" type="radio" value="3" name="Sömnig/Klarvaken" /> 
                    4<input className="feeling" type="radio" value="4" name="Sömnig/Klarvaken" /> 
                    5<input className="feeling" type="radio" value="5" name="Sömnig/Klarvaken" /> 
                    6<input className="feeling" type="radio" value="6" name="Sömnig/Klarvaken" /> 
                    7<input className="feeling" type="radio" value="7" name="Sömnig/Klarvaken" /> 
                    <div className="feelingTitleRight">Klarvaken</div>
            </div>
            <div className="feelings" onChange={(e) => setFeeling_4(e.target.value)}>
                    <div className="feelingTitleLeft">Slö</div>
                    1<input className="feeling" type="radio" value="1" name="Slö/Pigg" /> 
                    2<input className="feeling" type="radio" value="2" name="Slö/Pigg" /> 
                    3<input className="feeling" type="radio" value="3" name="Slö/Pigg" /> 
                    4<input className="feeling" type="radio" value="4" name="Slö/Pigg" /> 
                    5<input className="feeling" type="radio" value="5" name="Slö/Pigg" /> 
                    6<input className="feeling" type="radio" value="6" name="Slö/Pigg" /> 
                    7<input className="feeling" type="radio" value="7" name="Slö/Pigg" /> 
                    <div className="feelingTitleRight">Pigg</div>
            </div>
            <div className="feelings" onChange={(e) => setFeeling_5(e.target.value)}>
                    <div className="feelingTitleLeft">Missnöjd</div>
                    1<input className="feeling" type="radio" value="1" name="Missnöjd/Nöjd" /> 
                    2<input className="feeling" type="radio" value="2" name="Missnöjd/Nöjd" /> 
                    3<input className="feeling" type="radio" value="3" name="Missnöjd/Nöjd" /> 
                    4<input className="feeling" type="radio" value="4" name="Missnöjd/Nöjd" /> 
                    5<input className="feeling" type="radio" value="5" name="Missnöjd/Nöjd" /> 
                    6<input className="feeling" type="radio" value="6" name="Missnöjd/Nöjd" /> 
                    7<input className="feeling" type="radio" value="7" name="Missnöjd/Nöjd" /> 
                    <div className="feelingTitleRight">Nöjd</div>
            </div>
            <div className="tillmittenpls">
            <button className = "toKnapp" type = "submit">Fortsätt</button>
            </div>
        </form>

        </div>
        </div>
    )
}
export default Feelings4;