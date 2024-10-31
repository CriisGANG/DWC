function Autor (Nom ,Apellidos){
    this.Nom = Nom
    this.Apellidos = Apellidos
    }


function Llibre(titol, autor, preu, ISBN, editorial, numeroDeEdicio, anyDePublicacio, generos) {
    
    this.titol = titol
    this.autor = autor
    this.preu = preu
    this.ISBN = ISBN
    this.editorial = editorial
    this.numeroDeEdicio = numeroDeEdicio
    this.anyDePublicacio = anyDePublicacio
    this. generos = generos
    
}

const llibres = [
    new Llibre(
        "El Petit Príncep",
        new Autor("Antoine", "de Saint-Exupéry"),
        15.50,
        "978-3-16-148410-0",
        "Editorial Juventud",
        1,
        1943,
        ["Infantil", "Filosofia"]
    ),
    new Llibre(
        "1984",
        new Autor("George", "Orwell"),
        12.30,
        "978-0-452-28423-4",
        "Signet Classics",
        1,
        1949,
        ["Ficció", "Dystopia"]
    ),
    new Llibre(
        "La casa dels esperits",
        new Autor("Isabel", "Allende"),
        18.00,
        "978-84-204-8276-8",
        "Plaza & Janés",
        2,
        1982,
        ["Ficció", "Realisme Màgic"]
    ),
    new Llibre(
        "Cien años de soledad",
        new Autor("Gabriel", "García Márquez"),
        20.00,
        "978-0-06-088328-7",
        "Harper & Row",
        1,
        1967,
        ["Ficció", "Realisme Màgic"]
    ),
    new Llibre(
        "Moby Dick",
        new Autor("Herman", "Melville"),
        14.50,
        "978-1-56619-909-4",
        "Pleiades Press",
        1,
        1851,
        ["Ficció", "Aventura"]
    )
];

console.log(llibres);
