import styled from "styled-components";

export const Container = styled.div`
  // width: 90%;
  // margin: 0 auto;
  // max-width: 1280px;
  padding: 30px 0 15px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 600;
`;
export const LeftWrapper = styled.div``;
export const Topline = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
`;
export const StarIcon = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
`;
export const SpanText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
export const ReviewsText = styled.span`
  font-size: 14px;
  font-weight: 400;
  align-self: flex-end;
  margin-left: 5px;
`;
export const StarPyramidContainer = styled.div``;
export const StarText = styled.h5`
  font-size: 18px;
  font-weight: 600;
`;
export const RightSection = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const RightWrapper = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 22px;
  display: flex;
  justify-content: space-between;
`;
export const UserProfile = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ProfilePic = styled.span`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Name = styled.h5`
  font-size: 18px;
  font-weight: 600;
`;
export const Contents = styled.div``;
export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const Date = styled.p`
  margin-left: 30px;
  font-size: 14px;
  font-weight: 400;
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
`;
export const Icon = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
export const Button = styled.button`
  display: block;
  background: transparent;
  width: 179px;
  height: 48px;
  padding: 10px 24px 10px 24px;
  border-radius: 8px;
  border: 1px solid #0f172a;
  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
`;
