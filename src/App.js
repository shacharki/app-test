
import React, { useEffect, useState } from "react";
import moment from "moment";
import styled from 'styled-components'
import Meeting from './meeting'

const StyledAvatarWrapper = styled.div`
  margin-right: auto;
  margin-left: 28px;
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
   display: flex;
    margin-right: 26px;
    font-family: Assistant;
    font-size: 20px;
    line-height: 10px;
    text-align: center;
`;

const App = () => {
  const [openModal, setOpenModal] = useState(false)

  const date = moment().format("DD.MM.YYYY");
  // const defaultDate = useMemo(() => new Date(), [])


  useEffect(() => {
  }, [])

  const handleCreateMeeting = () => {
    setOpenModal(true)
    //open modal create
  };

  const handleRemoveMeeting = () => {
    //open date page wite meeting
  };

  const handleUpdateMeeting = () => {
    //open date page wite meeting
  };

  return (
    <StyledAvatarWrapper>

      <StyledButton onClick={() => handleCreateMeeting}>Create Meeting</StyledButton>
      <StyledButton onClick={() => handleRemoveMeeting}>Remove Meeting</StyledButton>
      <StyledButton onClick={() => handleUpdateMeeting}>Update Meeting</StyledButton>
      <div>{date}</div>
      {openModal && <Meeting />}
    </StyledAvatarWrapper>
  );
}

export default App;
