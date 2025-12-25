import Gallery from './components/Gallery';
import { galleryItems, galleryConfig, imageStripItems } from './data/galleryData';
import './App.css';

function App() {
  return (
    <main className="app">
      <Gallery
        items={galleryItems}
        title={galleryConfig.title}
        subtitle={galleryConfig.subtitle}
        stripItems={imageStripItems}
      />
    </main>
  );
}

export default App;
