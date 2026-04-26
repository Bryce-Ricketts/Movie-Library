function App() {
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext value={theme}>
            <Page />
        </ThemeContext>
    );
}