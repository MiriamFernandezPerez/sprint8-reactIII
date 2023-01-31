import styled from 'styled-components';

const CardShipStyle = styled.div`
  background-color: #151515;
  color: white;
  width: 60%;
  padding: 1rem;
  margin: 0.7rem auto;
  h4{
    text-transform: uppercase;
    padding: 0 1rem;
    font-size: 1.3rem;
  }
  h5{
    padding: 0 1rem;
    font-size: 1rem;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  li> a:hover{
    color: #999;
  }
  
`;
export default CardShipStyle;