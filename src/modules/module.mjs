const sumNums = (arr) => arr.reduce((a, b) => a + b);

let elements = [1,2,3];

const calcProm = () => {
    return new Promise((resolve, reject) => {
        if (elements.length === 0) {
            reject(new Error('Arr is null'));
        }
        const sum = sumNums(elements); // Calcula la suma de los elementos
        const prom = sum / elements.length; // Calcula el promedio

        setTimeout(() => {
            resolve({ sum, prom }); // Resuelve la promesa con un objeto que contiene la suma y el promedio
        }, 2500);
    });
};

async function getProm() {
    try {
        const { sum, prom } = await calcProm(); // Destructura el objeto resuelto de la promesa
        const info = { elements, sum, promedio: prom }; // Crea un objeto con la información relevante
        console.log(info);
    } catch (err) {
        console.log(err.message);
    }
}

export { getProm };
