import Etudiant, { Etablissement, info } from './etudiant.js';

const etd1 = new Etudiant('Rami', 33);
const result = document.getElementById('result');

result.textContent = `${info(etd1)} | Etablissement: ${Etablissement}`;
console.log(info(etd1));
console.log('Etablissement:', Etablissement);