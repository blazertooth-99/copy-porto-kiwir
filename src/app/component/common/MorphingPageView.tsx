import MorphingPage from "./MorphingPage";
const MorphingPageView = () => {
  return (
    <MorphingPage>
      <h1 className="text-4xl font-bold text-white mb-4">
        Welcome to the Gradient Page
      </h1>
      <p className="text-white">
        This content appears on top of the morphing gradient background.
      </p>
      <button className="mt-4 px-4 py-2 bg-white text-purple-600 rounded hover:bg-purple-100 transition-colors">
        Click me!
      </button>
    </MorphingPage>
  );
};
export default MorphingPageView;
