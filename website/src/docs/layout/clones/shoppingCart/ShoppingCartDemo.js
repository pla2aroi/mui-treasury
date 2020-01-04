import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import CreditCard from '@material-ui/icons/CreditCard';
import {
  Root,
  Header,
  Content,
  Footer,
  InsetSidebar,
  InsetContainer,
  ConfigGenerator,
} from '@mui-treasury/layout';
import {
  dailyShoppingTheme,
  DailyHeader,
  DailyCart,
  DailyCheckout,
  DailySummary,
} from '@mui-treasury/mockup/brands/dailyShopping';

const useStyles = makeStyles(({ breakpoints }) => ({
  header: {
    backgroundColor: '#ffffff',
  },
  toolbar: {},
  sidebarBody: {
    padding: '24px 0 40px 24px',
  },
  sidebarPaper: {
    maxWidth: 400,
    padding: 16,
    background: 'none',
    boxShadow: 'none',
  },
  container: {
    minHeight: 0,
  },
  insetContainer: {
    height: '100%',
  },
  content: {
    overflow: 'auto',
  },
  footer: {
    padding: '16px 0',
    border: 'unset',
    position: 'relative',
    '&:before': {
      content: '" "',
      position: 'absolute',
      width: '100%',
      height: 24,
      top: 0,
      left: 0,
      transform: 'translateY(-50%)',
      background: 'linear-gradient(to top, #ffffff 60%, transparent)',
    },
    [breakpoints.only('sm')]: {
      paddingRight: 64,
    },
    [breakpoints.up('md')]: {
      paddingBottom: 40,
    },
  },
  fab: {
    position: 'fixed',
    bottom: 16,
    right: 16,
    color: '#2E3B4D',
    '& svg': {
      fontSize: 32,
      color: '#fff',
    },
    zIndex: 1000,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    [breakpoints.up('sm')]: {
      bottom: 40,
    },
    [breakpoints.up('md')]: {
      transform: 'scale(0)',
    },
  },
}));

const config = ConfigGenerator({ addOnsIncluded: true });
config.header.setPosition('relative');
config.setPrimarySidebarToInset();
config.primarySidebar.setAnchor('right');
config.primarySidebar.setWidth('33%');
config.primarySidebar.setInsetProps({
  position: 'absolute',
  drawerWidth: '88%',
  drawerAnchor: 'right',
});
config.secondarySidebar.setAnchor('left');

const ShoppingCartDemo = () => {
  const styles = useStyles();
  return (
    <Box
      height={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      overflow={'hidden'}
    >
      <Root theme={dailyShoppingTheme} config={config.get()}>
        {({ setOpened }) => (
          <>
            <CssBaseline />
            <Fab
              className={styles.fab}
              color={'primary'}
              onClick={() => setOpened(true)}
            >
              <CreditCard />
            </Fab>
            <Header className={styles.header}>
              <Container>
                <DailyHeader />
              </Container>
            </Header>
            <Container className={styles.container}>
              <InsetContainer className={styles.insetContainer}>
                <Content className={styles.content}>
                  <DailyCart />
                </Content>
                <InsetSidebar
                  BodyProps={{ className: styles.sidebarBody }}
                  PaperProps={{ classes: { root: styles.sidebarPaper } }}
                >
                  <DailyCheckout />
                </InsetSidebar>
              </InsetContainer>
            </Container>
            <Container>
              <Footer className={styles.footer}>
                <DailySummary />
              </Footer>
            </Container>
          </>
        )}
      </Root>
    </Box>
  );
};

// hide-start
ShoppingCartDemo.metadata = {
  title: 'Shopping Cart',
  path: 'clones/shoppingCart',
  files: [],
  relates: [],
};
// hide-end
export default ShoppingCartDemo;