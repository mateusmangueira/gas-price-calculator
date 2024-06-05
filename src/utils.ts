export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function calculatePrice(gasPrice: number, ethanolPrice: number) {
  return ethanolPrice / gasPrice;
}
