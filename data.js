const DATA = [
    {
        "back": "Charakter",
        "front": "El carácter"
    },
    {
        "back": "dobry",
        "front": "bueno"
    },
    {
        "back": "zły",
        "front": "malo"
    },
    {
        "back": "uprzejmy/miły",
        "front": "amable ø"
    },
    {
        "back": "ordynarny/grybiański",
        "front": "grosero"
    },
    {
        "back": "sympatyczny",
        "front": "simpático"
    },
    {
        "back": "niesympatycznt",
        "front": "antipático"
    },
    {
        "back": "poważny",
        "front": "serio"
    },
    {
        "back": "zabawny/śmieszny",
        "front": "divertido"
    },
    {
        "back": "cierpliwy",
        "front": "paciente ø"
    },
    {
        "back": "niecierpliwy",
        "front": "impaciente"
    },
    {
        "back": "nerwowy",
        "front": "nervioso"
    },
    {
        "back": "nieśmiały",
        "front": "tímido"
    },
    {
        "back": "surowy",
        "front": "riguroso"
    },
    {
        "back": "czas",
        "front": "el tiempo"
    },
    {
        "back": "moment/chwila",
        "front": "el momento"
    },
    {
        "back": "Kiedy?",
        "front": "¿Cuándo?"
    },
    {
        "back": "przed",
        "front": "antes"
    },
    {
        "back": "po/potem",
        "front": "después"
    },
    {
        "back": "minuta",
        "front": "el minuto"
    },
    {
        "back": "sekunda",
        "front": "el segundo"
    },
    {
        "back": "godzina",
        "front": "la hora"
    },
    {
        "back": "o (godzina)",
        "front": "a (la hora)"
    },
    {
        "back": "pół",
        "front": "medio"
    },
    {
        "back": "mniej",
        "front": "menos"
    },
    {
        "back": "i",
        "front": "y (e)"
    },
    {
        "back": "kwadrans",
        "front": "el cuarto"
    },
    {
        "back": "późno",
        "front": "tarde"
    },
    {
        "back": "wcześnie",
        "front": "temprano"
    },
    {
        "back": "ranek",
        "front": "la mañana"
    },
    {
        "back": "południe",
        "front": "el mediodía"
    },
    {
        "back": "popołudnie/wieczór",
        "front": "la tarde"
    },
    {
        "back": "noc",
        "front": "la noche"
    },
    {
        "back": "wczoraj",
        "front": "ayer"
    },
    {
        "back": "dziś",
        "front": "hoy"
    },
    {
        "back": "jutro",
        "front": "mañana"
    },
    {
        "back": "już",
        "front": "ya"
    },
    {
        "back": "jeszcze",
        "front": "todavía"
    },
    {
        "back": "teraz",
        "front": "ahora"
    },
    {
        "back": "natychmiast",
        "front": "en seguida"
    },
    {
        "back": "zawsze",
        "front": "siempre"
    },
    {
        "back": "często",
        "front": "a menudo"
    },
    {
        "back": "normalny",
        "front": "normal ø"
    },
    {
        "back": "normalnie",
        "front": "normalmente"
    },
    {
        "back": "czasami",
        "front": "a veces"
    },
    {
        "back": "nigdy",
        "front": "nunca"
    },
    {
        "back": "zaczynać (się)",
        "front": "empezar(2e:ie)"
    },
    {
        "back": "początek",
        "front": "el principio"
    },
    {
        "back": "kończyć",
        "front": "terminar"
    },
    {
        "back": "koniec",
        "front": "el final (fin)"
    },
    {
        "back": "w końcu",
        "front": "finalmente"
    },
    {
        "back": "ciało",
        "front": "el cuerpo"
    },
    {
        "back": "głowa",
        "front": "la cabeza"
    },
    {
        "back": "twarz",
        "front": "la cara"
    },
    {
        "back": "oko",
        "front": "el ojo"
    },
    {
        "back": "widzieć",
        "front": "ver (1 os. veo)"
    },
    {
        "back": "ucho",
        "front": "la oreja"
    },
    {
        "back": "słyszeć",
        "front": "oír (nr)"
    },
    {
        "back": "nos",
        "front": "la nariz"
    },
    {
        "back": "usta",
        "front": "la boca"
    },
    {
        "back": "język",
        "front": "la lengua"
    },
    {
        "back": "ząb",
        "front": "el diente"
    },
    {
        "back": "gardło",
        "front": "la garganta"
    },
    {
        "back": "pierś/klatka persiowa",
        "front": "el pecho"
    },
    {
        "back": "serce",
        "front": "el corazón"
    },
    {
        "back": "krew",
        "front": "la sangre"
    },
    {
        "back": "ramię/ręka",
        "front": "el brazo"
    },
    {
        "back": "łokieć",
        "front": "el codo"
    },
    {
        "back": "dłoń",
        "front": "la mano"
    },
    {
        "back": "palec",
        "front": "el dedo"
    },
    {
        "back": "brzuch",
        "front": "el vientre (la barriga)"
    },
    {
        "back": "żołądek",
        "front": "el estómago"
    },
    {
        "back": "noga",
        "front": "la pierna"
    },
    {
        "back": "kolano",
        "front": "la rodilla"
    },
    {
        "back": "stopa",
        "front": "el pie"
    },
    {
        "back": "skóra",
        "front": "la piel"
    },
    {
        "back": "dom",
        "front": "la casa"
    },
    {
        "back": "mieszkać",
        "front": "vivir"
    },
    {
        "back": "sąsiad",
        "front": "el vecino"
    },
    {
        "back": "mieszkanie",
        "front": "el piso"
    },
    {
        "back": "piętro",
        "front": "la planta"
    },
    {
        "back": "schody",
        "front": "la escalera"
    },
    {
        "back": "winda",
        "front": "el ascensor"
    },
    {
        "back": "drzwi",
        "front": "la puerta"
    },
    {
        "back": "klucz",
        "front": "la llave"
    },
    {
        "back": "korytarz",
        "front": "el pasillo"
    },
    {
        "back": "kuchnia",
        "front": "la cocina"
    },
    {
        "back": "pomieszczenie",
        "front": "el cuarto"
    },
    {
        "back": "toaleta",
        "front": "el servicio"
    },
    {
        "back": "lustro",
        "front": "el espejo"
    },
    {
        "back": "pokój",
        "front": "la habitación"
    },
    {
        "back": "salon",
        "front": "el salón"
    },
    {
        "back": "półka",
        "front": "el estante"
    },
    {
        "back": "regał",
        "front": "la estantería"
    },
    {
        "back": "fotel",
        "front": "el sillón"
    },
    {
        "back": "wygodny",
        "front": "cómodo"
    },
    {
        "back": "niewygodny",
        "front": "incómodo"
    },
    {
        "back": "sofa",
        "front": "el sofá"
    },
    {
        "back": "podłoga, ziemia",
        "front": "el suelo"
    },
    {
        "back": "dywan",
        "front": "la alfombra"
    },
    {
        "back": "jadalnia",
        "front": "el comedor"
    },
    {
        "back": "krzesło",
        "front": "la silla"
    },
    {
        "back": "stół",
        "front": "la mesa"
    },
    {
        "back": "lampa",
        "front": "la lámpara"
    },
    {
        "back": "sufit",
        "front": "el techo"
    },
    {
        "back": "sypialnia",
        "front": "el dormitorio"
    },
    {
        "back": "łóżko",
        "front": "la cama"
    },
    {
        "back": "szafa",
        "front": "el armario"
    },
    {
        "back": "ściana",
        "front": "la pared"
    },
    {
        "back": "okno",
        "front": "la ventana"
    },
    {
        "back": "balkon",
        "front": "el balcón"
    },
    {
        "back": "podwórze",
        "front": "el patio"
    },
    {
        "back": "dźwięk",
        "front": "el sonido"
    },
    {
        "back": "cisza",
        "front": "el silencio"
    },
    {
        "back": "cichy",
        "front": "silencioso"
    },
    {
        "back": "cichy (głos), niski",
        "front": "bajo"
    },
    {
        "back": "hałas",
        "front": "el ruido"
    },
    {
        "back": "hałaśliwy",
        "front": "ruidoso"
    },
    {
        "back": "głośny",
        "front": "alto"
    },
    {
        "back": "dzwonić, pukać",
        "front": "llamar"
    },
    {
        "back": "szkodzić, krzywdzić",
        "front": "dañar"
    },
    {
        "back": "krzywda",
        "front": "el daño"
    },
    {
        "back": "chronić",
        "front": "proteger"
    },
    {
        "back": "ochrona",
        "front": "la protección"
    },
    {
        "back": "środowisko",
        "front": "el medio ambiente"
    },
    {
        "back": "pieniądze",
        "front": "el dinero"
    },
    {
        "back": "mieć",
        "front": "tener"
    },
    {
        "back": "kosztować",
        "front": "costar"
    },
    {
        "back": "cena",
        "front": "el precio"
    },
    {
        "back": "tani",
        "front": "barato"
    },
    {
        "back": "drogi",
        "front": "caro"
    },
    {
        "back": "dosyć",
        "front": "bastante"
    },
    {
        "back": "darmowy",
        "front": "gratuito"
    },
    {
        "back": "gratis",
        "front": "gratis"
    },
    {
        "back": "rachunek",
        "front": "la cuenta"
    },
    {
        "back": "płacić",
        "front": "pagar"
    },
    {
        "back": "wydawać",
        "front": "gastar"
    },
    {
        "back": "wydatek",
        "front": "el gasto"
    },
    {
        "back": "prawie",
        "front": "casi"
    },
    {
        "back": "nic",
        "front": "nada"
    },
    {
        "back": "pożyczać",
        "front": "prestar"
    },
    {
        "back": "oszczędzać",
        "front": "ahorrar"
    },
    {
        "back": "oszczędności",
        "front": "los ahorros"
    },
    {
        "back": "bank",
        "front": "el banco"
    },
    {
        "back": "bankowy",
        "front": "bancario"
    },
    {
        "back": "wymieniać (pieniądze)",
        "front": "cambiar"
    },
    {
        "back": "wymiana (pieniędzy)",
        "front": "el cambio"
    },
    {
        "back": "przemysł",
        "front": "la industria"
    },
    {
        "back": "przemysłowy",
        "front": "industrial"
    },
    {
        "back": "produkować",
        "front": "fabricar"
    },
    {
        "back": "fabryka",
        "front": "la fábrica"
    },
    {
        "back": "firma",
        "front": "la empresa"
    },
    {
        "back": "przedsiębiorca",
        "front": "el empresario"
    },
    {
        "back": "prywatny",
        "front": "privado"
    },
    {
        "back": "publiczny",
        "front": "público"
    },
    {
        "back": "biznes, interes",
        "front": "el negocio"
    },
    {
        "back": "handlować",
        "front": "comerciar"
    },
    {
        "back": "handel",
        "front": "el comercio"
    },
    {
        "back": "handlowiec",
        "front": "el/la comerciante"
    },
    {
        "back": "myć (się)",
        "front": "lavar(se)"
    },
    {
        "back": "mydło",
        "front": "el jabón"
    },
    {
        "back": "szampon",
        "front": "el champú"
    },
    {
        "back": "czesaś (się)",
        "front": "peinar(se)"
    },
    {
        "back": "grzebień",
        "front": "el peine"
    },
    {
        "back": "krem",
        "front": "la crema"
    },
    {
        "back": "golić (się)",
        "front": "afeitar(se)"
    },
    {
        "back": "brać prysznic",
        "front": "ducharse"
    },
    {
        "back": "prysznic",
        "front": "la ducha"
    },
    {
        "back": "ręcznik",
        "front": "la toalla"
    },
    {
        "back": "mokry",
        "front": "mojado"
    },
    {
        "back": "suchy",
        "front": "seco"
    }
]