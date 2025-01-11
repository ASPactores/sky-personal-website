/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	screens: {
  		desktop: '1920px'
  	},
  	colors: {
  		'primary': {
  			'50': '#f0f7fe',
  			'100': '#deecfb',
  			'200': '#c4e0f9',
  			'300': '#9cccf4',
  			'400': '#6dafed',
  			'500': '#4b90e6',
  			'600': '#3674da',
  			'700': '#2d60c8',
  			'800': '#2a4fa3',
  			'900': '#274481',
  			'950': '#0f172a'
  		},
  		'secondary': {
  			'50': '#effafc',
  			'100': '#d7f0f6',
  			'200': '#b4e1ed',
  			'300': '#80cbe0',
  			'400': '#45abcb',
  			'500': '#298fb1',
  			'600': '#257495',
  			'700': '#245e7a',
  			'800': '#254f65',
  			'900': '#234356',
  			'950': '#122a39'
  		},
  		'accent': {
  			'50': '#eafff8',
  			'100': '#ccffed',
  			'200': '#91fcdc',
  			'300': '#5ff6d2',
  			'400': '#20e7be',
  			'500': '#00cea9',
  			'600': '#00a88b',
  			'700': '#008673',
  			'800': '#006a5c',
  			'900': '#00574d',
  			'950': '#00312d'
  		}
  	},
  	'fontSize': {
  		'xs': '0.6875rem',
  		'sm': '0.875rem',
  		'base': '1rem',
  		'lg': '1.1875rem',
  		'xl': '1.4375rem',
  		'2xl': '1.75rem',
  		'3xl': '2.0625rem',
  		'4xl': '2.5rem',
  		'5xl': '3rem',
  		'6xl': '4rem'
  	},
  	'fontFamily': {
  		'inter': 'Inter'
  	},
  	'borderRadius': {
  		'0': '0rem',
  		'1': '0.125rem',
  		'2': '0.1875rem',
  		'3': '0.25rem',
  		'4': '0.3125rem',
  		'5': '0.375rem',
  		'6': '0.5rem',
  		'7': '0.625rem',
  		'8': '0.75rem',
  		'9': '1rem',
  		'10': '1.5rem',
  		'11': '1.875rem',
  		'12': '2.5rem',
  		'13': '3rem',
  		'14': '3.125rem',
  		'15': '62.4375rem',
  		'full': '9999px'
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      dropShadow: {
        'primary': '0px 0px 6px rgba(145, 252, 220, 0.3)',
        'primary-active': '0px 0px 8px rgba(145, 252, 220, 0.5)',
      },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}