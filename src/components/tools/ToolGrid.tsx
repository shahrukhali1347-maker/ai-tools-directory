import { AITool } from '@/types';
import ToolCard from './ToolCard';
import { ToolCardSkeleton } from '@/components/ui/Skeleton';

interface ToolGridProps {
  tools: AITool[];
  isLoading?: boolean;
  emptyMessage?: string;
}

export default function ToolGrid({
  tools,
  isLoading = false,
  emptyMessage = 'No tools found.',
}: ToolGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <ToolCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (tools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}
