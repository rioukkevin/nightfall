const { News } = require("../models/news");

const getNews = () => {
    return [
        new News({id : 1, name : 'News n°1', content : 'blbabla1', image : 'https://data.theupsider.com.au/wp-content/uploads/2017/09/shady-pines-saloon.jpg'}),
        new News({id : 2, name : 'News n°2', content : 'blbabla2', image : 'https://whyy.org/wp-content/uploads/2018/05/owner-jp-teti-stands-behind-the-basement-bar-at-passyunk-avenue-a-philly-themed-dive-bar-in-london.original-e1526133272703-768x462.jpg'}),
    ];
};

export default getNews

