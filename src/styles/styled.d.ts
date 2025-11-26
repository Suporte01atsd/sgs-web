import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            text: string;
            primary: string;
            secondary: string;
            border: string;
            cardBackground: string;
            error: string;
            success: string;
        };
        spacing: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        borderRadius: string;
        shadows: {
            sm: string;
            md: string;
        };
    }
}