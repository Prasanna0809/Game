const achievements = [
  {
    id: "first_game",
    title: "First Game Played",
    description: "Play any game for the first time.",
    icon: "🎮"
  },
  {
    id: "snake_10",
    title: "Snake Rookie",
    description: "Score 10 points in Snake.",
    icon: "🐍"
  },
  {
    id: "memory_win",
    title: "Memory Master",
    description: "Complete Memory Match.",
    icon: "🧠"
  },
  {
    id: "breakout_level_3",
    title: "Brick Breaker",
    description: "Reach level 3 in Breakout.",
    icon: "🧱"
  },
  {
    id: "sudoku_solved",
    title: "Puzzle Solver",
    description: "Solve Sudoku.",
    icon: "🧩"
  }
];

function unlockAchievement(id) {
  let unlocked = JSON.parse(localStorage.getItem("arcadeAchievements")) || [];

  if (!unlocked.includes(id)) {
    unlocked.push(id);
    localStorage.setItem("arcadeAchievements", JSON.stringify(unlocked));
    alert("🏆 Achievement Unlocked!");
  }
}

function getUnlockedAchievements() {
  return JSON.parse(localStorage.getItem("arcadeAchievements")) || [];
}