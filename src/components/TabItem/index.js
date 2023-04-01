// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemList, isTabSectionChange, isActive} = props
  const {displayText, tabId} = tabItemList
  const buttonStyle = isActive ? 'btn-active btn-item' : 'btn-item'
  const onClickChangeTab = () => {
    isTabSectionChange(tabId)
  }
  return (
    <li className="list" onClick={onClickChangeTab}>
      <button type="button" className={buttonStyle}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
