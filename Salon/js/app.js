var Namestaj = /** @class */ (function () {
    function Namestaj(sifra, naziv, jedinicnaCena, kolicinaUMagacinu) {
        this._sifra = sifra;
        this._naziv = naziv;
        this._jedinicnaCena = jedinicnaCena;
        this._kolicinaUMagacinu = kolicinaUMagacinu;
    }
    Object.defineProperty(Namestaj.prototype, "sifra", {
        /**
         * Getter sifra
         * @return {number}
         */
        get: function () {
            return this._sifra;
        },
        /**
         * Setter sifra
         * @param {number} value
         */
        set: function (value) {
            this._sifra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "naziv", {
        /**
         * Getter naziv
         * @return {string}
         */
        get: function () {
            return this._naziv;
        },
        /**
         * Setter naziv
         * @param {string} value
         */
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "jedinicnaCena", {
        /**
         * Getter jedinicnaCena
         * @return {number}
         */
        get: function () {
            return this._jedinicnaCena;
        },
        /**
         * Setter jedinicnaCena
         * @param {number} value
         */
        set: function (value) {
            this._jedinicnaCena = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "kolicinaUMagacinu", {
        /**
         * Getter kolicinaUMagacinu
         * @return {number}
         */
        get: function () {
            return this._kolicinaUMagacinu;
        },
        /**
         * Setter kolicinaUMagacinu
         * @param {number} value
         */
        set: function (value) {
            this._kolicinaUMagacinu = value;
        },
        enumerable: false,
        configurable: true
    });
    return Namestaj;
}());
var Salon = /** @class */ (function () {
    function Salon(naziv, adresa, telefon) {
        this._naziv = naziv;
        this._adresa = adresa;
        this._telefon = telefon;
        this._namestaji = [];
    }
    Object.defineProperty(Salon.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (value) {
            this._adresa = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "telefon", {
        get: function () {
            return this._telefon;
        },
        set: function (value) {
            this._telefon = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "namestaji", {
        get: function () {
            return this._namestaji;
        },
        set: function (value) {
            this._namestaji = value;
        },
        enumerable: false,
        configurable: true
    });
    Salon.prototype.ispisiNamestajNaStanju = function () {
        for (var i = 0; i < this._namestaji.length; i++) {
            console.log(i + 1 + ". " + this._namestaji[i].naziv + " " + this._namestaji[i].kolicinaUMagacinu + " " + this._namestaji[i].jedinicnaCena);
        }
    };
    Salon.prototype.dodajNaLager = function (sifra, kolicina) {
        for (var i in this._namestaji) {
            if (this.namestaji[i].sifra == sifra) {
                this._namestaji[i].kolicinaUMagacinu += kolicina;
                return;
            }
        }
        console.log("Ne postoji namestaj sa unetom sifrom");
    };
    Salon.prototype.dodajNamestaj = function (namestaj) {
        for (var i in this._namestaji) {
            if (this._namestaji[i].sifra == namestaj.sifra) {
                console.log("Namestaj sa ovom sifrom vec postoji. Namestaj nije dodat.");
                return;
            }
        }
        this.namestaji.push(namestaj);
        console.log("Uspesno ste dodali novi namestaj na lager");
    };
    Salon.prototype.prodajKomad = function (sifra, kolicina) {
        for (var i in this._namestaji) {
            if (this._namestaji[i].sifra == sifra) {
                if (this._namestaji[i].kolicinaUMagacinu >= kolicina) {
                    console.log("Uspesno ste kupili namestaj: " + this._namestaji[i].naziv + " po ceni: " + this._namestaji[i].jedinicnaCena * kolicina);
                    this._namestaji[i].kolicinaUMagacinu -= kolicina;
                    return;
                }
                else {
                    console.log("Nema dovoljno namestaja na lageru. Kupovina nije uspesno obavljena.");
                    return;
                }
            }
        }
        console.log("Ne postoji namestaj sa unetom sifrom.");
    };
    return Salon;
}());
var n1 = new Namestaj(111, "Ester Komoda", 50386.5, 15);
var n2 = new Namestaj(123, "Rita Lezaj", 41127.12, 5);
var n3 = new Namestaj(143, "Fiona Lezaj", 41127.12, 0);
var n4 = new Namestaj(144, "Kloe Klub Sto", 20241, 2);
var s = new Salon("Simpo", "Bulevar Oslobodjenja BB", "021/000111");
s.namestaji = [n1, n2, n3, n4];
s.ispisiNamestajNaStanju();
s.dodajNaLager(3, 144);
s.ispisiNamestajNaStanju();
var n5 = new Namestaj(254, "Fira Klub Sto", 30360.83, 11);
s.dodajNamestaj(n5);
n5.sifra = 5;
s.dodajNamestaj(n5);
s.prodajKomad(111, 20);
s.prodajKomad(111, 11);
s.ispisiNamestajNaStanju();
//# sourceMappingURL=app.js.map