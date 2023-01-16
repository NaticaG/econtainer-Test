    export class Powerstats {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
        constructor(){}
    }

    export class Appearance {
        gender: string;
        race: string;
        height: string[];
        weight: string[];
        eyeColor: string;
        hairColor: string;
        constructor(){}
    }

    export class Biography {
        fullName: string;
        alterEgos: string;
        aliases: string[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
        constructor(){}
    }

    export class Work {
        occupation: string;
        base: string;
        constructor(){}
    }

    export class Connections {
        groupAffiliation: string;
        relatives: string;
        constructor(){}
    }

    export class Images {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        constructor(){}
    }

    export class HeroDTO {
        id: number;
        name: string;
        slug: string;
        powerstats: Powerstats;
        appearance: Appearance;
        biography: Biography;
        work: Work;
        connections: Connections;
        images: Images;
        constructor(){}
    }
