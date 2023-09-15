/* Calcula Desconto:
Todos os Produtos acima de R$ 30,00 tem desconto de 10%.

*/

const cart = [10, 20, 200, 2, 40, 320, 250]
let finalValue = 0
let finalValueWithDiscount = 0
let totalDiscount = 0

function calculateDiscount(price, discount) {
  const result = (price * discount) / 100
  return result
}

const finalDiscount = (number1, number2) => number1 - number2

console.log(finalDiscount(842, 761))

cart.forEach(value => {
  finalValue += value
});

cart.forEach(value => {
  if (value > 30) {
    const discount = calculateDiscount(value, 10)
    finalValueWithDiscount = finalValueWithDiscount + (value - discount)
    totalDiscount += discount
  } else {
    finalValueWithDiscount += value
  }
});

console.log(`O valor final da compra foi de R$: ${finalValue},
porem você ganhou desconto de R$: ${totalDiscount} e vai pagar apenas R$: ${finalValueWithDiscount}`)
