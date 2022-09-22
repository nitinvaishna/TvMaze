import React,{useState,useEffect} from 'react'
import style from '../Components/style.css'
import Actor from './Actors';
import Show from './Show';
function Tvmaze(){
   
    const [actor, setActor] = useState(false);
    const [show, setShow] = useState(false);

    const setActorFilter = () => {
        setShow(false);
        setActor(true);
    }

    const setShowFilter = () => {
        setActor(false);
        setShow(true);
       
    }
    return(
        <>
<div className="container">  
    <h1 className='header' id='header1'>Tvmaze</h1>
    <h1 className='header' id='header2'>Search Your Fave Shows</h1>

    <div className="search">
            <div id='innner-serch'>
                <h2>Choose your Category</h2>               
                <input type="radio" name="movie" onChange={() => setActorFilter()} /> <strong> BY ACTOR </strong>
                <input type="radio" name="movie" onChange={() => setShowFilter()} className="ms-4" /> <strong> BY SHOWS </strong>
                <br></br><br></br><br></br>
                {actor ? <Actor /> :""}
                {show ? <Show /> :""}  

                <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
           </div>
                                  
    </div>
            

</div>          
        </>
    )
}
export default Tvmaze