export default interface News {
    /**
     * Identifier
     */
    id: number;
    /**
     * News name
     */
    name: string;
    /**
     * News content
     */
    content?: string;
    /**
     * Image to display
     */
    image?: string;
}
