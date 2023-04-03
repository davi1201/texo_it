import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Flex,
} from '@mantine/core';


import { GoogleButton } from '../../components/ui/socialButtons';
import { signIn } from 'next-auth/react';

export default function Login(props: PaperProps) {
  const [type, toggle] = useToggle(['login', 'registrar']);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  return (
    <Flex align='center' justify='center' mt={100}>
        <Paper radius="md" style={{width: 350}} p="xl" withBorder {...props}>
        <Text size="lg" align='center' weight={500}>
            Bem vindo, {type} com
        </Text>

        <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>        
        </Group>

        <Divider label="Ou continue com email" labelPosition="center" my="lg" />

        <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
            {type === 'register' && (
                <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
                />
            )}

            <TextInput
                required
                label="Email"
                placeholder="hello@mantine.dev"
                value={form.values.email}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                error={form.errors.email && 'Invalid email'}
                radius="md"
            />

            <PasswordInput
                required
                label="Senha"
                placeholder="Sua senha"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                error={form.errors.password && 'A senha deve conter no mínimo 6 caracteres'}
                radius="md"
            />

            {type === 'register' && (
                <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                />
            )}
            </Stack>

            <Group position="apart" mt="xl">
            <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => toggle()}
                size="xs"
            >
                {type === 'register'
                ? 'Já possui conta? Login'
                : "Você possui conta? Registrar"}
            </Anchor>
            <Button type="submit" radius="xl" onClick={() => signIn('credentials')}>
                {upperFirst(type)}
            </Button>
            </Group>
        </form>
        </Paper>

    </Flex>
  );
}