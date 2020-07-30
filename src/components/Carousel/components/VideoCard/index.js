import React from 'react';
import { VideoCardContainer } from './styles';
import styled from 'styled-components';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

const Title = styled.strong`
  text-align: center;
`;

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    > 
      <Title>
        {videoTitle} 
      </Title>
    
    </VideoCardContainer>
  );
}

export default VideoCard;
