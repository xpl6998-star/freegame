import { useLanguage } from '../hooks/useLanguage';
import type { Platform, Category, SortBy } from '../api/types';

interface FilterBarProps {
  platform: Platform;
  category: Category;
  sortBy: SortBy;
  onPlatformChange: (platform: Platform) => void;
  onCategoryChange: (category: Category) => void;
  onSortByChange: (sortBy: SortBy) => void;
}

export function FilterBar({
  platform,
  category,
  sortBy,
  onPlatformChange,
  onCategoryChange,
  onSortByChange,
}: FilterBarProps) {
  const { t } = useLanguage();

  const platforms: { value: Platform; label: string }[] = [
    { value: 'all', label: t('home.platforms.all') },
    { value: 'windows', label: t('home.platforms.windows') },
    { value: 'browser', label: t('home.platforms.browser') },
  ];

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: t('home.categories.all') },
    { value: 'mmorpg', label: t('home.categories.mmorpg') },
    { value: 'shooter', label: t('home.categories.shooter') },
    { value: 'pvp', label: t('home.categories.pvp') },
    { value: 'mmofps', label: t('home.categories.mmofps') },
    { value: 'survival', label: t('home.categories.survival') },
    { value: 'mmo', label: t('home.categories.mmo') },
    { value: 'racing', label: t('home.categories.racing') },
    { value: 'sports', label: t('home.categories.sports') },
    { value: 'social', label: t('home.categories.social') },
  ];

  const sortOptions: { value: SortBy; label: string }[] = [
    { value: 'relevance', label: t('home.sortBy.relevance') },
    { value: 'popularity', label: t('home.sortBy.popularity') },
    { value: 'release-date', label: t('home.sortBy.releaseDate') },
    { value: 'alphabetical', label: t('home.sortBy.alphabetical') },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white rounded-xl border border-slate-200 mb-6">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-500">
          {t('home.filter.platform')}
        </label>
        <select
          value={platform}
          onChange={(e) => onPlatformChange(e.target.value as Platform)}
          className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {platforms.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-500">
          {t('home.filter.category')}
        </label>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value as Category)}
          className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {categories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-500">
          {t('home.filter.sortBy')}
        </label>
        <select
          value={sortBy}
          onChange={(e) => onSortByChange(e.target.value as SortBy)}
          className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {sortOptions.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}