const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const STORAGE_KEY = "uda_utm_params";

function readFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const found = {};
  let hasAny = false;
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) {
      found[key] = value;
      hasAny = true;
    }
  });
  return hasAny ? found : null;
}

/**
 * Returns UTM params for the current visit, preferring the live URL query
 * string but falling back to the first-touch values captured earlier in
 * the session (so forms filled after internal navigation still attribute).
 */
export function getUtmParams() {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_medium: "", utm_campaign: "", utm_term: "", utm_content: "" };
  }

  const fromQuery = readFromQuery();
  if (fromQuery) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromQuery));
  }

  let stored = fromQuery;
  if (!stored) {
    try {
      stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    } catch {
      stored = null;
    }
  }

  return {
    utm_source: stored?.utm_source || "",
    utm_medium: stored?.utm_medium || "",
    utm_campaign: stored?.utm_campaign || "",
    utm_term: stored?.utm_term || "",
    utm_content: stored?.utm_content || "",
  };
}

export function getPageContext() {
  if (typeof window === "undefined") {
    return { pageUrl: "", referrer: "" };
  }
  return {
    pageUrl: window.location.href,
    referrer: document.referrer || "",
  };
}
