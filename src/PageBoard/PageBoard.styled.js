import styled from "styled-components";

export const EventList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: ${p => p.theme.space[5]}px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondary};
padding: ${p => p.theme.space[3]}px;
align-items: center;
justify-content: center;
border-radius: 20px;
background-color:  ${p => p.theme.colors.background};
`