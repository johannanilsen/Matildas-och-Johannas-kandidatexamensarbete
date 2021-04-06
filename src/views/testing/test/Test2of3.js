import { useHistory} from "react-router-dom";



function Test1of3 (){
  let history = useHistory();


  return( 
    <div className="tillmittenpls">

<button  className="toKnapp"  onClick={()=>history.push("/feelings3")}> Fortsätt</button>
</div>
    )
}
  export default Test1of3;