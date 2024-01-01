const Util = {
  getPercentege: (amount, total) => {
    return ((Math.abs(amount) * 100) / total).toFixed(2)
  }
}

export default Util