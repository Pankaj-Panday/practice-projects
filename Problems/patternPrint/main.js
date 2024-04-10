function printPattern(num) {
	num = num + 1;
	// upper triangle
	for (let row = num / 2 + 1; row <= num; row++) {
		let str = "";
		for (let col = num; col > 0; col--) {
			if (col <= row) {
				if (col === num / 2) {
					// add spaces or equal sign
					str += " ";
					if (row === num / 2 + 1) {
						// for loop to control the number of spaces
						for (let count = 1; count <= num - 1; count++) {
							str += " ";
						}
					} else {
						for (let count = 1; count <= num - 1; count++) {
							str += "=";
						}
						// for loop to control the number of equals
					}
					str += " *";
				} else str += "*";
			} else {
				str += " ";
			}
		}
		for (let col = 2; col <= num; col++) {
			if (col <= row) {
				if (col === num / 2) {
					// add spaces or equal sign
					str += "* ";
					if (row === num / 2 + 1) {
						// for loop to control the number of spaces
						for (let count = 1; count <= num - 1; count++) {
							str += " ";
						}
					} else {
						for (let count = 1; count <= num - 1; count++) {
							str += "=";
						}
						// for loop to control the number of equals
					}
					str += " ";
				} else str += "*";
			} else {
				str += " ";
			}
		}
		console.log(str);
	}

	// lower triangle
	for (let row = num - 1; row > num / 2; row--) {
		let str = "";
		for (let col = num; col > 0; col--) {
			if (col <= row) {
				if (col === num / 2) {
					// add spaces or equal sign
					str += " ";
					if (row === num / 2 + 1) {
						// for loop to control the number of spaces
						for (let count = 1; count <= num - 1; count++) {
							str += " ";
						}
					} else {
						for (let count = 1; count <= num - 1; count++) {
							str += "=";
						}
						// for loop to control the number of equals
					}
					str += " *";
				} else str += "*";
			} else {
				str += " ";
			}
		}
		for (let col = 2; col <= num; col++) {
			if (col <= row) {
				if (col === num / 2) {
					// add spaces or equal sign
					str += "* ";
					if (row === num / 2 + 1) {
						// for loop to control the number of spaces
						for (let count = 1; count <= num - 1; count++) {
							str += " ";
						}
					} else {
						for (let count = 1; count <= num - 1; count++) {
							str += "=";
						}
						// for loop to control the number of equals
					}
					str += " ";
				} else str += "*";
			} else {
				str += " ";
			}
		}
		console.log(str);
	}
}

printPattern(7);
