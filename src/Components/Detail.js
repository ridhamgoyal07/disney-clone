import React from "react";
import styled from "styled-components";

const Detail = () => {
    return (
        <Container>
            <Background>
                <img
                    src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg"
                    alt="bg"
                />
            </Background>
            <ImageTitle>
                <img
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
                    alt="text"
                />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="play" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="play" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="Group Icon" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>2018 ~ 7m ~ Family , Fantacy , kid , Animation</SubTitle>
            <Description>
                lorem6qwer qwertyu wertyui ertyui sdfgh dfgh ertyu 7c 4rtyyxc 4ty rtyu rtyuc tj
                j i weryhh rtyu ytvybn lorem6qwer qwertyu wertyui ertyui sdfgh dfgh ertyu 7c 4rtyyxc 4ty rtyu rtyuc tjkbkcebkcb3wvc icbcr c och  j i weryhh rtyu ytvybn 
            </Description>
        </Container>
    );
};

export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 20px calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.6;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  width: 30vw;
  min-height: 170px;
  min-width: 200px;

  margin-top:10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: rgb(249, 249, 249);
  padding: 0px 24px;
  height: 56px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: upperCase;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(256, 256, 256, 0.6);
  color: rgba(256, 256, 256, 0.6);
`;
const AddButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 16px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid rgb(249, 249, 249);
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background: rgba(0, 0, 0, 0.8);
`;

const SubTitle = styled.div`
  color:rgba(249,249,249,0.7);
  font-size:15px;
  min-height:20px;
  margin-top:26px;
`;
const Description = styled.div`
  max-width:760px;
  line-height:1.4;
  font-size:16px;
  text-align:justify;
  margin-top:16px;
  color:rgb(249,249,249);
`;