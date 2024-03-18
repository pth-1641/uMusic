import { useFetch } from './hooks';
import { IInstance } from './interfaces/instance.interface';

function App() {
  const { data: instances, isLoading } = useFetch(
    'https://api.invidious.io/instances.json'
  );

  if (isLoading) return 'Loading...';

  return (
    <h1 className="text-3xl font-bold underline">
      {instances.map(([key, instance]: [string, IInstance]) => (
        <div key={key}>{instance.uri}</div>
      ))}
    </h1>
  );
}

export default App;
