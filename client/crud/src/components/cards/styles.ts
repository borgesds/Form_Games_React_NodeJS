import styled from 'styled-components'

export const ResultContainer = styled.main`
  margin-bottom: 1rem;
`

export const ResultRegistration = styled.div`
  flex: 1;

  table {
    width: 100%;
    /* pegar os espaços e conta como um */
    border-collapse: collapse;
    min-width: 600px;

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 4rem;
      }

      &:last-child {
        padding-left: 2rem;
      }
    }
  }

  table:hover {
    cursor: pointer;
  }
`
