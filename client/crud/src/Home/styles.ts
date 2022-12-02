import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-top: 2rem;
    color: ${(props) => props.theme['green-500']};
  }
`

export const RegisterInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme['gray-700']};
  padding: 2rem 2.5rem;
  border: 2px solid ${(props) => props.theme['green-700']};
  border-radius: 8px;
  margin-top: 1.25rem;
`

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['green-500']};
  font-size: 2.5rem;
`

export const InputAction = styled.input`
  display: block;
  padding: 0.625rem;
  margin: 0.625rem auto;
  border: 2px solid ${(props) => props.theme['gray-700']};
  border-radius: 8px;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-700']};
    font-style: italic;
  }
`

export const ButtonRegistration = styled.button`
  width: 100%;
  border: 0;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 8px;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const CardSeparation = styled.div`
  margin-top: 1.5rem;
`

export const TitleTable = styled.div`
  flex: 1;
  margin-top: 1rem;

  table {
    width: 100%;
    /* pegar os espaços e conta como um */
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
  }
`
