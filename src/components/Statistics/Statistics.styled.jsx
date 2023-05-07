import styled from '@emotion/styled';

export const StatisticsContainer = styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StatisticsText = styled.p`
color: rgba(0, 128, 0, 0.8);
    font-size: 35px;
    margin-bottom: 10px;
    font-weight: 500;

  &:hover,
  &:focus{
  background-color: rgba(0, 128, 0, 0.8);
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  outline: none;
  transition: all 0.2s ease 0s;
    transform: translateY(2px);
    color: white;
}
`;




