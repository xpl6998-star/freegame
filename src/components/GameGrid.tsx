import type { Game } from '../api/types';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: Game[];
}

export function GameGrid({ games }: GameGridProps) {
  if (games.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}