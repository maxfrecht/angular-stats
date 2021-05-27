export class Statistique {

  constructor(public id:string, public titre: string, public valeur: string, public appreciation: "SUCCESS" | "WARNING" | "DANGER") {
    
  }
}