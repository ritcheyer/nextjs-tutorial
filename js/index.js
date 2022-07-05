const app=document.getElementById('app');

function createTitle(title) {
  return title ? title : 'NextJS + React Tutorial';
}

function Header(props) {
  return <h1>{createTitle(props.title)}</h1>;
}

function HomePage() {
  const [likes, setLikes] = React.useState(0);
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div class="tds--vertical-rhythm">
      <Header title='Develop. Preview. Ship. 🚀' />
      <ul class="tds-list tds-list--unordered">
        {names.map((name) => (
          <li class="tds-list-item" key={name}>{name}</li>
        ))}
      </ul>

      <button class="tds-btn tds-btn--primary tds-spacer-2x" onClick={handleClick}>Like ({likes})</button>
    </div>
  )
}

ReactDOM.render(<HomePage />, app);