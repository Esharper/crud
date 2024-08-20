"use client";
import React, { useState } from "react";
import { Book } from "@/utils/library"; // Ensure this path is correct
import ManagementPage from './ManagementPage';

export default function BookComponent({
  id,
  availableCopies,
  title,
  updateBook,
  isbn,
  author,
  deleteBook,
  isManagementPage,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [updatedBook, setUpdatedBook] = useState({
    title,
    author,
    isbn,
    availableCopies,
  });

  function handleUpdateFormSubmit(e) {
    e.preventDefault();

    const newBook = new Book(
      updatedBook.title,
      updatedBook.author,
      updatedBook.isbn,
      updatedBook.availableCopies
    );
    newBook.id = id;

    // Update the book and close the editing form
    updateBook(newBook);
    setIsEditing(false);
  }

  return (
    <div className="flex justify-between p-5 m-5 overflow-auto border border-black rounded-md bg-emerald-500">
      {isEditing ? (
        <form
          onSubmit={handleUpdateFormSubmit}
          className="flex flex-col w-full space-y-4"
        >
          <input
            className="block p-1 border rounded border-emerald-600"
            placeholder="Title"
            type="text"
            name="title"
            id="title-input"
            required
            value={updatedBook.title}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, title: e.target.value })
            }
          />
          <input
            className="block p-1 border rounded border-emerald-600"
            placeholder="Author"
            type="text"
            name="author"
            id="author-input"
            required
            value={updatedBook.author}
            onChange={(e) =>
              setUpdatedBook({ ...updatedBook, author: e.target.value })
            }
          />
          <input
            className="block p-1 border rounded border-emerald-600"
            placeholder="Available Copies"
            type="number"
            name="availableCopies"
            min={0}
            required
            value={updatedBook.availableCopies}
            onChange={(e) =>
              setUpdatedBook({
                ...updatedBook,
                availableCopies: e.target.value,
              })
            }
          />
          <input
            className="block p-1 border rounded border-emerald-600"
            placeholder="ISBN"
            type="text"
            name="isbn"
            id="isbn-input"
            required
            value={updatedBook.isbn}
            disabled
          />
          <button
            className="p-2 border rounded border-emerald-500 hover:bg-emerald-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="flex flex-col space-y-2">
          <p>Title: {title}</p>
          <p>Author: {author}</p>
          <p>ISBN: {isbn}</p>
          <p>Available Copies: {availableCopies}</p>
          {isManagementPage && (
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => setIsEditing(true)}
                title="Edit this book"
                className="p-2 rounded border-emerald-900 hover:bg-emerald-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>

              <button
                onClick={() => deleteBook(isbn, id)}
                title="Delete this book"
                className="p-2 rounded border-emerald-900 hover:bg-emerald-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="text-red-700 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12m0-12L6 18"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
