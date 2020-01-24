import React, { Component, ReactNode } from 'react';
import { distinctUntilChanged } from 'rxjs/operators';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { ServiceContext, RouteEnum, IStyled } from '../../core';
import { styles } from './navigation.style';
import { Subscription } from 'rxjs';

class TopNavigation extends Component<IStyled, {isLoggedIn: boolean, open: boolean}> {
  static contextType = ServiceContext;

  private _subscription!: Subscription; // prettier-ignore

  constructor(props: IStyled) {
    super(props);
    this.state = {
      isLoggedIn: false,
      open: false
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.anchorEl = this.anchorEl.bind(this);
    this.onProfile = this.onProfile.bind(this);
    this.onMyAccount = this.onMyAccount.bind(this);
  }

  public componentDidMount(): void {
    console.log('??????');
    this._subscription = this.context.authService
      .onLogin
      .pipe(distinctUntilChanged())
      .subscribe((isLoggedIn: boolean) => {
        this.setState({
          ...this.state, isLoggedIn
        }, () => {
          if (!this.state.isLoggedIn) {
          this.context.routeService.navigate(RouteEnum.login);
        }
        });
      });
  }

  public componentWillUnmount(): void {
    this._subscription?.unsubscribe();
  }

  public render(): ReactNode {
    const { classes } = this.props;
    return (
      <>
        {this.state.isLoggedIn && 
        
        (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  LOGO
                </Typography>
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={this.state.open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.onProfile}>Profile</MenuItem>
                    <MenuItem onClick={this.onMyAccount}>My account</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </>
    );
  }

  private handleMenu(): void {}
  private handleClose(): void {}
  private anchorEl(): void {}
  private onProfile(): void {}
  private onMyAccount(): void {}
}

export const Navigation = withStyles(styles)(TopNavigation);