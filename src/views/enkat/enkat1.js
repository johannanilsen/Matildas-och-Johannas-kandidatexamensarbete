import react, { useState } from "react"
import { db } from "../../firebase"
import { useHistory} from "react-router-dom";
import { useSelector } from "react-redux"

 
function Enkat1 (){
    const [namn, setName] = useState("");
    const [mail, setEmail] = useState("");
    const [alder, setAlder] = useState("");
    const [kon, setKon] = useState("Välj");
    const [namnnotfilled, setNamnnotfilled] = useState(false)
    const [mailnotfilled, setMailnotfilled] = useState(false)
    const [aldernotfilled, setAldernotfilled] = useState(false)
    const [konnotfilled, setKonnotfilled] = useState(false)

    const [filled, setFilled]= useState(false)

    const checkinput = () => {
        if (namn === ""){
            setNamnnotfilled(true)
            setMailnotfilled(false)            
            setAldernotfilled(false)
            setKonnotfilled(false)


            return false

        }
        else if (mail === ""){
            setMailnotfilled(true)
            setNamnnotfilled(false)
            setAldernotfilled(false)
            setKonnotfilled(false)
            return false

        }
        else if (alder === ""){
            setAldernotfilled(true)
            setMailnotfilled(false)
            setNamnnotfilled(false)
            setKonnotfilled(false)
            return false

        }
        else if (kon === "Välj"){
            setKonnotfilled(true)
            setAldernotfilled(false)
            setMailnotfilled(false)
            setNamnnotfilled(false)
            return false
        }
        else{
            return true
        }
    

    }

    let history = useHistory();
    const userId = useSelector(state => state)
   
    const handleSubmit = (e) =>{
        e.preventDefault();
       
       

        if ( checkinput()) {
        db.collection('Resultat').doc(userId)
          .collection('Enkat').doc("Om dig").set({
            namn: namn, 
            mail: mail, 
            alder: alder, 
            kon: kon,

       
        }).then(()=>{
            console.log("klar")
        }).catch(error => {
            console.log("fail")
        })

        history.push("/enkat2")
    }
    };

    return(
        <div className = "mitten">

        <form className="form" onSubmit={handleSubmit}>
            <div className = "rubrik"> Om dig </div>
            <div className = "enkatcont"> <label className="question">För- och efternamn <div className="redthing">*</div></label>
            {!namnnotfilled ? <input className = "box"
            placeholder="T.ex. Matilda Rydén"
            value = {namn}
            onChange={(e) => setName(e.target.value)}/> : <input className = "redbox"
            placeholder="T.ex. Matilda Rydén"
            value = {namn}
            onChange={(e) => setName(e.target.value)}/> }
            <label className="question">Mailadress (KTH-mail om möjligt) <div className="redthing">*</div> </label>
            {!mailnotfilled ? <input className = "box" placeholder="T.ex. maryden@kth.se"
            value = {mail}
            onChange = {(e) => setEmail(e.target.value)}/> : <input className = "redbox" placeholder="T.ex. maryden@kth.se"
            value = {mail}
            onChange = {(e) => setEmail(e.target.value)}/> }
            <label className="question">Ålder <div className="redthing">*</div> </label>
            {!aldernotfilled ? <input className = "box" placeholder="T.ex. 21år"
            value = {alder}
            onChange = {(e) => setAlder(e.target.value)}/> : <input className = "redbox" placeholder="T.ex. 21år"
            value = {alder}
            onChange = {(e) => setAlder(e.target.value)}/> }
            <label className="question">Könsidentitet<div className="redthing">*</div> </label>
            {!konnotfilled ? <select className = "box" value={kon} onChange={(e) => setKon(e.target.value)}> 
                <option value="Välj">Välj</option>
                <option value="Kvinna">Kvinna</option>
                <option value="Man">Man</option>
                <option value="Ickebinär">Ickebinär</option>
                <option value="Annat">Annat alternativ</option>
                <option value="Osäker">Osäker</option>
                <option value="Vill ej svara">Vill ej svara</option>
            </select> : <select className = "redbox" value={kon} onChange={(e) => setKon(e.target.value)}> 
                <option value="Välj">Välj</option>
                <option value="Kvinna">Kvinna</option>
                <option value="Man">Man</option>
                <option value="Ickebinär">Ickebinär</option>
                <option value="Annat">Annat alternativ</option>
                <option value="Osäker">Osäker</option>
                <option value="Vill ej svara">Vill ej svara</option>
            </select>}</div>
           
            <div >
            <div className="tillmittenpls">
            <button className = "toKnapp" type = "submit">Fortsätt</button>
            </div>

        </div>
        </form>

        </div>

    )
}
export default Enkat1;