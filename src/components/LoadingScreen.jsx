import styled from "styled-components";
import { InfinitySpin } from "react-loader-spinner";

const LoadingContainer = styled.div`
    color: ${props => props.darkMode ? 'var(--text-color-level-2)' : 'var(--text-color-level-5)'};
    font-family: "Nunito Sans", system-ui;
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position:fixed;
    top: 0;
    z-index:102;
    transition: 0.8s;
    opacity: ${props => props.show ? 1 : 0};
    pointer-events: ${props => props.show ? 'all' : 'none'};
    background: ${props => props.darkMode? 'var(--color-level-4)' : 'var(--color-level-1)'};
    *{
        transform: scale(1.2);    }
`




export default function LoadingScreen(props) {
    return (
        <LoadingContainer show={props.show} darkMode={props.darkMode}>
            <InfinitySpin
                visible={true}
                width="220"
                color={props.darkMode ? 'var(--text-color-level-2)' : 'var(--text-color-level-5)'}
                ariaLabel="infinity-spin-loading"
            />    
         <h3>Loading Our Wonderful Website</h3>
        </LoadingContainer>
    );
}