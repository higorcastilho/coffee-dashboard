import styled from 'vue-styled-components'

export const COrderCard = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: ${props => props.theme.dark ? 'none' : '.1rem .1rem 2rem #d1d4e3'} ;	
	height: 8rem;
	border-radius: .5rem;
	margin: 1rem 0;
	padding: 0 1rem;
	background: ${props => props.theme.dark ?  "#38364c" : "#fff"};
	transition: all .7s
`

export const CLeftSection = styled.section`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(2, 1fr); 	
`

export const CRightSection = styled.section`
`

export const CCircleGreen = styled.aside`
	width: 3.2rem;
	height: 3.2rem;
	border-radius: 50%;
	background: #06e293;
	margin-right: .5rem;
	grid-column: 1/3;
	grid-row: 1/3;
`

export const CCircleOrange = styled(CCircleGreen)`
	background: tomato;
`

export const CIdTitle = styled.h4`
	font-size: 1.5rem;
	text-align: left;
	color: ${props => props.theme.dark ?  "#fff" : "var(--color-primary)"};
	grid-column: 3/9;
	grid-row: 1/2;
	transition: all .7s
`

export const CPrice = styled(CIdTitle)`
	color: #06e293;
`

export const CParagraph = styled.p`
	font-size: 1.2rem;
	margin-top: .6rem;
	text-align: left;
	color: ${props => props.theme.dark ? "#fff" : "var(--color-primary-lighter)"};
	grid-column: 3/9;
	grid-row: 2/3;
`