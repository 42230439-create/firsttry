import { Header } from './components/Header';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { menuData } from './data/menu';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cloud-dancer relative overflow-hidden">
      {/* Background Blobs for Glassmorphism Context */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-sage opacity-20 blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-clay opacity-20 blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-sage opacity-15 blur-3xl mix-blend-multiply"></div>
      </div>

      <Header />
      
      <main className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-12 py-24 md:py-32 flex flex-col gap-24">
        <MenuSection title="Appetizers" items={menuData.appetizers} />
        <MenuSection title="Main Courses" items={menuData.mainCourses} />
        <MenuSection title="Desserts" items={menuData.desserts} />
        <MenuSection title="Drinks" items={menuData.drinks} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
