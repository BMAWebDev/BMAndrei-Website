import Image from 'next/image';
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

      <h5 className="text-slate-100 text-xl font-bold mb-1">
        {t(project.titleKey)}
      </h5>

      <p
        className="text-slate-400"
        dangerouslySetInnerHTML={{ __html: t(project.description) }}
      ></p>
    </div>
  );
};

export default ProjectDetails;
