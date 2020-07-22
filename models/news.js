export class News {

    id;
    name;
    content;
    image;

    constructor({ id = null, name = null, content = null, image = null }) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.image = image;
    }

}
