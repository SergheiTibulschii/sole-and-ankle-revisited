/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {css, keyframes} from "styled-components";

const MobileMenu = ({isOpen, onDismiss}) => {
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        if(isClosed) {
            const t = setTimeout(() => {
                onDismiss();
                setIsClosed(false);
            }, 250)

            return () => {
                clearTimeout(t);
            }
        }
    }, [isClosed])

    const handleClose = () => setIsClosed(true)

    if (!isOpen) {
        return null;
    }

    return (
        <MobileMenuWrapper isClosed={isClosed}>
            <MobileMenuContainer>
                <MobileMenuCloseControl onClick={handleClose}>
                    <Icon id='close' />
                    <VisuallyHidden>
                        Close menu button
                    </VisuallyHidden>
                </MobileMenuCloseControl>
                <MobileMenuNav>
                    <MobileMenuNavLink isActive href="/sale">Sale</MobileMenuNavLink>
                    <MobileMenuNavLink href="/new">New&nbsp;Releases</MobileMenuNavLink>
                    <MobileMenuNavLink href="/men">Men</MobileMenuNavLink>
                    <MobileMenuNavLink href="/women">Women</MobileMenuNavLink>
                    <MobileMenuNavLink href="/kids">Kids</MobileMenuNavLink>
                    <MobileMenuNavLink href="/collections">Collections</MobileMenuNavLink>
                </MobileMenuNav>
                <MobileMenuFooter>
                    <MobileMenuFooterLink href="/terms">Terms and Conditions</MobileMenuFooterLink>
                    <MobileMenuFooterLink href="/privacy">Privacy Policy</MobileMenuFooterLink>
                    <MobileMenuFooterLink href="/contact">Contact Us</MobileMenuFooterLink>
                </MobileMenuFooter>
            </MobileMenuContainer>
        </MobileMenuWrapper>
    );
};

const appearAnimation = keyframes`
  0% {
    background: hsl(185deg 5% 65% / 0);
  }
  
  100% {
    background: hsl(185deg 5% 65% / 0.5);
  }
`

const slideInAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  
  100% {
    transform: translateX(0%);
  }
`

const MobileMenuContainer = styled(DialogContent)(() => css`
  width: 80%;
  height: 100%;
  background: var(--clr-white);
  margin-left: auto;
  padding: 35px;
  transition: transform 0.25s ease-in-out;
  animation: ${slideInAnimation} 0.25s ease-in-out;
  transform: translateX(0%);

  display: flex;
  flex-direction: column;
`)

const MobileMenuWrapper = styled(DialogOverlay)(({ isClosed }) => css`
   position: fixed;
   inset: 0;
   z-index: 1000;
   transition: background-color 0.25s ease-in-out;
   animation: ${appearAnimation} 0.25s ease-in-out;
   background: hsl(185deg 5% 65% / 0.5);

  ${isClosed && css`
    background: hsl(185deg 5% 65% / 0);

    & ${MobileMenuContainer} {
      transform: translateX(100%);
    }
  `}
`)

const MobileMenuNav = styled.nav(() => css`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`)

const MobileMenuNavLink = styled.a(({isActive}) => css`
  font-size: 18px;
  line-height: 21px;
  color: ${isActive ? COLORS.secondary : COLORS.gray["900"]};
  text-transform: uppercase;
  transition: color 0.25s;

  &:hover {
    color: var(--clr-secondary);
  }

  &:not(:first-child) {
    margin-top: 22px;
  }
`)

const MobileMenuFooter = styled.footer(() => css`
  display: flex;
  flex-direction: column;
`)

const MobileMenuFooterLink = styled.a(() => css`
  font-size: 14px;
  line-height: 16px;
  color: var(--clr-gray-700);

  &:not(:first-child) {
    margin-top: 14px;
  }
`)

const MobileMenuCloseControl = styled.div`
  position: relative;
  align-self: flex-end;
  cursor: pointer;

  &:before {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export default MobileMenu;
