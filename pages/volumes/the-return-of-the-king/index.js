import { volumes } from "@/lib/data";
import Link from "next/link";

export default function Page() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} <br />
              {book.title}
              <hr />
            </li>
          );
        })}
      </ul>
    </>
  );
}
