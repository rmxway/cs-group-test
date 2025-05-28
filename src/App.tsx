import { ReduxProvider } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ReduxProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<h1>Vite + React + ReduxToolkit</h1>
			</ThemeProvider>
		</ReduxProvider>
	);
}

export default App;
