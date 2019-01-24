import React, { Component } from 'react';
import {
  Container,
  Avatar,
  Icon,
  Table,
  Head,
  Row,
  Th,
  Body,
  Td,
  Section,
  Title,
  SearchInput,
  Search,
  Nav,
  Actions,
  Action
} from './style';

class Menu extends Component {
  render() {
    const { handleClick, tab } = this.props;
    return (
      <div>
        <Nav>
          <Actions>
            <Action active={tab === 0} onClick={() => handleClick(0)}>
              Em aberto
            </Action>
            <Action active={tab === 1} onClick={() => handleClick(1)}>
              Auditados
            </Action>
            <Action active={tab === 2} onClick={() => handleClick(2)}>
              Retidos
            </Action>
            <Action active={tab === 3} onClick={() => handleClick(3)}>
              Diplomados
            </Action>
          </Actions>
        </Nav>
      </div>
    );
  }
}

export default Menu;
