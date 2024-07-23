import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center flex-col items-center my-13">
      <h2 className="text-red-700 text-3xl  my-6">Opps!! Not Found!</h2>
      <p className="text-gray-300 text-3xl py-5">
        Could not find requested resource
      </p>
      <button className="bg-primary-300 rounded-lg px-3 py-3 text-white mb-10">
        <Link href="/">Return Home</Link>
      </button>
    </div>
  );
}
