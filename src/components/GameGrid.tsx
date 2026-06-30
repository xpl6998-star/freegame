import type { LocalizedGame } from '../api/gamesZh';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: LocalizedGame[];
}

function buildItemListSchema(games: LocalizedGame[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: games.map((game, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Game',
        name: game.title,
        description: game.description_zh,
        url: `https://wgogogo.com/game/${game.id}`,
      },
    })),
  };
}

export function GameGrid({ games }: GameGridProps) {
  if (games.length === 0) {
    return null;
  }

  const itemListSchema = buildItemListSchema(games);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}
