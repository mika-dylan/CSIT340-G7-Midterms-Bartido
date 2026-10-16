import { useState } from "react";
import Navbar from "./components/Navbar";
// import Bio from "./components/Bio";
// import StatCard from "./components/StatCard";
import RepoCard from "./components/RepoCard";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar / > 

      <Profile followers={followers} rate={rate} handleFollow={handleFollow} handleAddRate={handleAddRate} handleReset={handleReset} />

      <main className="grid grid-cols-3 gap-8 px-20 pt-8">
        <RepoCard name="portfolio" description="My personal portfolio website." language="JavaScript" commits={42} statefunc={handleStarPortfolio} statename="portfolio" />

        <RepoCard name="todo-api" description="A small REST API for a to-do list." language="Java" commits={31} statefunc={handleStarTodo} statename="todo" />

        <RepoCard name="dotfiles" description="My terminal and editor settings." language="Shell" commits={12} statefunc={handleStarDotfiles} statename="dotfiles" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
