import React from 'react';
import {  
    IconMovie,
    IconDashboard
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'


interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  route: string;
}

function MainLink({ icon, color, label, route }: MainLinkProps) {
    const router = useRouter(); 
    return (
        <div className={router.query.category === route ? styles.active : ''}>
            <UnstyledButton
            onClick={() => router.push(route)}
            sx={(theme) => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

                '&:hover': {
                backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            })}
            >
            <Group>
                <ThemeIcon color={color} variant="light">
                {icon}
                </ThemeIcon>

                <Text size="sm">{label}</Text>
            </Group>
            </UnstyledButton>
        </div>
    );
}

const data = [
  { icon: <IconDashboard size="1rem" />, color: 'blue', label: 'Dasboard', route: '/' },
  { icon: <IconMovie size="1rem" />, color: 'orange', label: 'Filmes', route: '/movie'},
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}