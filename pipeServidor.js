//NÃºmero perfeito Ã© um nÃºmero natural cuja soma de seus divisores (excluÃ­do o prÃ³prio nÃºmero) coincide com ele mesmo.

function perfectNumbers(max) {
	var i, j, k,
		perfects = [];
	
	for (i = 0; i++ < max;) {
		for ( j = k = 0; ++j < i; ) {
			if ( i % j === 0 ) {
				k += j;
			}
			
			if ( ( j + 1 ) === i && k === i ) {
				perfects.push(k);
			}
		}
	}
	
	return perfects.join( ', ' );
}	

console.log( 'Numeros perfeitos entre 0 e 10000: ' + perfectNumbers(10000));
