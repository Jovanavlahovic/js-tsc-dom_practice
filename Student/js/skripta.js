var studenti = [];
var Predmet = /** @class */ (function () {
    function Predmet(id, nazivPredmeta, imeProf, ocena) {
        this._id = id;
        this._nazivPredmeta = nazivPredmeta;
        this._imeProfesora = imeProf;
        this._ocena = ocena;
    }
    Object.defineProperty(Predmet.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "nazivPredmeta", {
        get: function () {
            return this._nazivPredmeta;
        },
        set: function (value) {
            this._nazivPredmeta = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "imeProfesora", {
        get: function () {
            return this._imeProfesora;
        },
        set: function (value) {
            this._imeProfesora = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "ocena", {
        get: function () {
            return this._ocena;
        },
        set: function (value) {
            this._ocena = value;
        },
        enumerable: false,
        configurable: true
    });
    return Predmet;
}());
var Student = /** @class */ (function () {
    function Student(ime, prezime, fakultet, brIndeksa) {
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._brIndeksa = brIndeksa;
        this._prosecnaOcena = 0;
        this._polozeniPredmeti = [];
    }
    Object.defineProperty(Student.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fakultet", {
        get: function () {
            return this._fakultet;
        },
        set: function (value) {
            this._fakultet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "brIndeksa", {
        get: function () {
            return this._brIndeksa;
        },
        set: function (value) {
            this._brIndeksa = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prosecnaOcena", {
        get: function () {
            return this._prosecnaOcena;
        },
        set: function (value) {
            this._prosecnaOcena = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "polozeniPredmeti", {
        get: function () {
            return this._polozeniPredmeti;
        },
        set: function (value) {
            this._polozeniPredmeti = value;
            this.izracunajProsecnuOcenu();
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.predstaviSe = function () {
        return "Student: " + this._ime + " " + this.prezime + ", fakultet: " + this._fakultet + ", prosecna ocena: " + this._prosecnaOcena + ".";
    };
    Student.prototype.izracunajProsecnuOcenu = function () {
        var suma = 0;
        for (var i in this._polozeniPredmeti) {
            suma += this._polozeniPredmeti[i].ocena;
        }
        this._prosecnaOcena = suma / this._polozeniPredmeti.length;
    };
    Student.prototype.omiljeniProfesor = function () {
        var profesori = [];
        for (var i in this._polozeniPredmeti) {
            if (this._polozeniPredmeti[i].ocena == 11) {
                profesori.push(this._polozeniPredmeti[i].imeProfesora);
            }
        }
        return profesori.join(", ");
    };
    Student.prototype.dodajPredmet = function (predmet) {
        this._polozeniPredmeti.push(predmet);
        this.izracunajProsecnuOcenu();
    };
    return Student;
}());
function dodajSudenta(forma) {
    var ime = forma.element("ime").value;
    var prezime = forma.element("prezime").value;
    var fakultet = forma.element("fakultet").value;
    var brIndeksa = forma.element("index").value;
    var predmeti = forma.element("predmeti").value;
    var predmeti1 = [];
    var s = predmeti.split(";");
    for (var i in s) {
        var podaci = s[i].split(",");
        var id = podaci[1].trim();
        var naziv = podaci[2].trim();
        var profesor = podaci[3].trim();
        var ocena = Number(podaci[4].trim());
        var noviPredmet = new Predmet(id, naziv, profesor, ocena);
        predmeti1.push(noviPredmet);
    }
    var noviStudent = new Student(ime, prezime, fakultet, brIndeksa);
    noviStudent.polozeniPredmeti = predmeti1;
    studenti.push(noviStudent);
}
function devetke(studenti) {
    var rez = [];
    rez = studenti.filter(function (student) {
        var count = student.polozeniPredmeti.filter(function (predmet) { return (predmet.ocena == 9); }).length;
        return count >= 3;
    });
    return rez;
}
function predstaviStudente() {
    var text = document.getElementById("tekst");
    text.innerHTML = "";
    for (var i in studenti) {
        text.innerHTML += studenti[i].predstaviSe() + "<br>";
    }
}
function predstaviDevetke() {
    var text = document.getElementById("tekst");
    text.innerHTML = "";
    var rez = devetke(studenti);
    for (var i in rez) {
        text.innerHTML += rez[i].predstaviSe() + "<br>";
    }
}
function omiljeniProfesori() {
    var text = document.getElementById("tekst");
    text.innerHTML = "";
    for (var i in studenti) {
        if (studenti[i].omiljeniProfesor()) {
            text.innerHTML += studenti[i].ime + " " + studenti[i].prezime + " ima omiljene profesore: " + studenti[i].omiljeniProfesor() + " <br>";
        }
    }
}
var s1 = new Student("Pera", "Peric", "FTN", "PP-001");
var s1p1 = new Predmet("1", "Predmet 1", "Profesor Profesorevic", 9);
var s1p2 = new Predmet("2", "Predmet 2", "Nastavnik Nastavnikovic", 9);
var s1p3 = new Predmet("3", "Predmet 3", "Predavac Predavacevic", 9);
var s1p4 = new Predmet("4", "Predmet 4", "Doktor Doktorevic", 10);
s1.polozeniPredmeti = [s1p1, s1p2, s1p3, s1p4];
var s2 = new Student("Mika", "Mikic", "FTN", "MM-001");
var s2p1 = new Predmet("1", "Predmet 1", "Profesor Profesorevic", 11);
var s2p2 = new Predmet("2", "Predmet 2", "Nastavnik Nastavnikovic", 9);
var s2p4 = new Predmet("4", "Predmet 4", "Doktor Doktorevic", 11);
s2.polozeniPredmeti = [s2p1, s2p2, s2p4];
var s3 = new Student("Ana", "Anaic", "FTN", "AA-001");
var s3p1 = new Predmet("1", "Predmet 1", "Profesor Profesorevic", 11);
var s3p2 = new Predmet("2", "Predmet 2", "Nastavnik Nastavnikovic", 10);
s3.dodajPredmet(s3p1);
s3.dodajPredmet(s3p2);
studenti.push(s1, s2, s3);
//# sourceMappingURL=skripta.js.map