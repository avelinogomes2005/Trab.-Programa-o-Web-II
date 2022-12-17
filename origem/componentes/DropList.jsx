import React from 'react'



export default function DropList() {
 
    
    
    
    
  return(

    <div className="DropList">
    <form action="#">
        <div className="drop-list">
            <div className="from">
                <p>From</p>
                <div className="select-box">
                    <img id='flag' className='flags' src="https://countryflagsapi.com/svg/brazil" alt="flag"  height={50}  width={70} />
                    <select id='selectCountry'>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>
            <div  className="icon" ><i id='arrow' className='fas fa-exchange-alt'></i></div>
            <div className="to">
                <p>To</p>
                
            <div className="select-box">
                    <img id='flags' className='flags' src="https://countryflagsapi.com/svg/us" alt="flag" height={50} width={70}/>
                    <select id='selectCountry2'>
                        <option value="BRL">BRL</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>
            </div>
            

         <div className="exchange-rate"><input id='segundoValor' type="number" disabled placeholder='Coin Converted'/></div>
            <button id='btnChange'>Fazer Conversão</button>
            </form>
            
        </div>

    
    
        );
  }
