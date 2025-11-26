

import styled from 'styled-components';

export const DashboardContent = styled.div`
  width: 100%;
  
  .content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    
    h3 {
      margin: 0 0 0.5rem 0;
      color: #1e40af;
    }
    
    p {
      margin: 0;
      color: #64748b;
    }
  }
`;