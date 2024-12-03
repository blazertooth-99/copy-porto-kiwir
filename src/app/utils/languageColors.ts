export const getLanguageColor = (language: string): string => {
  const colors: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Rust: '#dea584',
    PHP: '#4F5D95',
    HTML: '#e34c26',
    CSS: '#563d7c',
  };

  return colors[language] || '#808080'; // Default to gray if language not found
};
