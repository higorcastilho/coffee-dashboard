import styled from 'vue-styled-components'

export const COverviewHeaderTitle = styled.h3`
	font-size: 2rem;
	letter-spacing: .1rem;
	font-weight: bold;
	color: ${props => props.theme.dark ? '#fff' : 'var(--color-primary)'};
	transition: all .5s
`

export const COverviewHeaderButton = styled.button`
	background: #FFF;
	outline: none;
	border: .2rem solid var(--color-primary-border-button);
	color: var(--color-primary-button);
	border-radius: 1.5rem;
	padding: .5rem 1.2rem;
	font-size: 1.5rem;
	font-weight: bold;
	cursor: pointer;
	min-height: 3.7rem;
	min-width: 10rem; 
	background: ${props => props.theme.dark ? '#242132' : '#fff'}
	transition: all .5s
`