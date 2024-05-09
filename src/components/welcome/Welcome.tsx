type AppName = {
  appName?: string
}

function Welcome(props: AppName) {
  return (
    <div>
      <h2>Welcome to the {props.appName}</h2>
    </div>
  )
}

export default Welcome
