import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.SERPAPI_KEY; 
  const placeId = "ChIJn0_ivG8VrjsRkCfD6UJrapg"; 

  try {
    const res = await fetch(
      `https://serpapi.com/search.json?engine=google_maps_reviews&place_id=${placeId}&api_key=${apiKey}`
    );

    const data = await res.json();

    // Extract only reviews
    const reviews = data.reviews?.map((r) => ({
      author_name: r.user?.name,
      rating: r.rating,
      text: r.snippet,
      relative_time_description: r.date,
    })) || [];

    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
