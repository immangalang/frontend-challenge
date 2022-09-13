import Masthead from './components/Masthead';
import Search from './components/Search';
import Squad from './components/Squad';
import Table from './components/Table';
import Tags from './components/Tags';
import jsonData from './data/characters.json';
import type { Character } from './types';

const data: Character[] = jsonData as Character[];

function App() {
  return (
    <div className="bg-[#f0fafe] h-full">
      <Masthead />
      <Squad />
      <Search />
      <Tags />
      <Table />
    </div>
  );
}

export default App;
