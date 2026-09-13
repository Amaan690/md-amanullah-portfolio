import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="kicker">404 / signal lost</p>
      <h1>That page is not in the model.</h1>
      <p>Let&apos;s get you back to the useful stuff.</p>
      <Link className="button button-primary" href="/">Return home</Link>
    </main>
  );
}
