import Gallery from './components/Gallery';
import { galleryItems, galleryConfig } from './data/galleryData';
import './App.css';

function App() {
  return (
    <main className="app">
      <Gallery 
        items={galleryItems}
        title={galleryConfig.title}
        subtitle={galleryConfig.subtitle}
      />
    </main>
  );
}

export default App;
