import Link from "next/link";
export default function About() {
  return (
    <div>
      <div>Abouts us</div>
      <div>
        Back to{" "}
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
}
