import { connection } from "next/server";
import os from "os";
import Image from "next/image";

export default async function About() {
  await connection();
  const hostname = os.hostname();
  const imageUrl = process.env.NEXT_PUBLIC_CLOUDFRONT_URL
    ? `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/images/about-image.jpg`
    : null;

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-12">
      <h1 className="mb-6 text-3xl font-bold">About</h1>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="About image from S3 via CloudFront"
          width={600}
          height={400}
          className="mb-6 rounded-lg"
        />
      ) : (
        <p className="mb-6 text-zinc-500">
          Set the NEXT_PUBLIC_CLOUDFRONT_URL environment variable to display an image.
        </p>
      )}
      <p className="mt-4 text-sm text-zinc-500">Served by: {hostname}</p>
    </div>
  );
}
