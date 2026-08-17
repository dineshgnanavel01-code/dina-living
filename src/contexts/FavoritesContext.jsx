/*
 * Flex Living — Sunlit Editorial
 * Favorites context: persists favorited property ids in localStorage.
 */
import { createContext, useCallback, useContext, useMemo, useState } from "react";

const FavoritesContext = createContext(null);

const STORAGE_KEY = "flexliving:favorites";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
    } catch {
      return new Set();
    }
  });

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
      } catch {
        // storage unavailable — keep in-memory only
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ favorites, toggleFavorite }), [favorites, toggleFavorite]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
