import { useNavigate } from 'react-router-dom';

export default function GoBack({ from }) {
  const navigate = useNavigate();

  //   console.log(from);

  const handleClick = () => {
    console.log('cklickded');
    navigate(from, { replace: true });
  };

  return (
    <button type="button" onClick={handleClick}>
      {' '}
      &#x27F5; Go back
    </button>
  );
}
