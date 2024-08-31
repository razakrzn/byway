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
  gap: 35px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }

  @media (max-width: 320px) {
    gap: 10px;
  }
`;
export const Card = styled(Link)`
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0px 0px 8px 0px #3b82f61f;

  @media (max-width: 600px) {
    flex: 1 1 calc(30% - 16px);
    padding: 20px;
  }

  @media (max-width: 320px) {
    padding: 10px;
  }
`;
export const IconBackround = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: #e0f2fe;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    padding: 10px;
  }

  @media (max-width: 320px) {
    width: 30px;
    height: 30px;
    padding: 10px;
  }
`;
export const Icon = styled.div`
  width: 30px;
  height: 30px;

  @media (max-width: 320px) {
    width: 20px;
    height: 20px;
  }
`;
export const Subheading = styled.h4`
  color: #0f172a;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  text-align: center;
  margin: 8px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 8px 0 0px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    line-height: inherit;
    margin: 8px 0 4px;
  }
`;
export const Info = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 25.6px;
  text-align: center;
  color: #334155;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 15px;
  }

  @media (max-width: 320px) {
    font-size: 11px;
    line-height: inherit;
  }
`;
