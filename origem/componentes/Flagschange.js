
  export default function Flagschange (){
  const valueCountry = document.getElementById("selectCountry")
  const CoinFlags = document.getElementById('flag')
  if (valueCountry.value === "BRL"){
    CoinFlags.src='https://countryflagsapi.com/svg/br'
  }
  if (valueCountry.value === "USD"){
    CoinFlags.src='https://countryflagsapi.com/svg/us'
  }
  if (valueCountry.value === "EUR"){
    CoinFlags.src='https://countryflagsapi.com/svg/eu'
  }
  
  
  valueCountry.addEventListener("change", Flagschange)
  }
