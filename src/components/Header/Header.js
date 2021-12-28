import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon";

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader/>
            <MainHeader>
                <Side>
                    <Logo/>
                </Side>
                <LaptopNav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </LaptopNav>
                <MobileNav>
                    <Icon id='shopping-bag'/>
                    <Icon id='search'/>
                    <OpenMenuIcon onClick={() => setShowMobileMenu(true)} />
                </MobileNav>
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const MainHeader = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 0 32px;
  height: 72px;
  border-bottom: 1px solid color: var(--clr-gray-300);;
  overflow: hidden;
`;

const LaptopNav = styled.nav`
  display: none;
  overflow: auto;
  height: 100%;
  margin-right: -32px;
  padding: 0 32px;

  @media ${QUERIES.laptopAndUp} {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;

const Side = styled.div`
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--clr-gray-900);
  font-weight: var(--font-medium);

  &:first-of-type {
    color: var(--clr-secondary);
    margin-left: auto;
  }
  
  &:last-of-type {
    margin-right: auto;
  }

  &:not(:first-of-type) {
    margin-left: clamp(2rem, 5vw - 1rem, 4rem);
  }
`;

const MobileNav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: clamp(1rem, 7.9vw - 0.5rem, 2.5rem);
  
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const OpenMenuIcon = styled(Icon).attrs({
    id: 'menu'
})`
  cursor: pointer;
`

export default Header;
