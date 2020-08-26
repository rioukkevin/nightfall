import News from "../models/News";

export const getNewsData = (): News[] => {
    return [
        {
            id: 1,
            name: "News n°1",
            content: "blbabla1",
            image:
                "https://data.theupsider.com.au/wp-content/uploads/2017/09/shady-pines-saloon.jpg",
        },
        {
            id: 2,
            name: "News n°2",
            content: "blbabla2",
            image:
                "https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg",
        },
        {
            id: 3,
            name: "News n°3",
            content: "blbabla3",
            image:
                "https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg",
        },
        {
            id: 4,
            name: "News n°4",
            content: "blbabla4",
            image:
                "https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg",
        },
    ];
};
    