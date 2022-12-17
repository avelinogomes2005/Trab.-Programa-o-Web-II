export default function Flagschange2(){
    
    const valueCountry2 = document.getElementById("selectCountry2")
      const CoinFlags = document.getElementById('flags')
    
    if (valueCountry2.value === "BRL"){
        CoinFlags.src='https://countryflagsapi.com/svg/br'
    }
    if (valueCountry2.value === "USD"){
        CoinFlags.src='https://countryflagsapi.com/svg/us'
    }
    if (valueCountry2.value === "EUR"){
        CoinFlags.src='https://countryflagsapi.com/svg/eu'
    }
  
      valueCountry2.addEventListener("change", Flagschange2)
      
  
      
    }
  
 
