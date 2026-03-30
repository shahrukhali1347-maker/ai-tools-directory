import Link from 'next/link';
import { MessageSquare, Image as ImageIcon, FileText, Code, Video, Music, Zap, Search, Palette, TrendingUp, BarChart3, Headphones, GraduationCap, DollarSign, Heart } from 'lucide-react';
import { Category } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-8 h-8" />,
  Image: <ImageIcon className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  Code: <Code className="w-8 h-8" />,
  Video: <Video className="w-8 h-8" />,
  Music: <Music className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Search: <Search className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  BarChart3: <BarChart3 className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  DollarSign: <DollarSign className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Image */}
      <div
        className="h-32 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className={`absolute bottom-4 left-4 w-14 h-14 ${category.color} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
          {iconMap[category.icon] || <Zap className="w-8 h-8" />}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
          {category.description}
        </p>
        <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {category.toolCount} tools
        </div>
      </div>
    </Link>
  );
}
