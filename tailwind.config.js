/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                grey: {
                    deeplilac: '#eff0f1',
                },
                acadia: '#0f0f0f',
                shadow: 'rgba(0, 0, 0, 0.4); ',
                shadow2: 'rgba(30, 22, 35, 0.8)',
                shadow3: 'rgb(15 14 16 / 83%);',
            },
        },
    },
    plugins: [],
};
