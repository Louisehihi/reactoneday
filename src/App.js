import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import img from './images/background.png';
import './App.css';
import keywoord from './images/keyword.png';
import App2 from  './App2';
// import akai from './audioplayer/akai.wav';

import {clap,chordDeinzzwo,drum,bassSlap,hihat,hiphop,kick,marchingband,
  chordA,chordG,chordF,chordEm,chordE,chordC,cleanchordD01,chordD,AHDNchord,
  steelGuitar,Electric,ChordsAmin,} from'./audioplayer/index.js';
import { Navbar, Nav, Container,NavDropdown} from 'react-bootstrap';

function App() {

  //const [name,setName]=useState('')
  const [a,setA]=useState(false)
  const [s,setS]=useState(false)
  const [d,setD]=useState(false)
  const [d1,setD1]=useState(false)
  const [f,setF]=useState(false)
  const [g,setG]=useState(false)
  const [h,setH]=useState(false)
  const [j,setJ]=useState(false)
  const [k,setK]=useState(false)
  const [l,setL]=useState(false)
  const [en,setEn]=useState(false)
  const [an,setAn]=useState(false)
  const [am,setAm]=useState(false)
  const [c,setC]=useState(false)
  const [e,setE]=useState(false)
  const [b,setB]=useState(false)
  const[dd,setDD]=useState(false)
  const[dr,setDR]=useState(false)
  const [q,setQ]=useState(false)
  const [e0,setE0]=useState(false)
  const [w,setW]=useState(false)
  // const [e0,setE0]=useState(false)
 
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
        var audio=new Audio(chordA)
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
        setD1(true)
        var audio=new Audio(cleanchordD01)
        audio.play()
        setTimeout(()=>{
          
          setD1(false)

        },300)
      }else if(e.keyCode==52){
        setD(true)
        var audio=new Audio(cleanchordD01)
        audio.play()
        setTimeout(()=>{
          
          setD(false)

        },300)
      }else if(e.keyCode==70){
        setF(true)
        var audio=new Audio(chordF)
        audio.play()
        setTimeout(()=>{
          
          setF(false)

        },300)
      }
      else if(e.keyCode==71){
        setG(true)
        var audio=new Audio(chordG)
        audio.play()
        setTimeout(()=>{
          
          setG(false)

        },300)
      }
      else if(e.keyCode==72){
        setH(true)
        var audio=new Audio(hihat)
        audio.play()
        setTimeout(()=>{
          
          setH(false)

        },300)
      }
      else if(e.keyCode==74){
        setJ(true)
        var audio=new Audio(hiphop)
        audio.play()
        setTimeout(()=>{
          
          setJ(false)

        },300)
      }else if(e.keyCode==75){
        setK(true)
        var audio=new Audio(kick)
        audio.play()
        setTimeout(()=>{
          
          setK(false)

        },300)
      }else if(e.keyCode==76){
        setL(true)
        var audio=new Audio(marchingband)
        audio.play()
        setTimeout(()=>{
          
          setL(false)

        },300)
      }else if(e.keyCode==69){
        setEn(true)
        var audio=new Audio(chordEm)
        audio.play()
        setTimeout(()=>{
          
          setEn(false)

        },300)
      }else if(e.keyCode==67){
        setC(true)
        var audio=new Audio(chordC)
        audio.play()
        setTimeout(()=>{
          
          setC(false)

        },300)
      }else if(e.keyCode==48){
        setAn(true)
        var audio=new Audio(AHDNchord)
        audio.play()
        setTimeout(()=>{
          
          setAn(false)

        },300)
      }else if(e.keyCode==82){
        setE(true)
        var audio=new Audio(chordE)
        audio.play()
        setTimeout(()=>{
          
          setE(false)

        },300)
      }else if(e.keyCode==16){
        setDD(true)
        var audio=new Audio(chordDeinzzwo)
        audio.play()
        setTimeout(()=>{
          
          setDD(false)

        },300)
      }else if(e.keyCode==66){
        setB(true)
        var audio=new Audio(bassSlap)
        audio.play()
        setTimeout(()=>{
          
          setB(false)

        },300)
      }else if(e.keyCode==81){
        setQ(true)
        var audio=new Audio(steelGuitar)
        audio.play()
        setTimeout(()=>{
          
          setQ(false)

        },300)
      }else if(e.keyCode==53){
        setDR(true)
        var audio=new Audio(drum)
        audio.play()
        setTimeout(()=>{
          
          setDR(false)

        },300)
      }else if(e.keyCode==57){
        setE0(true)
        var audio=new Audio(Electric)
        audio.play()
        setTimeout(()=>{
          
          setE0(false)

        },300)
      }else if(e.keyCode==87){
        setAm(true)
        var audio=new Audio(ChordsAmin)
        audio.play()
        setTimeout(()=>{
          
          setAm(false)

        },300)
      }
     
    }
    window.addEventListener('keydown', playSound);
  },[])


     


     




    



     
    
      

  
      

    return (
    
      
    

   <div className="head_list">
     <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"> JavaScript Drum Kit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#App2" link>Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
     <div className="wrapper"> 
      <div className="container" style={{display: 'flex',margintop:'5px',padding:'10px'}}>
        <div  style={{width:'15vh',margin:'5px',border: '3px solid', transform: a?'scale(1.2)':'',boxshadow:a?' 0 0 6px #FF7043':'',backgroundColor:a?'black':'',color:a?'white':''}} className={a?"playing":""} onClick={()=>{
          var audio = new Audio(chordA)
          audio.play()

          
        }}>
        <div className="keyword"/>
            <div className="name">A</div>
            <div className="sound">chordA</div>
        </div>

        

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:s?'scale(1.2)':'',boxshdow:s?'0 0 6px #FF7043':'',backgroundColor:s?'black':'',color:s?'white':''}} className={s?"playing":""} onClick={()=>{
          var audio = new Audio(clap)
          audio.play()
        }}>
        <div className="keyword"/>
            <div className="name">S</div>
            <div className="sound">clap</div>
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:d1?'scale(1.2)':'',boxshdow:d1?'0 0 6px #FF7043':'',backgroundColor:d1?'black':'',color:d1?'white':''}} className={d1?"playing":""}  onClick={()=>{
          var audio = new Audio(cleanchordD01)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">D1</div>
          <div className="sound">chordD1</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:d?'scale(1.2)':'',boxshdow:d?'0 0 6px #FF7043':'',backgroundColor:d?'black':'',color:d?'white':''}} className={d?"playing":""}  onClick={()=>{
          var audio = new Audio(chordD)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">D4</div>
          <div className="sound">chordD</div>     
        </div>
        
        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:f?'scale(1.2)':'',boxshdow:f?'0 0 6px #FF7043':'',backgroundColor:f?'black':'',color:f?'white':''}} className={f?"playing":""}  onClick={()=>{
          var audio = new Audio(chordF)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">F</div>
          <div className="sound">chordF</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:g?'scale(1.2)':'',boxshdow:g?'0 0 6px #FF7043':'',backgroundColor:g?'black':'',color:g?'white':''}} className={g?"playing":""}  onClick={()=>{
          var audio = new Audio(chordG)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">G</div>
          <div className="sound">chordG</div>     
        </div>
        
      </div>
      <div className="container" style={{display: 'flex',margintop:'5px',padding:'5px',}}>
        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:h?'scale(1.2)':'',boxshdow:h?'0 0 6px #FF7043':'',backgroundColor:h?'black':'',color:h?'white':''}} className={h?"playing":""}  onClick={()=>{
          var audio = new Audio(hihat)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">H</div>
          <div className="sound">hihat</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:j?'scale(1.2)':'',boxshdow:j?'0 0 6px #FF7043':'',backgroundColor:j?'black':'',color:j?'white':''}} className={j?"playing":""}  onClick={()=>{
          var audio = new Audio(hiphop)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">J</div>
          <div className="sound">hiphop</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:k?'scale(1.2)':'',boxshdow:k?'0 0 6px #FF7043':'',backgroundColor:k?'black':'',color:k?'white':''}} className={k?"playing":""}  onClick={()=>{
          var audio = new Audio(kick)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">K</div>
          <div className="sound">kick</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:l?'scale(1.2)':'',boxshdow:l?'0 0 6px #FF7043':'',backgroundColor:l?'black':'',color:l?'white':''}} className={l?"playing":""}  onClick={()=>{
          var audio = new Audio(marchingband)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">L</div>
          <div className="sound">band</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:am?'scale(1.2)':'',boxshdow:am?'0 0 6px #FF7043':'',backgroundColor:am?'black':'',color:am?'white':''}} className={am?"playing":""}  onClick={()=>{
          var audio = new Audio(ChordsAmin)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">W</div>
          <div className="sound">ChordsAmin</div>     
        </div>

        <div>



        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:c?'scale(1.2)':'',boxshdow:c?'0 0 6px #FF7043':'',backgroundColor:c?'black':'',color:c?'white':''}} className={c?"playing":""}  onClick={()=>{
          var audio = new Audio(chordC)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">C</div>
          <div className="sound">chordC</div>     
        </div>
      </div>

      <div className="container" style={{display:'flex',margintop:'5px',padding:'5px',}}>
        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:an?'scale(1.2)':'',boxshdow:an?'0 0 6px #FF7043':'',backgroundColor:an?'black':'',color:an?'white':''}} className={an?"playing":""}  onClick={()=>{
          var audio = new Audio(AHDNchord)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">0</div>
          <div className="sound">Ahchord</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:e?'scale(1.2)':'',boxshdow:e?'0 0 6px #FF7043':'',backgroundColor:e?'black':'',color:e?'white':''}} className={e?"playing":""}  onClick={()=>{
          var audio = new Audio(chordE)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">R</div>
          <div className="sound">chordE</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:en?'scale(1.2)':'',boxshdow:en?'0 0 6px #FF7043':'',backgroundColor:en?'black':'',color:en?'white':''}} className={en?"playing":""}  onClick={()=>{
          var audio = new Audio(chordEm)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">E</div>
          <div className="sound">chordEm</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:b?'scale(1.2)':'',boxshdow:b?'0 0 6px #FF7043':'',backgroundColor:b?'black':'',color:b?'white':''}} className={b?"playing":""}  onClick={()=>{
          var audio = new Audio(bassSlap)
          audio.play()
        }}>

        <div className="keyword"/>
          <div className="name">B</div>
          <div className="sound">bassSlap</div>     
        </div>

        <div  style={{width:'15vh',margin:'5px',border: '3px solid',transform:q?'scale(1.2)':'',boxshdow:q?'0 0 6px #FF7043':'',backgroundColor:q?'black':'',color:q?'white':''}} className={q?"playing":""}  onClick={()=>{
          var audio = new Audio(steelGuitar)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">Q</div>
          <div className="sound">steelGuitar</div>     
        </div>
     
     
     
      </div>

      <div className="container" style={{display:'flex',margintop:'5px',padding:'5px',}}>
      <div  style={{width:'20vh',margin:'5px',border: '3px solid',transform:dd?'scale(1.2)':'',boxshdow:dd?'0 0 6px #FF7043':'',backgroundColor:dd?'black':'',color:dd?'white':''}} className={dd?"playing":""}  onClick={()=>{
          var audio = new Audio(chordDeinzzwo)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">shift</div>
          <div className="sound">chordD</div>     
        </div>

        <div  style={{width:'20vh',margin:'5px',border: '3px solid',transform:dr?'scale(1.2)':'',boxshdow:dr?'0 0 6px #FF7043':'',backgroundColor:dr?'black':'',color:dr?'white':''}} className={dr?"playing":""}  onClick={()=>{
          var audio = new Audio(drum)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">5</div>
          <div className="sound">drum</div>     
        </div>


        <div  style={{width:'20vh',margin:'5px',border: '3px solid',transform:e0?'scale(1.2)':'',boxshdow:e0?'0 0 6px #FF7043':'',backgroundColor:e0?'black':'',color:e0?'white':''}} className={e0?"playing":""}  onClick={()=>{
          var audio = new Audio(Electric)
          audio.play()
        }}>
        <div className="keyword"/>
          <div className="name">9</div>
          <div className="sound">Electric</div>     
        </div>
      </div>

        
        
      </div> 
    </div>
     
  );
}

export default App;
