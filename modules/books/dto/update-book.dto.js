class UpdateBookDto {
    constructor(title, author, genre, stock) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.stock = stock;
    }
  
    static fromRequest(body) {
        const { title, author, genre, stock } = body;
        return new UpdateBookDto(title, author, genre, stock);
    }
  
    validate() {
        const { title, author, genre, stock } = this;
        
        if (typeof title !== 'string' || typeof author !== 'string' || typeof genre !== 'string' || typeof stock !== 'number') {
            throw new Error('Invalid data types');
        }
    }
}
  
module.exports = UpdateBookDto;