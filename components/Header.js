import styled from "styled-components";

export const TextLink = styled.a`
  border-left: 1px solid black;
  padding: 1rem;
`;

export const LinkBtn = styled(TextLink)`
  background: black;
  color: white;
`;

export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center border-b border-gray-900">
      <h1 className="p-4">Off the Rook</h1>
      <nav>
        <TextLink href="/">Pieces</TextLink>
        <TextLink href="/">Openings</TextLink>
        <TextLink href="/">Players</TextLink>
        <LinkBtn href="/">Learn Chess →</LinkBtn>
      </nav>
    </header>
  );
};
