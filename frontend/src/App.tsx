import { Header } from './components/Header';
import { Input } from './components/Input';
import { ListOfTokens } from './components/ListOfTokens.ts';
import { CryptoProvider } from './hooks/useCrypto';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
	return (
		<CryptoProvider>
			<div className='full-body'>
				<div className="content">
					<Header />
					<Input />
					<ListOfTokens />
					<GlobalStyle />
				</div>
			</div>
		</CryptoProvider>
	);
}

export default App;
