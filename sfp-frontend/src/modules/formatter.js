export const currencyFormatter = (region, currency) => {
    return new Intl.NumberFormat(region, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    })
}
export const numberFormatter = (region, minDigits) => {
    return new Intl.NumberFormat(region, {
		// These options are needed to round to whole numbers if that's what you want.
		minimumFractionDigits: minDigits, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	})
}