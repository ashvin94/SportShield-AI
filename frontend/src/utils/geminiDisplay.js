/**
 * Turns raw Gemini / SDK error text into short copy for the AI Observation field.
 * Works even when the API returns the full [GoogleGenerativeAI Error] string.
 */
export function friendlyGeminiDescription(description) {
  if (description == null || typeof description !== "string") return description;
  const lower = description.toLowerCase();
  const regionBlocked =
    lower.includes("location is not supported") ||
    lower.includes("user location is not supported") ||
    lower.includes("not supported for the api use");
  if (regionBlocked) {
    return (
      "Google is blocking Gemini for your region or how requests reach Google (e.g. local backend IP). " +
      "Fix: run the API on supported hosting (US/EU), use a VPN exit in a supported country for local dev, or adjust your Google AI / Cloud billing region. " +
      "Details: https://ai.google.dev/gemini-api/docs"
    );
  }
  return description;
}
