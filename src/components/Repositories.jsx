import RepoCard from "./RepoCard";

function Repositories({handleStarPortfolio, handleStarTodo, handleStarDotfiles}) {

    return (
      <main className="grid grid-cols-3 gap-8 px-20 pt-8">
        <RepoCard name="portfolio" description="My personal portfolio website." language="JavaScript" commits={42} statefunc={handleStarPortfolio} statename="portfolio" />

        <RepoCard name="todo-api" description="A small REST API for a to-do list." language="Java" commits={31} statefunc={handleStarTodo} statename="todo" />

        <RepoCard name="dotfiles" description="My terminal and editor settings." language="Shell" commits={12} statefunc={handleStarDotfiles} statename="dotfiles" />
      </main>

    );

}

export default Repositories