import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const slug = router.query.slug;

  const volumeIndex = volumes.find((volume) => volume.slug === slug);

  //   const nextVolume = volumes[volumeIndex + 1];
  //   const previousVolume = volumes[volumeIndex - 1];

  const { title, description, cover, books } = volumeIndex;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.ordinal}>
              {book.ordinal} <br />
              {book.title}
              <hr />
            </li>
          );
        })}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {/* {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null} */}
    </>
  );
}
