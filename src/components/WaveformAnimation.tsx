const WaveformAnimation = () => {
  const bars = Array.from({ length: 5 });

  return (
    <div className="flex items-center justify-center gap-1.5 h-16">
      {bars.map((_, i) => (
        <div
          key={i}
          className="w-1.5 bg-primary rounded-full animate-wave"
          style={{
            animationDelay: `${i * 0.1}s`,
            height: "100%",
          }}
        />
      ))}
    </div>
  );
};

export default WaveformAnimation;
