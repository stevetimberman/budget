import React from 'react'
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CircularProgress from '@material-ui/core/CircularProgress';




/*
Access the compontents by:
import CommonComponents from '/common'
<CommonComponents.ComponentName />

Components:
-ContainedButton
-ChipBasic
-TextfieldBasic
-BadgeBasic
-ListBasic
-IconButtonBasic
-TypographyBasic
-AppBarBasic
-DrawerBasic
-TabsBasic
-TabBasic
-CircularProgressBasic
*/
const CommonComponents = {

  ContainedButton: function ContainedButton(props) {
    return (
      <Button variant="contained" color={props.color} disabled={props.disabled} type={props.type}>
        {props.children}
          </Button>
    )
    
  },

  //props: label
  ChipBasic: function ChipBasic(props) {
    return (
      <Chip label={props.label} />
    )
    
  },

  //props: required, label, type, fullWidth, multiline
  TextfieldBasic: function TextfieldBasic(props) {
    return (
      <TextField
          label={props.label}
          required={props.required}
          type={props.type}
          input={props.input}
          fullWidth={props.fullWidth}
          helperText={props.helperText}
          multiline={props.multiline}
          // onChange={this.handleChange('name')}
          margin="normal"
        />
    )
    
  },

  //props: color, badgeContent
  BadgeBasic: function BadgeBasic(props) {
    return (
      <Badge color={props.color} badgeContent={props.badgeContent} >
            {props.children}
          </Badge>
    )
    
  },

  //props: color, badgeContent
  ListBasic: function ListBasic(props) {
    return (
      <List >
            {props.children}
          </List>
    )
    
  },

  //props: color, ariaLabel
  IconButtonBasic: function IconButtonBasic(props) {
    return (
      <IconButton color="inherit" aria-label={props.ariaLabel}>
              {props.children}
            </IconButton>
    )
    
  },

  //props: title
  TypographyBasic: function TypographyBasic(props) {
    return (
      <Typography variant={props.title} color="inherit">{props.children}</Typography>
    )
    
  },  


  AppBarBasic: function AppBarBasic(props) {
    return (
      <AppBar position="static">
        <Toolbar>
          {props.children}
        </Toolbar>
      </AppBar>
    )
    
  },

  DrawerBasic: function DrawerBasic(props) {
    return (
      <Drawer
            variant="permanent"
            anchor={props.anchor}
        >
          {props.children}
        </Drawer>
    )
    
  },

  TabsBasic: function TabsBasic(props) {
    return (
      <Tabs value={0} indicatorColor="primary" textColor="primary">{props.children}</Tabs>
    )
    
  },

  TabBasic: function TabBasic(props) {
    return (
      <Tab label={props.label} />
    )
    
  },

  CircularProgressBasic: function CircularProgressBasic(props) {
    return (
      <CircularProgress size={props.size} color={props.color} thickness={props.thickness} />    )
    
  },

}


export default CommonComponents;
