export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-fadeIn">
          Coming
          <span className="inline-block animate-pulse ml-4">Soon</span>
        </h1>
        <p className="text-lg text-gray-400 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Something awesome is in the works!
        </p>
      </div>
    </div>
  );
}
