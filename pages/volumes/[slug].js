import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { GlobalStyle } from "@/styles";

const StyledBox = styled.div`
  background-color: ${({ color }) => color};
`;

export default function Page() {
  const router = useRouter();

  const slug = router.query.slug;

  //   const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  //   const volume = volumes[volumeIndex];
  //   const nextVolume = volumes[volumeIndex + 1];
  //   const previousVolume = volumes[volumeIndex - 1];

  //   const { title, description, cover, books, color } = volume;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <StyledBox color={color}>
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
      </StyledBox>
      {previousVolume ? (
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
      ) : null}
      <GlobalStyle />
    </>
  );
}
