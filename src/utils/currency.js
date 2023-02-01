export const formatCurrency = value => {
    return value.toLocaleString('pt-PT', {style: 'currency', currency: 'EUR'})
}