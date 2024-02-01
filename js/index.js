const priceCurrency = document.querySelectorAll('.rate-col__price-currency');
const priceValue = document.querySelectorAll('.rate-col__price-value');
const pricePeriod = document.querySelectorAll('.rate-col__price-period');
const tariff = document.querySelectorAll('.rate-col');

const dollarRate = 90;
/*const euroRate = 95;*/

priceCurrency.forEach(currency => {
  currency.addEventListener('click', function() {
    if (currency.innerHTML === '$') {
      priceCurrency.forEach(x => {
        x.innerHTML = '₽'
      },
      priceValue.forEach(x => {
        x.innerHTML = x.innerHTML * dollarRate
      })
      )
    }  else {
      priceCurrency.forEach(x => {
        x.innerHTML = '$'
      },
      priceValue.forEach(x => {
        x.innerHTML = Math.round(x.innerHTML  / dollarRate)
      })
      )
    }    
  })
})

pricePeriod.forEach(period => {
  period.addEventListener('click', function() {
    if (period.innerHTML === '/Months') {
      pricePeriod.forEach(x => {
        x.innerHTML = '/Day'
      },
      priceValue.forEach(x => {
        x.innerHTML = Math.round(x.innerHTML / 30)
      })
      )
    } else {
      pricePeriod.forEach(x => {
        x.innerHTML = '/Months'
      },
      priceValue.forEach(x => {
        x.innerHTML = x.innerHTML * 30
      })
      )
    }    
  })
})