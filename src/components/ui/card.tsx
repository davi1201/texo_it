import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
  DefaultMantineColor,
} from '@mantine/core';
import { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import { Categories } from '../../types';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));



interface CardProps {
  image: string;
  title: string;
  category: Categories;
  description: string;
  quantity: string
}

export default function CardItem({ 
    image, 
    title, 
    description, 
    category, 
    quantity
}: CardProps) {
  const { classes, theme } = useStyles();
  let categoryColor: DefaultMantineColor  = 'blue';
  const [value, setValue] = useState<number | null>(0);

  switch (category) {
    case 'Acompanhamentos':
        categoryColor = 'green'
        break;
    
    case 'Bebidas':
        categoryColor = 'red'
        break;
    case 'Principal':
        categoryColor = 'blue'
        break;

    case 'Sobremesas':
        categoryColor = 'yellow'
        break;
        
    case 'Saladas':
        categoryColor = 'purple'
        break;
    
    case 'Entradas':
        categoryColor = 'orange'
        break;  
    default:
        categoryColor = 'blue'
        break;
  }

  return (
    <Card withBorder radius="md" p="md" mb={30} className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
          <Badge size="sm" color={categoryColor}>{category}</Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          {quantity}
        </Text>
      </Card.Section>

      <Group mt="xs" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
            <ReactStars
                count={5}
                onChange={(newValue: any) => setValue(newValue)}
                size={28}
                value={value}
                emptyIcon={<i className="fa fa-start"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ff9800"
            />
        </div>
        {/* <Button radius="md" style={{ flex: 1 }}>
          Avaliar
        </Button> */}
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}