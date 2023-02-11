import styled from "styled-components";

export const InputContainer = styled.div`
padding-top: 1.5rem;
	>div {
		position : relative;
	background-color: ${props => props.theme.colors["background-content"]};
	border-radius: 0.5rem;
	border: solid 2px transparent;
	display: flex;
	align-items: center;
	justify-content: center;

	&.focused {
		border-color: ${props => props.theme.colors["purple-500"]};
			label{
			top: -0.5rem;
			transform: translateY(-100%);
			color: ${props => props.theme.colors.text};
			font-weight: bold;
			font-size: 0.8rem;
			}
		}

	 label {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
    left: 10px;
		transition: all 0.3s ease-in-out;
		font-size: 1.5rem;
		color: ${props => props.theme.colors['zinc-600']};
    
		
       
          
	}

	 input {
		width: 100%;
		height: 100%;
		padding: 0.5rem 1rem;
		border: none;
		outline: none;
		background-color: transparent;
		color: ${props => props.theme.colors.text};
		font-size: 1.5rem;
		z-index: 1;

		&::placeholder {
			color: ${props => props.theme.colors['zinc-400']};
			font-size: 1rem;
		}
		
	 }
	}
`;