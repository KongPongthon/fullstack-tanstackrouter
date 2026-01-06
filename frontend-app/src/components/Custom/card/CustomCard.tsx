import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { BookOpen, Eye, Star } from 'lucide-react';

export interface Manga {
  id: string;
  title: string;
  titleTh: string;
  cover: string;
  author: string;
  genres: string[];
  rating: number;
  chapters: number;
  views: string;
  status: 'ongoing' | 'completed';
  description: string;
  lastUpdated: string;
}

interface MangaCardProps {
  manga: Manga;
  index?: number;
}

export function CustomCard({ manga, index = 0 }: MangaCardProps) {
  return (
    <Link
      to={`/manga/${manga.id}`}
      className='group block animate-fade-in-up w-full mx-auto hover:shadow-lg hover:shadow-bg-primary hover:rounded-2xl'
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <Card className='p-0 text-input'>
        <CardContent className='p-0'>
          <div className='relative rounded-xl overflow-hidden bg-card card-hover'>
            <div className='relative aspect-2/3 overflow-hidden'>
              <img
                src={manga.cover}
                alt={manga.title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 manga-card-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              <Badge
                className={`absolute top-2 right-2 ${
                  manga.status === 'ongoing'
                    ? 'bg-bg-primary text-primary-foreground'
                    : 'bg-bg-secondary text-primary-foreground'
                }`}
              >
                {manga.status === 'ongoing' ? 'กำลังอัพเดท' : 'จบแล้ว'}
              </Badge>
              <div className='absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                <div className='flex items-center gap-3 text-sm text-white'>
                  <div className='flex items-center gap-1'>
                    <Star className='w-4 h-4 text-primary-foreground fill-primary' />
                    <span>{manga.rating}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Eye className='w-4 h-4' />
                    <span>{manga.views}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <BookOpen className='w-4 h-4' />
                    <span>{manga.chapters} ตอน</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className='p-0'>
          <div className='p-3'>
            <h3 className='font-semibold text-foreground truncate group-hover:text-primary transition-colors'>
              {manga.titleTh}
            </h3>
            <p className='text-sm text-muted-foreground truncate mt-0.5'>
              {manga.title}
            </p>
            <p className='text-xs text-muted-foreground mt-2'>
              อัพเดท: {manga.lastUpdated}
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
