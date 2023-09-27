import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ChecklistIcon from '@mui/icons-material/Checklist';

const links = [
  { text: 'Personal', href: '/', icon: HomeIcon },
  { text: 'Small Business', href: '/small-business', icon: StarIcon },
  { text: 'Wealth Management', href: '/wealth-management', icon: ChecklistIcon },
  { text: 'Business & Institutions', href: '/business-and-institutions', icon: ChecklistIcon },
  { text: 'About Us', href: '/about', icon: ChecklistIcon },
];

interface DrawerAppBarProps {
  width: number;
}

const AppSidebar = ({ width }: DrawerAppBarProps) => {
  return (
    <Drawer
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
          top: ['48px', '56px', '64px'],
          height: 'auto',
          bottom: 0,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List>
        {links.map(({ text, href, icon: Icon }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={href}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppSidebar;
