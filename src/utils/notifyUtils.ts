import { MantineTheme } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

type notificationType = 'success' | 'error' | 'warning' | 'info';

export const notifyUtils = (() => {
    return {
        show: (type: notificationType, message: string, closeTime = 5000) => {
            const getColor = (theme: MantineTheme) => {
                switch (type) {
                    case 'success':
                        return theme.colors.green
                    case 'error':
                        return theme.colors.red;
                    case 'warning':
                        return theme.colors.warning[0];
                    default:
                        return theme.colors.blue[0];
                }
            };
            return showNotification({
                radius: 10,
                message: message,
                autoClose: closeTime,
                styles: (theme: MantineTheme) => ({
                    root: {
                        backgroundColor: getColor(theme),
                        borderColor: getColor(theme),
                        '&::before': {
                            backgroundColor: getColor(theme),
                        },
                    },
                }),
            });
        },
    };
})();
