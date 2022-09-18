import { HiArrowLeft } from 'react-icons/hi';

import { LinkStyled } from './BackLink.styled';

export default function BackLink({ to, children }) {
  return (
    <LinkStyled to={to}>
      <HiArrowLeft size="24" />
      {children}
    </LinkStyled>
  );
}
