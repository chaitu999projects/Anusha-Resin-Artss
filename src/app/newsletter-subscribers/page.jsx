// app/newsletter-subscribers/page.js
import Link from "next/link";
import JoinModel from "../models/Join";
import dbConnect from "../utils/db";

export default async function NewsletterSubscribers() {
  await dbConnect(); // connect before querying

  const subscribers = await JoinModel.find({}).sort({ createdAt: -1 }).lean();

  return (
    <div className="min-h-screen relative top-[280px] bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800">
              Newsletter Subscribers
            </h1>
            <p className="text-gray-600 mt-1">
              {subscribers.length}{" "}
              {subscribers.length === 1 ? "subscriber" : "subscribers"}
            </p>
          </div>

          {subscribers.length === 0 ? (
            <div className="px-6 py-8 text-center">
              <p className="text-gray-500">No subscribers yet.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {subscribers.map((sub, index) => (
                <div
                  key={sub._id}
                  className={`px-6 py-4 flex justify-between items-center ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {sub.name || "Unnamed"}
                    </h3>
                    <p className="text-gray-600">{sub.email}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(sub.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
