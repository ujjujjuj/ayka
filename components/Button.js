import Link from "next/link";
import styled from "styled-components";

const ButtonInner = styled.a`
    padding: 1rem 2rem;
    border: 2px solid ${(props) => props.color || "var(--blue)"};
    background-color: ${(props) => (props.fill ? props.color || "var(--blue)" : "transparent")};
    color: ${(props) => (props.fill ? "white" : "black")};
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
        background-color: ${(props) => props.color || "var(--blue)"};
        color: white;
    }
`;

const Button = ({ href, fill, children, color }) => {
    return (
        <Link href={href} passHref>
            <ButtonInner fill={fill && "true"} color={color}>
                {children}
            </ButtonInner>
        </Link>
    );
};

export default Button;
