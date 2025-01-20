import Image from 'next/image';
import notFoundImage from '@/images/notFound.png';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <main className="text-center">
        <h1 className="text-5xl font-bold text-customGray">
          Oops, the dish isn’t ready yet!
        </h1>
        <p className="text-lg text-customGray mt-4">
          Looks like you’ve checked in too early — this recipe is still cooking.
          Head back to the homepage to find something else delicious!
        </p>
        <Image
          src={notFoundImage}
          alt="Empty plate"
          className="mx-auto mt-6"
          width={256}
          height={256}
        />
        <a
          href="/"
          className="mt-6 inline-block bg-customGray text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Back to Recipes
        </a>
      </main>
    </div>
  );
}
