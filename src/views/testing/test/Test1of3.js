import { useHistory} from "react-router-dom";
import {useState} from "react"



function Test1of3 (){



  const [demo1left, setDemo1left] = useState(10000)
  const [demo1top, setDemo1top] = useState(10000)
  const [demo2left, setDemo2left] = useState(10000)
  const [demo2top, setDemo2top] = useState(10000)
  const [sound1x, setSound1x] = useState(0)
  const [sound1y, setSound1y] = useState(0)
  const [sound2x, setSound2x] = useState(0)
  const [sound2y, setSound2y] = useState(0)

  let offsetX,offsetY

  const move=e=>
  {
    const el=e.target
    el.style.left = `${e.pageX-offsetX}px`
    el.style.top = `${e.pageY-offsetY}px`

   
    if (e.pageX-offsetX<demo1left){
      el.style.left = `${demo1left}px`
    }
    if (e.pageX-offsetX>demo1left+364){
      el.style.left = `${demo1left+364}px`
    }
    if (e.pageY-offsetY<demo1top){
      el.style.top = `${demo1top}px`
    }
    if (e.pageY-offsetY>demo1top+364){
      el.style.top = `${demo1top+364}px`
    } 
    
  }
  const add=e=>
  {
    const el=e.target
    
    offsetX=e.clientX-el.getBoundingClientRect().left
    offsetY=e.clientY-el.getBoundingClientRect().top
    el.addEventListener('mousemove',move)
  }

  const remove=e=>{

    const el=e.target
    
    el.removeEventListener('mousemove',move)
    console.log("Left x value: ", el.getBoundingClientRect().left - demo1left);
    console.log("Left y value: ",  el.getBoundingClientRect().top - demo1top);
  


  }

  const move2=e=>
  {

    const el=e.target

    el.style.left = `${e.pageX-offsetX}px`
    el.style.top = `${e.pageY-offsetY}px`

   
    if (e.pageX-offsetX<demo2left){
      el.style.left = `${demo2left}px`
    }
    if (e.pageX-offsetX>demo2left+364){
      el.style.left = `${demo2left+364}px`
    }
    if (e.pageY-offsetY<demo2top){
      el.style.top = `${demo2top}px`
    }
    if (e.pageY-offsetY>demo2top+364){
      el.style.top = `${demo2top+364}px`
    } 
  }
  const add2=e=>
  {
    const el=e.target
    
    offsetX=e.clientX-el.getBoundingClientRect().left
    offsetY=e.clientY-el.getBoundingClientRect().top
    el.addEventListener('mousemove',move2)
  }

  const remove2=e=>{
    const el=e.target
    
    el.removeEventListener('mousemove',move2)
    setSound2x(el.getBoundingClientRect().left - demo2left)
    setSound2y(el.getBoundingClientRect().top - demo2top)
    window.webAudioXML.start("#sound1");
    window.webAudioXML.setVariable("x1", sound2x); 
    window.webAudioXML.setVariable("y1", sound2y); 
  }



  let history = useHistory();
  const showCoords = () => {
  
    console.log("Left X: ", sound1x);
    console.log("Left Y: ", sound1y);
    console.log("Right X: ", sound2x);
    console.log("Right Y: ", sound2y);
  }




  return( 
    <div className="demo">
      <button onClick={window.webAudioXML.init()}> klicka här</button>
       
    <div className="demodiv">
      

    <div className="demo1" ref={el => {
        if (!el) return;
            setDemo1left(el.getBoundingClientRect().left)
            setDemo1top(el.getBoundingClientRect().top)

      }} > <div className="ball" onMouseDown={add} onMouseUp={remove}/> </div>
    <div className="demo2" ref={el => {
        if (!el) return;
            setDemo2left(el.getBoundingClientRect().left)
            setDemo2top(el.getBoundingClientRect().top)

      }}> <div className="ball" onMouseDown={add2} onMouseUp={remove2}/> </div>
    </div>
    <div className="tillmittenpls">

    <div className="horizontal_aligment">
                <div className="whyhowwhat" id="what"  style ={{}}>Tips:</div> 
                <div className="whyhowwhat_text_important"> Om det är svårt att använda reglaget testa att dra långsammare.</div>
                <div className="whyhowwhat_text_important"> .</div>

            </div>
      </div>
    <div className="tillmittenpls">

  
<button  className="toKnapp"  onClick={()=>history.push("/feelings2")}> Fortsätt</button>
</div>
</div>
    )
}
  export default Test1of3;


{/*   0736-287335 */}