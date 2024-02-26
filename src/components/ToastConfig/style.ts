import styled from 'styled-components'

export const ToastDesign = styled.div`
  padding: 0.5rem;
  font-family: 'roboto', sans-serif !important;
  .title {
    font-size: 14px;
    font-weight: bold;
  }

  .info {
    color: #508ce7;
  }

  .success {
    color: #31a171;
  }

  .error {
    color: #e54d2b;
  }

  .warning {
    color: #ecb31f;
  }

  .description {
    font-size: 12px;
    color: gray;
  }
`
