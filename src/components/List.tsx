import React from 'react'
interface IProps {
  //array of objects
  people: {
    name: string,
    age: number,
    url: string,
    note?: string // optional, either a string or undefined: hover it
  }[]
}

// const List = ({people}: IProps) => {.. same as below

const List: React.FC<IProps> = ({ people }) => {

  // return an array of JSX element 
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img src={person.url} alt="" className="List-img" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-none">{person.note}</p>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List;