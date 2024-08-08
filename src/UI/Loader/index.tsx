import { LoaderStyled } from './styled';

type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
  return <LoaderStyled className={className}></LoaderStyled>;
};
