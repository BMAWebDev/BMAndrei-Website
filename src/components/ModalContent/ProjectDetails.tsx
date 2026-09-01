import Image from 'next/image';
import Link from 'next/link';
// models
import { ProjectProps } from '@models/layout';
// hooks
import { useTranslation } from '@i18n/I18nProvider';

interface ProjectDetailsProps {
  project: ProjectProps;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-800 border border-slate-700/50">
        <Image
          alt={project.name || ''}
          className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
          src={project.thumbnail}
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="w-full p-4 pt-0 md:p-10 md:pt-0">
        <h5 className="text-slate-100 text-xl font-bold mb-1">
          {t(project.titleKey)}
        </h5>

        <p
          className="flex flex-col gap-2 text-slate-400"
          dangerouslySetInnerHTML={{ __html: t(project.description) }}
        ></p>

        {project.url && project.ctaTextKey && (
          <div className="flex gap-2 items-center mt-4">
            <Link
              href={project.url}
              target="_blank"
              className="text-slate-400 underline"
            >
              {t(project.ctaTextKey)}
            </Link>

            <span className="text-slate-400 text-base! material-symbols-outlined">
              open_in_new
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
