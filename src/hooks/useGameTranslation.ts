import { useState, useEffect, useRef } from 'react';
import { translateGameField } from '../api/translate';
import type { Game } from '../api/types';

interface TranslationCache {
  [key: string]: string;
}

export function useGameTranslation(games: Game[], isZh: boolean) {
  const [translatedGames, setTranslatedGames] = useState<Game[]>(games);
  const [isTranslating, setIsTranslating] = useState(false);
  const cacheRef = useRef<TranslationCache>({});
  const gamesRef = useRef(games);

  useEffect(() => {
    gamesRef.current = games;
  }, [games]);

  useEffect(() => {
    if (!isZh) {
      setTranslatedGames(games);
      return;
    }

    const translateGames = async () => {
      setIsTranslating(true);

      const gamesToTranslate = games.filter(
        (g) => !cacheRef.current[`desc_${g.id}`]
      );

      if (gamesToTranslate.length === 0) {
        setTranslatedGames(games);
        setIsTranslating(false);
        return;
      }

      const newCache: TranslationCache = { ...cacheRef.current };

      await Promise.all(
        gamesToTranslate.map(async (game) => {
          const translatedDesc = await translateGameField(game.short_description, true);
          newCache[`desc_${game.id}`] = translatedDesc;
        })
      );

      cacheRef.current = newCache;

      setTranslatedGames(
        games.map((g) => ({
          ...g,
          short_description: newCache[`desc_${g.id}`] || g.short_description,
        }))
      );

      setIsTranslating(false);
    };

    translateGames();
  }, [games, isZh]);

  return { translatedGames, isTranslating };
}

export function useGameDetailTranslation(game: Game | undefined, isZh: boolean) {
  const [translatedGame, setTranslatedGame] = useState(game);
  const [isTranslating, setIsTranslating] = useState(false);
  const cacheRef = useRef<TranslationCache>({});

  useEffect(() => {
    if (!isZh || !game) {
      setTranslatedGame(game);
      return;
    }

    const translateGame = async () => {
      setIsTranslating(true);

      const cacheKey = `detail_${game.id}`;
      if (cacheRef.current[cacheKey]) {
        setTranslatedGame({
          ...game,
          short_description: cacheRef.current[cacheKey],
        });
        setIsTranslating(false);
        return;
      }

      const translatedDesc = await translateGameField(game.short_description, true);
      cacheRef.current[cacheKey] = translatedDesc;

      setTranslatedGame({
        ...game,
        short_description: translatedDesc,
      });

      setIsTranslating(false);
    };

    translateGame();
  }, [game, isZh]);

  return { translatedGame, isTranslating };
}