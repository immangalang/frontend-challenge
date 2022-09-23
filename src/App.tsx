import Masthead from './components/Masthead';
import Search from './components/Search';
import Squad from './components/Squad';
import Table from './components/Table';
import Tags from './components/Tags';
import AppProvider from './context';
import jsonData from './data/characters.json';
import type { Character } from './types';
import { Toaster } from 'react-hot-toast';

const data: Character[] = jsonData as Character[];

function App() {
  return (
    <AppProvider>
      <div className="bg-[#f0fafe] h-full">
        <Masthead />
        <Squad />
        <Search />
        <Tags />
        <Table />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
          }}
        />
      </div>
    </AppProvider>
  );
}

export default App;
