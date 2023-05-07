import styled from '@emotion/styled';

export const FeedbackContainer = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;


`;

export const FeedbackButton = styled.button`
background-color: rgb(102, 204, 102);
width: 150px;
height: 60px;
  color: #fff;
  font-size: 25px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 26px;

  &:hover,
&:focus {
  background-color: rgba(0, 128, 0, 0.8);
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  outline: none;
  transition: all 0.2s ease 0s;
    transform: translateY(2px);
}
`;