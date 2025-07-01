// ############################################################################
// ############################ EXERCICIO 1 ###################################
// ############################################################################

const animals = ["Cat", "Penguin", "Goat", "Snake", "Racoon"];

const countElements = (animalArray) => {
	let counter = 0;

	for (let i = 0; i < animalArray.length; i++) {
		counter++;
	}

	return counter;
};

const totalAnimals = countElements(animals);
console.log(`The total number of animals in the array is: ${totalAnimals}`);

// ############################################################################
// Sem "for" B)

const countElements2 = (animalArray) => {
	let counter = 0;
	let i = 0;

	while (i < animalArray.length) {
		counter++;
		i++;
	}

	return counter;
};

const totalAnimals2 = countElements2(animals);
console.log(`The total number of animals in the array is: ${totalAnimals2}`);

// ############################################################################
// ############################ EXERCICIO 2 ###################################
// ############################################################################

// aqui eu usei uma função recursiva e n usa os loops que não podem ser usados
const separateEvenOdd = (nums) => {
	const result = [[], []];

	let evenIndex = 0;
	let oddIndex = 0;

	const process = (i) => {
		if (i >= nums.length) {
			return;
		}

		const currentNumber = nums[i];

		if (currentNumber % 2 === 0) {
			result[0][evenIndex] = currentNumber;
			evenIndex++;
		} else {
			result[1][oddIndex] = currentNumber;
			oddIndex++;
		}

		process(i + 1);
	};

	process(0);

	return result;
};

// testes
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const separated = separateEvenOdd(numbers);

console.log("Input:", numbers);
console.log("Output:", JSON.stringify(separated));
// o output deve ser [[2,4,6,8,10],[1,3,5,7,9]]

const otherNumbers = [21, 33, 44, 12, 98, 77, 1, 0];
const otherSeparated = separateEvenOdd(otherNumbers);

console.log("\nInput:", otherNumbers);
console.log("Output:", JSON.stringify(otherSeparated));
// o output deve ser [[44,12,98,0],[21,33,77,1]]

// com for
const separateEvenOdd2 = (nums) => {
	const result = [[], []];
	let evenIndex = 0,
		oddIndex = 0;

	for (let i = 0; i < nums.length; i++) {
		let currentNum = nums[i];
		if (currentNum % 2 === 0) {
			result[0][evenIndex++] = currentNum;
		} else {
			result[1][oddIndex++] = currentNum;
		}
	}

	return result;
};

const separated2 = separateEvenOdd2(numbers);

console.log("Input:", numbers);
console.log("Output:", JSON.stringify(separated2));

const otherSeparated2 = separateEvenOdd2(otherNumbers);

console.log("\nInput:", otherNumbers);
console.log("Output:", JSON.stringify(otherSeparated2));
