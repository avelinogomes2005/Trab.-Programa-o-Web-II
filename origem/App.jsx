import React from 'react'
import './App.css'
import DropList from './components/DropList';
import { useEffect } from 'react';
import Flagschange2 from './components/Flagschange2';
import Flagschange from './components/Flagschange';
function App() {
  useEffect(() => {
    Flagschange();
    Flagschange2();
  

    let buttonChange = document.getElementById("btnChange")
    let firtsValue = document.getElementById("valorDigitado")
    let secondValue = document.getElementById("segundoValor")
    let arrowChange = document.getElementById("arrow")
    const valueCountry = document.getElementById("selectCountry")
    const valueCountry2 = document.getElementById("selectCountry2")


  
    buttonChange.addEventListener("click", async (e) => {
      e.preventDefault();
  
      const Convert = valueCountry.value;
      const For = valueCountry2.value;
      const cond = firtsValue.value;
  
      if (Convert === For) alert("Escolha moedas diferentes");
      if (cond === "") alert("Digite algo no Campo");
  
      const api = `https://economia.awesomeapi.com.br/last/${Convert}-${For}`;
      const response = await (await fetch(api)).json();
  
      const result = response[`${Convert}${For}`].high;
  
      let calc = (cond * result).toFixed(2);
  
      secondValue.value = calc;



    });
  
    
  
    arrowChange.addEventListener("click", async (e) => {
      e.preventDefault();
  
      const Convert = valueCountry.value;
      const For = valueCountry2.value;
  
      valueCountry.value = For;
      valueCountry2.value = Convert;

    });

    

  
}

    
  );



  return (
     


    <div className="App">
      <header>Currency Converter</header>
      <form action="#">
        <div className="amount">
          <p>Inserir Valor</p>
          <input id='valorDigitado' type="number"   />
        </div>
        <DropList/>
    
      </form>
    </div>


    


  );
}

export default App;

