import React, { useState } from 'react'
import { IState as Props } from '../App'

interface IProps {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = () => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    age: "",
    note: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      // if e.target.name is === to age it will be age: e.target.value and it is
      // what we add on the original object (input)
      // test = {a: "a", b:"b"}
      // {...test, b:"c"} ----------> {a: 'a', b: 'c'}
      // {...test, c:"c"} ----------> {a: 'a', b: 'b', c: 'c'}
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {

  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        // to know the type of the event you can write the function inline
        // and hover/copy the event type, because TS knows by infering it
        // oncChange={(e)=>{} } ----> e: React.ChangeEvent<HTMLInputElement>
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="img"

      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button
        className="AddToList-btn"
        onClick={(handleClick)}
      >
        Add To List
      </button>
    </div>
  )
}

export default AddToList
