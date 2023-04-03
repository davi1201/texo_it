import { Button, ButtonProps, Group } from '@mantine/core';
import { signIn } from 'next-auth/react';
import { GoogleIcon } from './icons/googleIcon';

export function GoogleButton(props: ButtonProps) {
  return <Button leftIcon={<GoogleIcon />} onClick={() => signIn('google')} variant="default" color="gray" {...props} />;
}

// export function FacebookButton(props: ButtonProps) {
//   return (
//     <Button
//       leftIcon={<FacebookIcon />}
//       sx={(theme) => ({
//         backgroundColor: '#4267B2',
//         color: '#fff',
//         '&:not([data-disabled]):hover': {
//           backgroundColor: theme.fn.darken('#4267B2', 0.1),
//         },
//       })}
//       {...props}
//     />
//   );
// }

export function SocialButtons() {
  return (
    <Group position="center" sx={{ padding: 15 }}>
      <GoogleButton>Continue with Google</GoogleButton>
    </Group>
  );
}