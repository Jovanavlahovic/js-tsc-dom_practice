let studenti: Student[] = [];

class Predmet {
  private _id: string;
  private _nazivPredmeta: string;
  private _imeProfesora: string;
  private _ocena: number;

  constructor(
    id: string,
    nazivPredmeta: string,
    imeProf: string,
    ocena: number
  ) {
    this._id = id;
    this._nazivPredmeta = nazivPredmeta;
    this._imeProfesora = imeProf;
    this._ocena = ocena;
  }

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get nazivPredmeta(): string {
    return this._nazivPredmeta;
  }
  public set nazivPredmeta(value: string) {
    this._nazivPredmeta = value;
  }

  public get imeProfesora(): string {
    return this._imeProfesora;
  }
  public set imeProfesora(value: string) {
    this._imeProfesora = value;
  }

  public get ocena(): number {
    return this._ocena;
  }
  public set ocena(value: number) {
    this._ocena = value;
  }
}

class Student {
  private _ime: string;
  private _prezime: string;
  private _fakultet: string;
  private _brIndeksa: string;
  private _prosecnaOcena: number;
  private _polozeniPredmeti: Predmet[];

  constructor(
    ime: string,
    prezime: string,
    fakultet: string,
    brIndeksa: string
  ) {
    this._ime = ime;
    this._prezime = prezime;
    this._fakultet = fakultet;
    this._brIndeksa = brIndeksa;
    this._prosecnaOcena = 0;
    this._polozeniPredmeti = [];
  }

  public get ime(): string {
    return this._ime;
  }

  public get prezime(): string {
    return this._prezime;
  }

  public get fakultet(): string {
    return this._fakultet;
  }

  public get brIndeksa(): string {
    return this._brIndeksa;
  }

  public get prosecnaOcena(): number {
    return this._prosecnaOcena;
  }

  public set ime(value: string) {
    this._ime = value;
  }

  public set prezime(value: string) {
    this._prezime = value;
  }

  public set fakultet(value: string) {
    this._fakultet = value;
  }

  public set brIndeksa(value: string) {
    this._brIndeksa = value;
  }

  public set prosecnaOcena(value: number) {
    this._prosecnaOcena = value;
  }

  public get polozeniPredmeti(): Predmet[] {
    return this._polozeniPredmeti;
  }
  public set polozeniPredmeti(value: Predmet[]) {
    this._polozeniPredmeti = value;
    this.izracunajProsecnuOcenu();
  }

  predstaviSe(): string {
    return `Student: ${this._ime} ${this.prezime}, fakultet: ${this._fakultet}, prosecna ocena: ${this._prosecnaOcena}.`;
  }
  izracunajProsecnuOcenu(): void {
    let suma: number = 0;
    for (let i in this._polozeniPredmeti) {
      suma += this._polozeniPredmeti[i].ocena;
    }
    this._prosecnaOcena = suma / this._polozeniPredmeti.length;
  }

  omiljeniProfesor(): string {
    let profesori: string[] = [];
    for (let i in this._polozeniPredmeti) {
      if (this._polozeniPredmeti[i].ocena == 11) {
        profesori.push(this._polozeniPredmeti[i].imeProfesora);
      }
    }
    return profesori.join(", ");
  }
  dodajPredmet(predmet: Predmet){
      this._polozeniPredmeti.push(predmet);
      this.izracunajProsecnuOcenu();
  }
}

    function dodajSudenta(forma:HTMLFormElement){
        let ime = forma.element("ime").value;
        let prezime = forma.element("prezime").value;
        let fakultet = forma.element("fakultet").value;
        let brIndeksa = forma.element("index").value;
        let predmeti = forma.element("predmeti").value;

        let predmeti1: Predmet[] = [];
        let s: string[] = predmeti.split(";");

        for(var i in s){
            let podaci: string[] = s[i].split(",");
            let id: string = podaci[1].trim();
            let naziv: string = podaci[2].trim();
            let profesor: string = podaci[3].trim();
            let ocena: number = Number(podaci[4].trim());
            let noviPredmet: Predmet = new Predmet(id,naziv,profesor,ocena);
            predmeti1.push(noviPredmet);
        }

        let noviStudent = new Student(ime,prezime,fakultet,brIndeksa);
        noviStudent.polozeniPredmeti = predmeti1;
        
        studenti.push(noviStudent);
    }

    function devetke(studenti: Student[]){
        let rez: Student[] = [];

        rez = studenti.filter(student => {
            let count:number = student.polozeniPredmeti.filter(predmet => (predmet.ocena == 9)).length;  
            return count >=3;
            });
        return rez;
    }

    function predstaviStudente(){
        let text = document.getElementById("tekst");
        text.innerHTML = "";

        for(let i in studenti){
            text.innerHTML += studenti[i].predstaviSe() + "<br>";
        }
    }

    function predstaviDevetke(){
          let text = document.getElementById("tekst");
          text.innerHTML = "";
         let rez: Student[] = devetke(studenti);
         for(let i in rez){
             text.innerHTML += rez[i].predstaviSe() + "<br>";
         }
    }

    function omiljeniProfesori(){
        let text = document.getElementById("tekst");
        text.innerHTML = "";

        for(let i in studenti){
            if(studenti[i].omiljeniProfesor()){
                 text.innerHTML += `${studenti[i].ime} ${
                   studenti[i].prezime
                 } ima omiljene profesore: ${studenti[
                   i
                 ].omiljeniProfesor()} <br>`;
            }
           
        }
    }

let s1: Student = new Student("Pera", "Peric", "FTN", "PP-001");
let s1p1: Predmet = new Predmet("1", "Predmet 1", "Profesor Profesorevic", 9);
let s1p2: Predmet = new Predmet("2", "Predmet 2", "Nastavnik Nastavnikovic", 9);
let s1p3: Predmet = new Predmet("3", "Predmet 3", "Predavac Predavacevic", 9);
let s1p4: Predmet = new Predmet("4", "Predmet 4", "Doktor Doktorevic", 10);
s1.polozeniPredmeti = [s1p1, s1p2, s1p3, s1p4];

let s2: Student = new Student("Mika", "Mikic", "FTN", "MM-001");
let s2p1: Predmet = new Predmet("1", "Predmet 1", "Profesor Profesorevic", 11);
let s2p2: Predmet = new Predmet("2", "Predmet 2", "Nastavnik Nastavnikovic", 9);
let s2p4: Predmet = new Predmet("4", "Predmet 4", "Doktor Doktorevic", 11);
s2.polozeniPredmeti = [s2p1, s2p2, s2p4];

let s3: Student = new Student("Ana", "Anaic", "FTN", "AA-001");
let s3p1: Predmet = new Predmet("1", "Predmet 1", "Profesor Profesorevic", 11);
let s3p2: Predmet = new Predmet("2", "Predmet 2", "Nastavnik Nastavnikovic", 10);
s3.dodajPredmet(s3p1);
s3.dodajPredmet(s3p2);

studenti.push(s1, s2, s3);