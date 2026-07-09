import './check.css';

const CheckCard = ({ name, src, price }) => {
  return (
    <div className='box'>
      <h2>Name : {name}</h2>
      <img src={src} width="300px" alt={name} />
      <h3>Price = {price}</h3>
    </div>
  );
};

export default CheckCard;