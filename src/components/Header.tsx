import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-6 lg:p-12 text-3xl lg:text-4xl font-bold fixed top-0 left-0 z-1">
        <Link href="/">
            <h1>maehiyu.dev</h1>
        </Link>
    </header>
  );
} 