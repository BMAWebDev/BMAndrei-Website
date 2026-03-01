'use client';

import { useTranslation } from '@/i18n';
import type { TranslationKey } from '@/i18n';

const projects: {
  titleKey: TranslationKey;
  tagsKey: TranslationKey;
  image: string;
  alt: string;
}[] = [
  {
    titleKey: 'projects.fintech.title',
    tagsKey: 'projects.fintech.tags',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDx-QYTbFjcDaL9nZbe9zG9sIPqbYwpKijtgqTe0zqLPhsvhZaPsEJv5-zTE0Sdl4iIA6QPnzTDbLQIaLIh4R786dIJ1zuIK0_9Oy5dk4rZ1yrcNQFufARfOWPBj6J27Xb2tp6IN3tL8OYLfuCkoxOz4QfWR5NIxH6dwQe6BJ-ORDMC0tchNGUtL8rP4cN0U4Xu_RzujaTBlJ02kE8DpaLDprlFhy31WzQR4DFy-qGQmc8sz9oVUQSkKbvBCjKbDMN3RWAqoD1GgzI',
    alt: 'Modern minimalist website interface for a financial technology company',
  },
  {
    titleKey: 'projects.fashion.title',
    tagsKey: 'projects.fashion.tags',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkIv55dSluKeTLvHq5JmW5ViAmTnbCFYC2XctOBSjIT6_tWdD4mpUJpq3Vyz57EnsZzwrsvfGg7C7_fxoFQ61iESXwoZvf9QQqE3qLwhbf8DhFywaKKBj4esIoVy2F0UyHQKfNAdyJj4R3YLI9DwmxYjMBiSMs8x0dxgxXFxWvPq9IjS-KApLCql8pLLFSHVSZQgkQ9B2iODoz9F312S10YXmbNAr8J96Zt-6aBcdeS2KP9I_6fbzV93MjvW1FZtKTMLjq85RU_w',
    alt: 'E-commerce mobile app design with clean white space and high-end fashion photos',
  },
  {
    titleKey: 'projects.saas.title',
    tagsKey: 'projects.saas.tags',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDvEyXTkPUPYociytZ4y69NrAxrhJI4K3AuFJ9S9tC3U1pVx1MP4Ty8Lpc0xwFHtFYUfpwMBjQkrAXFe2zic90A_mhd-6EQlu02y2TnMYZb0tBMOl1e3OmS5yWWnXePeqQd8A5317Hlvrln2uLULqIY9iWtN33zbBZuJh-i7mSHGJc4acYSbBsnQH8tYk_A62_fnjh5W_La-ZcwZRbmelcDv8-QnA6DxqF5rJtb1Ym5q6nErbHjdVPE0BU6sZL_5LV9QoZ7L52efM',
    alt: 'Corporate SaaS website design featuring abstract shapes and blue accents',
  },
];

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
              {t('projects.label')}
            </h2>
            <h3 className="text-slate-100 text-4xl font-bold">
              {t('projects.title')}
            </h3>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
            {t('projects.viewAll')}{' '}
            <span className="material-symbols-outlined">north_east</span>
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.titleKey} className="group">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden mb-6 bg-slate-800 border border-slate-700/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h5 className="text-slate-100 text-xl font-bold mb-1">
                {t(project.titleKey)}
              </h5>
              <p className="text-slate-400">{t(project.tagsKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
