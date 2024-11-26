import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

// Ensure the API route is using the Edge runtime
export const runtime = "edge"; // <-- This line is crucial!

export default async function GET() {
  try {
    // const mediumRSSFeed = "https://medium.com/feed/@righthandventure24";
    const mediumRSSFeed = "https://medium.com/feed/@anubhavkaushik2020";

    // Fetch RSS feed data
    const response = await fetch(mediumRSSFeed, {
      method: "GET",
      headers: {
        Accept: "application/rss+xml",
      },
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      return NextResponse.json(
        { error: "Failed to fetch Medium RSS feed" },
        { status: response.status }
      );
    }

    const responseText = await response.text();

    // Parse XML response using fast-xml-parser
    const parser = new XMLParser();
    const parsedResult = parser.parse(responseText);

    // Extract and structure post data
    const items = parsedResult.rss.channel.item;

    // Initial static ID
    let staticId = 1001023312321;

    const postsData = items
      .map((item) => {
        try {
          const link = item.link || "";
          const pubDate = item.pubDate
            ? new Date(item.pubDate).toISOString()
            : "";
          const content = item["content:encoded"] || "";

          // Create a unique ID with static base and increment it
          const uniqueId = (staticId++).toString();

          return {
            id: uniqueId, // Unique identifier for the post
            title: item.title,
            link: link,
            pubDate: pubDate,
            content: content,
          };
        } catch (error) {
          console.error("Error processing item:", error);
          return null;
        }
      })
      .filter((item) => item !== null);

    return NextResponse.json({ posts: postsData });
  } catch (error) {
    console.error("Error fetching Medium RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch Medium RSS feed" },
      { status: 500 }
    );
  }
}
