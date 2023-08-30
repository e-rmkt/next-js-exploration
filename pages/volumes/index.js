import { introduction } from "@/lib/data";
import Link from "next/link";
import { GlobalStyle } from "@/styles";

import { volumes } from "@/lib/data";

export default function Page() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volume.title}>
              <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <GlobalStyle />
    </>
  );
}
