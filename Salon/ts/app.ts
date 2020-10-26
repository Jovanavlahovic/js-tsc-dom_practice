class Namestaj{
    private _sifra: number;
    private _naziv: string;
    private _jedinicnaCena: number;
    private _kolicinaUMagacinu: number;

	constructor(sifra: number, naziv: string, jedinicnaCena: number, kolicinaUMagacinu: number) {
		this._sifra = sifra;
		this._naziv = naziv;
		this._jedinicnaCena = jedinicnaCena;
		this._kolicinaUMagacinu = kolicinaUMagacinu;
	}

    /**
     * Getter sifra
     * @return {number}
     */
	public get sifra(): number {
		return this._sifra;
	}

    /**
     * Getter naziv
     * @return {string}
     */
	public get naziv(): string {
		return this._naziv;
	}

    /**
     * Getter jedinicnaCena
     * @return {number}
     */
	public get jedinicnaCena(): number {
		return this._jedinicnaCena;
	}

    /**
     * Getter kolicinaUMagacinu
     * @return {number}
     */
	public get kolicinaUMagacinu(): number {
		return this._kolicinaUMagacinu;
	}

    /**
     * Setter sifra
     * @param {number} value
     */
	public set sifra(value: number) {
		this._sifra = value;
	}

    /**
     * Setter naziv
     * @param {string} value
     */
	public set naziv(value: string) {
		this._naziv = value;
	}

    /**
     * Setter jedinicnaCena
     * @param {number} value
     */
	public set jedinicnaCena(value: number) {
		this._jedinicnaCena = value;
	}

    /**
     * Setter kolicinaUMagacinu
     * @param {number} value
     */
	public set kolicinaUMagacinu(value: number) {
		this._kolicinaUMagacinu = value;
	}
}



class Salon {
  private _naziv: string;
  private _adresa: string;
  private _telefon: string;
  private _namestaji: Namestaj[];

  constructor(naziv: string, adresa: string, telefon: string) {
    this._naziv = naziv;
    this._adresa = adresa;
    this._telefon = telefon;
    this._namestaji = [];
  }

  public get naziv(): string {
    return this._naziv;
  }
  public set naziv(value: string) {
    this._naziv = value;
  }

  public get adresa(): string {
    return this._adresa;
  }
  public set adresa(value: string) {
    this._adresa = value;
  }

  public get telefon(): string {
    return this._telefon;
  }
  public set telefon(value: string) {
    this._telefon = value;
  }

  public get namestaji(): Namestaj[] {
    return this._namestaji;
  }
  public set namestaji(value: Namestaj[]) {
    this._namestaji = value;
  }

  ispisiNamestajNaStanju():void{
      for(var i = 0; i< this._namestaji.length;i++){
          console.log(
            `${i + 1}. ${this._namestaji[i].naziv} ${
              this._namestaji[i].kolicinaUMagacinu
            } ${this._namestaji[i].jedinicnaCena}`);
      }
  }

    dodajNaLager(sifra: number, kolicina: number):void{
        for(var i in this._namestaji){
            if(this.namestaji[i].sifra == sifra){
                this._namestaji[i].kolicinaUMagacinu += kolicina;
                return;
            }
        } console.log("Ne postoji namestaj sa unetom sifrom");
    }

    dodajNamestaj(namestaj: Namestaj):void{
        for(var i in this._namestaji){
            if(this._namestaji[i].sifra == namestaj.sifra){
                console.log("Namestaj sa ovom sifrom vec postoji. Namestaj nije dodat.");
                return;
            }
        }
        this.namestaji.push(namestaj);
        console.log("Uspesno ste dodali novi namestaj na lager");
    }

  prodajKomad(sifra:number, kolicina: number):void{
      for(var i in this._namestaji){
          if(this._namestaji[i].sifra == sifra){
              if(this._namestaji[i].kolicinaUMagacinu >= kolicina){
                  console.log(`Uspesno ste kupili namestaj: ${this._namestaji[i].naziv} po ceni: ${this._namestaji[i].jedinicnaCena*kolicina}`);
                  this._namestaji[i].kolicinaUMagacinu -= kolicina;
                  return;
              }else{
                  console.log("Nema dovoljno namestaja na lageru. Kupovina nije uspesno obavljena.");
                  return;
              }
          }
      }

      console.log("Ne postoji namestaj sa unetom sifrom.");
  }
}

let n1: Namestaj = new Namestaj(111, "Ester Komoda", 50386.5, 15);
let n2: Namestaj = new Namestaj(123, "Rita Lezaj", 41127.12, 5);
let n3: Namestaj = new Namestaj(143, "Fiona Lezaj", 41127.12, 0);
let n4: Namestaj = new Namestaj(144, "Kloe Klub Sto", 20241, 2);

let s: Salon = new Salon("Simpo", "Bulevar Oslobodjenja BB", "021/000111");
s.namestaji = [n1, n2, n3, n4];
s.ispisiNamestajNaStanju();

s.dodajNaLager(3, 144);

s.ispisiNamestajNaStanju();

let n5: Namestaj = new Namestaj(254, "Fira Klub Sto", 30360.83, 11);
s.dodajNamestaj(n5);

n5.sifra = 5;
s.dodajNamestaj(n5);

s.prodajKomad(111, 20);

s.prodajKomad(111, 11);
s.ispisiNamestajNaStanju();