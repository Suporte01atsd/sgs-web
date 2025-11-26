

import styled from "styled-components"

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  box-sizing: border-box;
  background: #ffffff;
  font-family: 'Segoe UI', Arial, sans-serif;
`;

export const LoginCard = styled.div`
  padding: 40px;
  width: 30%;
  max-width: 50%;
`;

export const Header = styled.div`
  text-align: left;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.2;
`;

export const Subtitle = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
`

export const Section = styled.div`
  margin-bottom: 24px;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h3`
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
`;

export const RoleGrid = styled.div`
  display: flex;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 8px; 
`;

interface RoleButtonProps {
  selected: boolean;
};

export const RoleButton = styled.button<RoleButtonProps>`
  background: ${props => props.selected ? '#e8f4fd' : '#f8f9fa'};
  border: 1px solid ${props => props.selected ? '#0078d4' : '#d1d1d1'};
  border-radius: 4px;
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${props => props.selected ? '#0078d4' : '#323130'};
  font-size: 13px;
  font-weight: ${props => props.selected ? '600' : '400'};
  line-height: 1.2;
  width: 104px;

  &:hover {
    border-color: #0078d4;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputHint = styled.span`
  color: #605e5c;
  font-size: 12px;
  margin-top: 4px;
`;

export const ForgotPassword = styled.a`
  color: #0078d4;
  text-decoration: none;
  font-size: 14px;
  text-align: left;
  display: block;
  margin: 16px 0 24px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const AccessButton = styled.button`
  background: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s ease;

  &:hover {
    background: #106ebe;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 32px 0;
`;

export const Footer = styled.div`
  padding: 40px;
  width: 40%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BrandName = styled.h3`
  color: #1a1a1a;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 8px 0;
`;

export const BrandDescription = styled.p`
  color: #605e5c;
  font-size: 18px;
  margin: 0 0 16px 0;
  line-height: 1.4;
`;

export const Developer = styled.p`
  color: #605e5c;
  font-size: 13px;
  margin: 0;

  strong {
    color: #1a1a1a;
    font-weight: 600;
  }
`;

export const Logo = styled.img`
  width: 380;
  height: 380px;
  object-fit: contain;
`;