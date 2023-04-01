// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="app-logo" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
