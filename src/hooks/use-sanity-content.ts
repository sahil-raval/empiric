import { useState, useEffect } from "react";
import { sanityClient } from "@/lib/sanity";

export function useSanityContent<T>(query: string, fallback: T): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchContent() {
      try {
        // If no project ID is configured, immediately use fallback
        if (!import.meta.env.VITE_SANITY_PROJECT_ID) {
          if (isMounted) setLoading(false);
          return;
        }

        const result = await sanityClient.fetch(query);
        if (isMounted && result) {
          setData({ ...fallback, ...result });
        }
      } catch (error) {
        console.warn("Sanity fetch failed, using fallback content.", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, [query]); // Note: fallback is omitted to avoid infinite loops if it's an inline object

  return { data, loading };
}
