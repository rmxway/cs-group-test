import { CreateTask } from '@/components';
import { Container } from '@/components/Layout';
import TasksList from '@/components/TasksList';
import { ReduxProvider } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ReduxProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Container $pt>
					<CreateTask />
					<TasksList />
				</Container>
			</ThemeProvider>
		</ReduxProvider>
	);
}

export default App;
