import { WorkWithTask, TasksList, CreateTask } from '@/components';
import { Container } from '@/components/Layout';

import { ReduxProvider } from '@/store/provider';
import { defaultTheme, GlobalStyles } from '@/theme';
import { ThemeProvider } from 'styled-components';

function App() {
	return (
		<ReduxProvider>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Container $pt>
					<WorkWithTask />
                    <CreateTask />
					<TasksList />
				</Container>
			</ThemeProvider>
		</ReduxProvider>
	);
}

export default App;
