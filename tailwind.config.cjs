module.exports = {
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                'eco-blue': '#2F82FF',
                'eco-red': '#9F5D70',
                'eco-green': '#43C0B3',
                'eco-indigo': '#5D609F',
                'eco-yellow': '#EAAF47',
                'eco-gray': '#4C7589',
                'eco-purple': '#65499F',
                'eco-brown': '#383838',
                'eco-gold': '#efd688',
                'eco-honey': '#FFCB05',
                'carousel': '#EDEFFF',
            },
            boxShadow: {
                'brand': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;;',
            }
        }
    },
    // more options here
    daisyui: {
        themes: [
            {
                'eco': {
                    'primary' : '#a991f7',           /* Primary color */
                    'primary-focus' : '#eeeeee',     /* Primary color - focused */
                    'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */
         
                    'secondary' : '#f6d860',         /* Secondary color */
                    'secondary-focus' : '#f3cc30',   /* Secondary color - focused */
                    'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */
         
                    'accent' : '#37cdbe',            /* Accent color */
                    'accent-focus' : '#2aa79b',      /* Accent color - focused */
                    'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */
         
                    'neutral' : '#3d4451',           /* Neutral color */
                    'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
                    'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */
         
                    'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
                    'base-200' : '#f9fafb',          /* Base color, a little darker */
                    'base-300' : '#d1d5db',          /* Base color, even more darker */
                    // 'base-content' : '1f2937',      /* Foreground content color to use on base color */
         
                    'info' : '#2094f3',              /* Info */
                    'success' : '#009485',           /* Success */
                    'warning' : '#ff9900',           /* Warning */
                    'error' : '#ff5724',             /* Error */
                },
            },
        ]
    },
    plugins: [
        require('daisyui'),
    ],
};