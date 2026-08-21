'use client';

import Image, { StaticImageData } from 'next/image';
// hooks
import { useTranslation, type TranslationKey } from '@i18n/index';
// components
import CheckoutImage from '@assets/CheckoutAPP.jpeg';
import UploadersImage from '@assets/UploadersAPP.jpeg';

const projects: {
  titleKey: TranslationKey;
  tagsKey: TranslationKey;
  image: string | StaticImageData;
  alt: string;
}[] = [
  {
    titleKey: 'projects.ads.title',
    tagsKey: 'projects.ads.tags',
    image: UploadersImage,
    alt: 'E-commerce mobile app design with clean white space and high-end fashion photos',
  },
  {
    titleKey: 'projects.checkout.title',
    tagsKey: 'projects.checkout.tags',
    image: CheckoutImage,
    alt: 'Modern minimalist website interface for a financial technology company',
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
          {/* <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium">
            {t('projects.viewAll')}{' '}
            <span className="material-symbols-outlined">north_east</span>
          </button> */}
        </div>

        <div className="flex gap-8">
          {projects.map((project) => (
            <div key={project.titleKey} className="group w-full">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-800 border border-slate-700/50">
                <Image
                  alt={project.alt}
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
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
