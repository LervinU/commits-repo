import './App.css';
import CommitList from './Components/Commit/CommitList/CommitList';
import TopBar from './Components/Navbar/TopBar/TopBar';
import RepoTitle from './Components/Repo/RepoTitle/RepoTitle';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <TopBar name="Watch your commits" />
      <div className="container">
        <RepoTitle />
        <CommitList />
        <Footer />
      </div>
    </>
  );
}

export default App;
