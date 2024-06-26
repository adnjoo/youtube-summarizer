import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 text-center text-sm w-full hover:underline">
      <Link href="https://github.com/adnjoo/fast-youtube-summary">
        built by drew
      </Link>
    </footer>
  );
}
