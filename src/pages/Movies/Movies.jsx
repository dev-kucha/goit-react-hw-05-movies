import { NavLinkStyled } from '../../components/App.styled';

export default function Movies() {
  return (
    <div>
      Movies{' '}
      <ul>
        <li>
          <NavLinkStyled to=":movieId">MovieDetails</NavLinkStyled>
        </li>
      </ul>
    </div>
  );
}
