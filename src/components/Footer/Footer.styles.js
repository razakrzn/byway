import { Link } from "react-router-dom";
import styled from "styled-components";

export const Background = styled.div`
  background: #1e293b;
`;
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  padding: 80px 0 110px;

  @media (max-width: 480px) {
    padding: 40px 0 60px;
  }
`;
export const Items = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;

    .item1 {
      flex-basis: 100%;
    }
    .item2,
    .item3 {
      margin-right: 100px;
    }
  }

  @media (max-width: 768px) {
    .item2,
    .item3 {
      margin-right: 50px;
    }
  }

  @media (max-width: 680px) {
    justify-content: space-between;
    .item2,
    .item3 {
      margin-right: 0px;
    }
  }

  @media (max-width: 480px) {
    justify-content: center;
    text-align: center;

    .item2 {
      text-align: left;
      margin-right: 70px;
    }

    .item3 {
      text-align: left;
    }
  }

  @media (max-width: 320px) {
    .item2 {
      margin-right: 25px;
    }
  }
`;
export const Item1 = styled.div`
  width: 416px;
`;
export const Logo = styled(Link)`
  display: inline-block;
  width: 111px;
  margin-bottom: 20px;
`;
export const Paragraph = styled.p`
  color: #cbd5e1;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const Items2 = styled.div``;
export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  margin-bottom: 10px;
`;
export const UlTitle = styled.h5`
  color: #f1f5f9;
  font-size: 18px;
  font-weight: 600;
  line-height: 28.8px;

  @media (max-width: 480px) {
    line-height: 22.8px;
  }
`;
export const TextLink = styled(Link)`
  color: #cbd5e1;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }

  @media (max-width: 320px) {
    line-height: 16px;
  }
`;
export const Items3 = styled.div``;
export const Items4 = styled.div``;
export const Media = styled.div`
  margin-top: 22px;
  @media (max-width: 980px) {
    margin-top: 30px;
  }
`;
export const Icons = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Icon = styled.li``;
export const MediaLinks = styled.a`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  padding: 8px;
`;
export const Image = styled.img`
  width: 100%;
  display: block;
`;
