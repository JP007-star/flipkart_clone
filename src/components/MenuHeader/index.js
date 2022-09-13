import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions/category.action'
import './style.css'

export default function MenuHeader() {

   //state constants declaration
   const category = useSelector(state => state.category)
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])
  


  const renderCategories = (categories) => {
    let component = []
    for (let category of categories) {
        component.push(
            <li>
                {category.parentId ? <a href={category.slug}>{category.name}</a> : <span>{category.name}</span>}
                {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
            </li>
        );
    }
    return component;
}
  return (
    <div className="menu-header">
      <ul>
         {category.categories.length > 0 ? renderCategories(category.categories) :null}
      </ul>
    </div>
  )
}

