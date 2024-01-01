const Formatter = {
  formatDate: (date) => {
    if (date) {
      const dateFormatter = new Intl.DateTimeFormat(navigator.language, { year: 'numeric', month: '2-digit', day: '2-digit' })
      return dateFormatter.format(Date.parse(date))
    } else {
      return ''
    }
  },
  formatNumber: (number) => new Intl.NumberFormat('de-DE').format(number).toString(),
  formatCurrencyWithSymbol: (number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number).toString(),
  formatCurrencyWithoutSymbol: (number) => Intl.NumberFormat('de-DE').format(number).toString()
}

export default Formatter