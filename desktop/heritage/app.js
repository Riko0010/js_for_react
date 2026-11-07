class Etudiant{
constructor(nom,age){
this.nom=nom;
this.age=age
}
info(){
return `Etudiant nom:${this.nom} a pour
age:${this.age}`
}
}
let et1= new Etudiant("Rami",23);
console.log(et1.info());
let et2= new Etudiant("Mohamed",21) ;
console.log(et2.info());
class Stagiaire extends Etudiant{
constructor(nom,age,stage){
super(nom,age);
this.stage=stage; }
info(){return `Stagiaire nom:${this.nom} a pour
age:${this.age} stage:${this.stage}`
}
}
let stg1= new Stagiaire("Rami",23,"dev mobile");
console.log(stg1.info());
let stg2= new Stagiaire("Mohamed",21,"dev web")
console.log(stg2.info());