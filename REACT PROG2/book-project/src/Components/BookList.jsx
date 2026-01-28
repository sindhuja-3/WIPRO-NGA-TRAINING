import { useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  const books = [
    { id: 1, title: "Harry Potter", author: "JK Rowling", price: 799 },
    { id: 2, title: "Game of Thrones", author: "George RR Martin", price: 699 },
    { id: 3, title: "The Chronicles of Narnia", author: "CS Lewis", price: 599 }
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2> Featured Books</h2>

      
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      
      <button onClick={() => setView("grid")}>Grid View</button>
      <button onClick={() => setView("list")}>List View</button>

      <div className={view}>
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            view={view}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;