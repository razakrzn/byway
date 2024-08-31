import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoryContainer = styled.div``;
export const HeadinWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;
export const Heading = styled.h3`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 33.6px;
  text-align: left;
  color: #0f172a;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;
export const SeeAllButton = styled.button`
  background: transparent;
  border: none;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  color: #3b82f6;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;
export const Widgets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    gap: 25px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 25px;
  }

  @media (max-width: 480px) {
    gap: 15px;
  }

  @media (max-width: 320px) {
    gap: 10px;
  }
`;
export const Card = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 0px 8px 0px #3b82f61f;

  @media (max-width: 980px) {
    &:not(:nth-child(5)) {
      flex: 1 1 calc(20% - 10px);
    }
  }

  @media (max-width: 768px) {
    &:not(:nth-child(5)) {
      flex: 1 1 calc(20% - 15px);
    }
    &:nth-child(5) {
      width: calc(20% - 10px);
    }
  }

  @media (max-width: 600px) {
    &:not(:nth-child(5)) {
      flex: 1 1 calc(30% - 15px);
    }
    &:nth-child(5) {
      width: calc(43% - 10px);
    }
  }

  @media (max-width: 320px) {
    padding: 10px;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
`;
export const Image = styled.img`
  width: 100%;
  display: block;
`;
export const Name = styled.h5`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 28.8px;
  text-align: left;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const Proffesion = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
export const Line = styled.span`
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
  margin: 12px 0;

  @media (max-width: 768px) {
    margin: 5px 0;
  }

  @media (max-width: 768px) {
    margin: 12px 0;
  }

  @media (max-width: 320px) {
    margin: 8px 0;
  }
`;
export const RatingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 320px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const RatingStar = styled.span`
  display: inline-flex;
  align-items: center;
`;
export const StarIcon = styled.img`
  width: 18px;
  height: 18px;

  @media (max-width: 320px) {
    width: 15px;
    height: 15px;
  }
`;
export const Label = styled.span`
  color: #0f172a;
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  text-align: left;
  margin-left: 5px;
  padding-top: 3px;
`;
export const Subscription = styled.p`
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 14.52px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 10px;
    font-weight: 700;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
