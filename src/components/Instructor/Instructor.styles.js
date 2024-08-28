import styled from "styled-components";

export const Container = styled.div`
  // width: 90%;
  // margin: 0 auto;
  // max-width: 1280px;
`;
export const Wrapper = styled.div`
  width: 65%;
  border-bottom: 1px solid #e2e8f0;
  padding: 30px 0;
`;
export const Title = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const Name = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 8px;
`;
export const Profession = styled.h6`
  font-size: 16px;
  font-weight: 400;
`;
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;
export const ProfilePic = styled.span`
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;
export const DetailsContainer = styled.div``;
export const Points = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Ponit = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const IconSpan = styled.span`
  display: inline-block;
  width: 22px;
  height: 22px;
`;
export const Icon = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
`;
