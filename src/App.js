import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import img from './images/background.png';
import './App.css';
import keywoord from './images/keyword.png';
// import akai from './audioplayer/akai.wav';

import {akai,clap,control,dismal,drum,guitar1,hihat,hiphop,kick,subbass,marchingband,vocal1} from'./audioplayer/index.js';

function App() {

  //const [name,setName]=useState('')
  const [a,setA]=useState(false)
  const [s,setS]=useState(false)
  const [d,setD]=useState(false)
  const [f,setF]=useState(false)
  const [g,setG]=useState(false)
  const [h,setH]=useState(false)
  const [j,setJ]=useState(false)
  const [k,setK]=useState(false)
  const [l,setL]=useState(false)
  const [en,setEn]=useState(false)
  const [z,setZ]=useState(false)
  const [x,setX]=useState(false)
  const [c,setC]=useState(false)
  const [v,setV]=useState(false)
  const [b,set]=useState(false)
  // const [keyCode,setKeyCode]=useState([false,false,false,false,false])

  // const [keyCode,setKeyCode] = useState({
  //   a: [false,akai],
  //   b: [false,clap],
  //   c: [false,control],
  //   d: [false,dismal],
  //   e: [false,drum],
  // })

  useEffect(()=>{
    // let changeFun = function(keyEnglish){
    //   // let keyCode_temp = {...keyCode}
    //     keyCode[keyEnglish][0]=true
    //     setKeyCode(keyCode)
    //     var audio=new Audio(keyCode[keyEnglish][1])
    //     audio.play()
        
    //     setTimeout(()=>{
    //       // let keyCode_temp = {...keyCode}
    //       keyCode[keyEnglish][0]=false
    //       setKeyCode(keyCode)
    //     },300)
    // }
    let playSound = function(e) {
      console.log(e.keyCode)
      if(e.keyCode==65){
        setA(true)
        var audio=new Audio(akai)
        audio.play()

        setTimeout(()=>{
          
          setA(false)

        },300)
        
      }else if(e.keyCode==83){
        setS(true)
        var audio=new Audio(clap)
        audio.play()
        setTimeout(()=>{
          
          setS(false)

        },300)
      
      }else if(e.keyCode==68){
        setD(true)
        var audio=new Audio(control)
        audio.play()
        setTimeout(()=>{
          
          setA(false)

        },300)
      }
      else if(e.keyCode==70){
        setF(true)
        var audio=new Audio(dismal)
        audio.play()
        setTimeout(()=>{
          
          setA(false)

        },300)
      }
      else if(e.keyCode==71){
        setG(true)
        var audio=new Audio(drum)
        audio.play()
        setTimeout(()=>{
          
          setA(false)

        },300)
      }
      else if(e.keyCode==72){
        setH(true)
        var audio=new Audio(hihat)
        audio.play()
        setTimeout(()=>{
          
          setA(false)

        },300)
      }
      else if(e.keyCode==74){
        setJ(true)
        var audio=new Audio(hiphop)
        audio.play()
        setTimeout(()=>{
          
          setA(false)

        },300)
      }
      else if(e.keyCode==75){
        setK(true)
        var audio=new Audio(kick)
        audio.play()
        setTimeout(()=>{
          
          setA(false)

        },300)
      }
      else if(e.keyCode==76){
        setL(true)
        var audio=new Audio(marchingband)
        audio.play()
        setTimeout(()=>{
          
          setA(false)

        },300)
      }
      else if(e.keyCode==13){
        setEn(true)
        var audio=new Audio(vocal1)
        audio.play()
        setTimeout(()=>{
          
          setA(false)

        },300)
      }
     
      
     
     
    }
    window.addEventListener('keydown', playSound);
  },[])


     


     




    



     
    
      

  
      

    return (

   <div className="head_list">
     <div className="wrapper">      
        <div  style={{backgroundColor:a?'black':'',color:a?'white':''}} className={a?"playing":""} onClick={()=>{
          var audio = new Audio(akai)
          audio.play()
        }}>
        <div className="keyword"/>
            <div className="name">A</div>
            <div className="sound">akai</div>
        </div>

        <div  style={{backgroundColor:s?'black':'',color:s?'white':''}} className={s?"playing":""} onClick={()=>{
          var audio = new Audio(clap)
          audio.play()
        }}>
        <div className="keyword"/>
            <div className="name">S</div>
            <div className="sound">clap</div>
        </div>

        <div  style={{backgroundColor:d?'black':'',color:d?'white':''}} className={d?"playing":""}  onClick={()=>{
          var audio = new Audio(control)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">D</div>
          <div className="sound">control</div>     
        </div>
        
        <div  style={{backgroundColor:f?'black':'',color:f?'white':''}} className={f?"playing":""}  onClick={()=>{
          var audio = new Audio(dismal)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">F</div>
          <div className="sound">dismal</div>     
        </div>

        <div  style={{backgroundColor:g?'black':'',color:g?'white':''}} className={g?"playing":""}  onClick={()=>{
          var audio = new Audio(drum)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">G</div>
          <div className="sound">drum</div>     
        </div>

        <div  style={{backgroundColor:h?'black':'',color:h?'white':''}} className={h?"playing":""}  onClick={()=>{
          var audio = new Audio(hihat)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">H</div>
          <div className="sound">hihat</div>     
        </div>

        <div  style={{backgroundColor:j?'black':'',color:j?'white':''}} className={j?"playing":""}  onClick={()=>{
          var audio = new Audio(hiphop)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">J</div>
          <div className="sound">hiphop</div>     
        </div>

        <div  style={{backgroundColor:k?'black':'',color:k?'white':''}} className={k?"playing":""}  onClick={()=>{
          var audio = new Audio(kick)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">K</div>
          <div className="sound">kick</div>     
        </div>

        <div  style={{backgroundColor:l?'black':'',color:l?'white':''}} className={l?"playing":""}  onClick={()=>{
          var audio = new Audio(marchingband)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">L</div>
          <div className="sound">marchingband</div>     
        </div>

        <div  style={{backgroundColor:en?'black':'',color:en?'white':''}} className={en?"playing":""}  onClick={()=>{
          var audio = new Audio(vocal1)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">Enter</div>
          <div className="sound">vocal1</div>     
        </div>
        
      </div> 
    </div>
     
  );
}

export default App;
