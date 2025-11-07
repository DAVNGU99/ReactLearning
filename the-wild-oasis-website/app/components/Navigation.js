import Link from "next/link";

function navigation() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>{" "}
      </li>
      <li>
        <Link href="/cabins">Cabins page</Link>{" "}
      </li>
      <li>
        <Link href="/about">Abouts page</Link>{" "}
      </li>
      <li>
        <Link href="/account">Account page</Link>{" "}
      </li>
    </ul>
  );
}

export default navigation;
