import { useNavigate } from 'react-router-dom';

export default function GoBack({ from }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(from, { replace: true });
  };

  return (
    <button type="button" onClick={handleClick}>
      &#x27F5; Go back
    </button>
  );
}
