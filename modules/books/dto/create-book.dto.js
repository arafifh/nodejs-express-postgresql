class CreateBookDto {
    constructor(title, author, genre, stock) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.stock = stock;
    }
  
    static fromRequest(body) {
        const { title, author, genre, stock } = body;
        return new CreateBookDto(title, author, genre, stock);
    }
  
    validate() {
        const { title, author, genre, stock } = this;

        // Check if required fields are present
        if (!title || !author || !genre || stock === undefined) {
          throw new Error('All fields are required');
        }
      
        // Check if data types are correct
        if (typeof title !== 'string' || typeof author !== 'string' || typeof genre !== 'string' || typeof stock !== 'number') {
          throw new Error('Invalid data types');
        }
    }
}
  
module.exports = CreateBookDto;