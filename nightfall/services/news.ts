import News from "../models/News";

export const getNewsData = (): News[] => {
    return [
        {
            id: 1,
            name: "Le plus grand tournoi de Beer Pong à Paris",
            content: "blbabla1",
            image:
                "https://data.theupsider.com.au/wp-content/uploads/2017/09/shady-pines-saloon.jpg",
            link: "https://nightfallcards.fr",
        },
        {
            id: 2,
            name: "Nightfall, les secrets de la succès story",
            content: "blbabla2",
            image:
                "https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg",
            link: "https://footmercato.net",
        },
        {
            id: 3,
            name: "Paul Pogba positif au Covid et non retenu",
            content: "blbabla3",
            image:
                "https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg",
            link: "https://lequipe.fr",
        },
        {
            id: 4,
            name: "Que pensez-vous de la nouvelle appli ?",
            content: "blbabla4",
            image:
                "https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg",
            link: "https://eurosport.fr",
        },
    ];
};
