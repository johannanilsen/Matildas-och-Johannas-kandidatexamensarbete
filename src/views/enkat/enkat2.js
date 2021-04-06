import react, { useState } from "react"
import { db } from "../../firebase"
import { useHistory} from "react-router-dom";
import { useSelector } from "react-redux"
import InEar from "../../icons/airpods.png"
import OverEar from "../../icons/headphones.png"

function Enkat2 (){
    const [horlurar, setHorlurar] = useState("");
    const [typhorlurar, setTyphorlurar] = useState("");
    const [musikaliskbakgrund, setMusikaliskbakgrund] = useState("")
    const [namnnotfilled, setNamnnotfilled] = useState(false)
    const [mailnotfilled, setMailnotfilled] = useState(false)
    const [aldernotfilled, setAldernotfilled] = useState(false)
    const [konnotfilled, setKonnotfilled] = useState(false)

    
    let history = useHistory();
    const userId = useSelector(state => state)

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        
        db.collection('Resultat').doc(userId)
          .collection('Enkat').doc("Dina förutsättningar").set({
            horlurar: horlurar,
            typhorlurar: typhorlurar,
            musikaliskbakgrund: musikaliskbakgrund,
       
        }).then(()=>{
            console.log("klar")
        }).catch(error => {
            console.log("fail")
        })

        history.push("/feelings1")

    };

    return(
        <div className = "mitten">

        <form className="form" onSubmit={handleSubmit}>
            <div className = "rubrik"> Dina förutsättningar </div>
            <div className = "enkatcont">
            <label className="question">Vad använder du för typ av hörlurar?<div className="redthing">*</div></label>
            <div className="radio_hearphones" onChange={(e) => setHorlurar(e.target.value)}>
                <div className="radio_hearphones_butt">
                <img src={InEar} style={{"height" : "20px", "paddingRight": "10px"}}/> In ear
                <input type="radio" value="In ear" name="horlurar"  style={{"paddingRight": "10px"}}/> 
                </div>
                <div className="radio_hearphones_butt">
                <img src={OverEar} style={{"height" : "20px", "paddingRight": "10px"}}/>Over ear
                <input type="radio" value="Over ear/On ear" name="horlurar" style={{"paddingRight": "20px"}}/> 
                </div>

            </div>
            <label className="question">Beskriv dina hörlurar</label>
            <input className = "box" placeholder="T.ex. Apple AirPods Pro.."
            value = {typhorlurar}
            onChange = {(e) => setTyphorlurar(e.target.value)}/>
            <label className="question">Har du musikalisk bakgrund?</label>
            <div className="musikaliskbakgrund" onChange={(e) => setMusikaliskbakgrund(e.target.value)}>
                    <div >Ingen</div>
                    1<input type="radio" value="1" name="musikaliskbakgrund" /> 
                    2<input type="radio" value="2" name="musikaliskbakgrund" /> 
                    3<input type="radio" value="3" name="musikaliskbakgrund" /> 
                    4<input type="radio" value="4" name="musikaliskbakgrund" /> 
                    5<input type="radio" value="5" name="musikaliskbakgrund" /> 
                    6<input type="radio" value="6" name="musikaliskbakgrund" /> 
                    7<input type="radio" value="7" name="musikaliskbakgrund" /> 
                    <div>Utbildad musiker</div>
            </div>
            </div>
            <div >
            <div className="tillmittenpls">
            <button className = "toKnapp" type = "submit">Ta test</button>
            </div>

        </div>
        </form>

        </div>

    )
}
export default Enkat2;