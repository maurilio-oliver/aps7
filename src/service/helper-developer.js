export default function returnPromiseComAtraso(objeto) {
    return new Promise((resolve, reject) => {
        // Simula um atraso de 0.3 segundos
        setTimeout(() => {
            // Verifica se o parâmetro é um objeto
            if (typeof objeto === 'object' && objeto !== null) {
                resolve(objeto);
            } else {
                reject(new Error('O parâmetro não é um objeto válido.'));
            }
        }, 300);
    });
}