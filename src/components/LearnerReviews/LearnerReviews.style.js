import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0 15px;

  @media (max-width: 480px) {
    padding: 15px 0;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Title = styled.h4`
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;
export const LeftWrapper = styled.div`
  @media (max-width: 768px) {
    width: 35%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const Topline = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;
export const StarIcon = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
`;
export const SpanText = styled.span`
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const ReviewsText = styled.span`
  font-size: 14px;
  font-weight: 400;
  align-self: flex-end;
  margin-left: 5px;

  @media (max-width: 480px) {
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const RightWrapper = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 22px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-direction: column;
    padding: 20px;
  }
`;
export const UserProfile = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 980px) {
    margin-bottom: 20px;
  }
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

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const Contents = styled.div``;
export const Top = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 980px) {
    margin-bottom: 8px;
  }
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

  @media (max-width: 980px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 22.6px;
  }
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

  @media (max-width: 480px) {
    margin: 0 auto;
    width: 150px;
    font-size: 13px;
    padding: 8px 16px 8px 16px;
  }
`;
