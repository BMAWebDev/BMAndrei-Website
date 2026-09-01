'use client';

import Image from 'next/image';
import { Fragment, useState } from 'react';
// models
import { OpenedModal, ProjectProps } from '@models/layout';
// hooks
import { useTranslation } from '@i18n/index';
// components
import CheckoutImage from '@assets/CheckoutAPP.jpeg';
import ManagerImage from '@assets/ManagerAPP.png';
import { ProjectDetails } from './ModalContent';
import Modal from './Modal';

const projects: ProjectProps[] = [
  {
    titleKey: 'projects.manager.title',
    tagsKey: 'projects.manager.tags',
    thumbnail: ManagerImage,
    name: 'manager',
    description: 'projects.manager.description',
  },
  {
    titleKey: 'projects.checkout.title',
    tagsKey: 'projects.checkout.tags',
    thumbnail: CheckoutImage,
    name: 'checkout',
    description: 'projects.checkout.description',
    url: 'https://www.bitdefender.com/nl-nl/consumer/individual',
    ctaTextKey: 'projects.test_it',
  },
];

export default function ProjectsSection() {
  const { t } = useTranslation();

  const [openedModal, setOpenedModal] = useState<OpenedModal>(null);

  const closeModal = () => setOpenedModal(null);

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

        <div className="flex flex-col md:flex-row gap-8">
          {projects.map((project) => (
            <Fragment key={project.titleKey}>
              <div className="group w-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-800 border border-slate-700/50">
                  <Image
                    alt={project.name || ''}
                    className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                    src={project.thumbnail}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center gap-1">
                  <h5 className="text-slate-100 text-xl font-bold mb-1">
                    {t(project.titleKey)}
                  </h5>

                  {project.name && (
                    <span
                      className="cursor-pointer material-symbols-outlined text-slate-400"
                      onClick={() => setOpenedModal(project.name!)}
                    >
                      info
                    </span>
                  )}
                </div>
                <p className="text-slate-400">{t(project.tagsKey)}</p>
              </div>

              <Modal
                isOpen={openedModal === project.name}
                closeModal={closeModal}
                modalContentClassname="p-0!"
                isCentered
                size="5xl"
              >
                <ProjectDetails project={project} />
              </Modal>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
