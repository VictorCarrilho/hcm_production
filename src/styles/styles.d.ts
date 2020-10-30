import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background_container: string;
            background: string;

            title_color: string;

            primary: string;
            secundary: string;


            text: string;

            background_inverse: string;
            text_inverse: string;

            colorBlue: string;
            colorRed: string;
            colorYellow: string;
            colorGray: string;
            colorGreen: string;
        }
    }
}