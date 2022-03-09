import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import ContentHooks from './components/ContentHooks';
// import Content from './components/Content';

// import NavBarSimple from './components/NavBarSimple';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <NavBarForm />
      <ContentHooks />
      {/* <NavBarSimple /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
    </div>
  );
}

export default App;