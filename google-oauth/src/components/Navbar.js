import React, { Component } from 'react';
import './styles.scss';

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        {/* <div>{this.props.info.feed.author[0].name.$t}</div>
         */}
        <div>
          <i
            class='fa small fa-arrow-circle-o-right push-right'
            aria-hidden='true'
          />
        </div>
      </nav>
    );
  }
}

export default Navbar;
// Material-UI
// v4.11.0
// Diamond Sponsors
// octopus
// App Bar
// The App Bar displays information and actions relating to the current screen.
// templates
// Premium Templates. Start your project with the best templates for admins, dashboards and more.
// ad by Material-UI

// The top App Bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions.

// It can transform into a contextual action bar or be used as a navbar.

// Simple App Bar
// News
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position='static'>
//         <Toolbar>
//           <IconButton
//             edge='start'
//             className={classes.menuButton}
//             color='inherit'
//             aria-label='menu'
//           >
//             {/* <MenuIcon /> */}
//           </IconButton>
//           <Typography variant='h6' className={classes.title}></Typography>
//           <Button color='inherit'>
//             <i class='fa medium fa-arrow-circle-o-right' aria-hidden='true'></i>
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
