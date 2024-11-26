export async function fetchMediumPosts() {
  try {
    const response = await fetch("/api/fetchMedium"); // Ensure path is correct
    if (!response.ok) {
      console.error("Failed to fetch Medium posts, Status:", response.status);
      throw new Error("Failed to fetch Medium posts");
    }
    const data = await response.json();
    console.log("Fetched posts:", data.posts); // Log to ensure data is correct
    return data.posts;
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return [];
  }
}
