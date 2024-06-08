import { useParams as NextUserParams, usePathname } from 'next/navigation';

const useGetPathname = () => {
  const { lang } = NextUserParams();
  const pathname = usePathname();

  if (pathname === `/${lang}`) return '/';

  return pathname.replace(`/${lang}`, '');
};

export default useGetPathname;
