import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
  ActionIcon,
  useMantineColorScheme,
  Flex,
} from '@mantine/core';
import { MainLinks } from '../components/_navlinks';
import { User } from '../components/_user';
import { IconSun } from '@tabler/icons-react';
import { IconMoonStars } from '@tabler/icons-react';
import { getSession, GetSessionParams, signOut } from 'next-auth/react';

function AppShellDemo({ children }: any) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <Navbar.Section grow mt="xs" onClick={() => setOpened((o) => !o)}>
          <MainLinks  />
        </Navbar.Section>
        <Navbar.Section>
          <User />
        </Navbar.Section>
      </Navbar>
      }      
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' , height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Golden Raspberry Awards</Text>            
            </div>
            <Flex align='center'>
              <ActionIcon
                  variant="outline"
                  color={dark ? 'yellow' : 'blue'}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
                </ActionIcon>

                <Button onClick={() => signOut()} ml={20} variant='default'> Sair </Button>
            </Flex>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}

export default AppShellDemo;