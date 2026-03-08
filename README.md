# React_Framework

## Create React Project Using Vite
1.  Create an empty folder named React_Folder.
2.	Open the command prompt in that folder.
3.	Run the following command to create a project:
   ```
   npm create vite@latest project_name
   ```
5.	Select the following options:
•	Framework: React
•	Variant: JavaScript
6.	Go to the project folder:
   ```
   cd project_name
   ```
8.	   Install required modules:
  ```
      npm install
```
10.	Run the project:
    ```
      npm run dev
    ```
12.	Open the local host link in your browser:
    ```
      http://localhost:5173/
    ```

## React Project Folder Structure
       my-app/

node_modules : Contains all installed dependencies.
public/ :Stores static assets.
src/ :Contains components, pages, styles, hooks, and logic.
static/ : Contains static files like images and fonts.
App.jsx : Root component of the application.
main.jsx : Entry point for React rendering.
index.html : Main root HTML file.
package.json : Lists project dependencies, scripts, and metadata.
vite.config.js : Configuration file for Vite.
README.md : Documentation for the project.

## React Components
•	Components are UI building blocks.
•	A component is a JavaScript function that returns JSX.
• JSX = HTML + JavaScript
### Example:
```
function Function_name(){
  return(
    <h2>Hello React</h2>
  )
}
export default Function_name
```
### Import component in App.jsx:
```
import Function_name from './folder_name/file_name.jsx'

function App(){
  return(
    <div>
      <Function_name/>
      <Function_name/>
    </div>
  )
}

export default App
```

## JSX Rules
Adjacent JSX elements must be wrapped in a single parent element.
### Wrappers
1.	div
  ```
<div></div>
```
2.	Fragment
```
<React.Fragment></React.Fragment>
```
Short syntax:
```
<>
</>
```
4.	Array :Elements must be separated by commas.
```
[]
```

## Comments in JSX
JSX comments are written as:
{/* JSX Comment */}

## CSS in React
Inline CSS
Inline CSS is applied using the style prop.
### Syntax:
```
<selector style={{ property1:'value1', property2:'value2' }}></selector>
```
### Example:
```
<h2 style={{color:'red', fontFamily:'cursive', textAlign:'center'}}>App</h2>
```


## External CSS
### Folder structure:
src
 ├── css_folder
      └── css_file.css
### Import CSS in App.jsx:
```
import './folder_name/file_name.css'

Class Selector in JSX
Use className instead of class.
className="class_name"
```

## Variables in React
### Example:
```
function App() {
  const name ="ramakant"

  return (
    <div>
      <h3>App</h3>
      <p>num : {100}</p>
      <p>name : {name}</p>
    </div>
  )
}

export default App
```
## Images in React
### Example:
```
function App() {

  const img1 ="https://images.unsplash.com/photo.jpg"
  const imgheight1 = 100

  return (
    <div>
      <h3>App</h3>
      <img src={img1} height={imgheight1}/>
    </div>
  )
}

export default App
```

## Event Handlers
 ### Example:
 ```
function App() {

  function welcomeFun(){
    alert("Welcome..!")
  }

  function changeClrToRed(){
    const para1 = document.getElementById("para1")
    para1.style.color="red"
  }

  return(
    <div>
      <h3>App</h3>

      <button onClick={changeClrToRed}>Red</button>

      <p id="para1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <button onClick={welcomeFun}>Click</button>

    </div>
  )
}

export default App
```

## Props (Properties)
Props are used to transfer data from parent component to child component.
Parent → Child
### Example project structure:
src
 ├── child_folder
      ├── child_file1.jsx
      ├── child_file2.jsx
 └── App.jsx

### App.jsx:
```
import child_file1 from './child_folder/child_file1'
import child_file2 from './child_folder/child_file2'

function App(){
  return(
    <>
      <h3>App</h3>
      <child_file1/>
      <child_file2/>
    </>
  )
}

export default App
```

## Context (Advanced Data Sharing)
Context allows data transfer from grandparent directly to child components.
## Example:
```
import { createContext } from "react"

const MyContext = createContext()

function App(){

  const name = "Ramakant"

  return(
    <div>
      <h3>App</h3>

      <MyContext value={name}>
        <Child/>
      </MyContext>

    </div>
  )
}

export default App
export {MyContext}
```

## Import and Export
### Default Export
Used only once.
### Export:
export default name
### Import:
```
import name from "./folder/file"
```
### Named Export
Used multiple times.
### Export:
```
export {name, city, age}
```
### Import:
```
import {name, city, age} from "./folder/file"
```

## useState Hook
Hooks are JavaScript functions used in React.
State
A state variable stores dynamic data.
### Syntax :
```
const [state, setState] = useState(initialValue)
```
### Example:
```
import { useState } from "react"

function Child(){

  const [num, setNum] = useState(166)

  function inc(){
    setNum(num + 1)
  }

  return(
    <div>
      <h3>Child Component</h3>
      <p>Num: {num}</p>
      <button onClick={inc}>Increment</button>
    </div>
  )
}

export default Child
```

 ## React Routing
### Install React Router:
```
npm install react-router-dom
```
### Example project structure:
src
 ├── Home.jsx
 ├── About.jsx
 ├── Contact.jsx
 ├── Header.jsx
 └── App.jsx

### Example:
```
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App(){

  return(
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </BrowserRouter>
  )

}

export default App
```

## Component Life Cycle
### Mounting
First time rendering.
### Updating
Re-rendering when state or props change.
### Unmounting
Component removed from DOM.

## useEffect Hook
### Syntax:
```
useEffect(setupFunction, dependencyArray)
Types
Mounting
useEffect(()=>{ }, []) or
Mounting + Updating
useEffect(()=>{ }, [dependency]) or
Every Rendering
useEffect(()=>{ })
```
### Example:
```
import { useState, useEffect } from "react"

function App(){

  const [count, setCount] = useState(0)

  useEffect(()=>{ alert("Welcome..!") }, [])

  useEffect(()=>{ alert("Counter Reset..!") }, [count])

  useEffect(()=>{ alert("Hello..!") })

  return(
    <div>
      <h3>Counter</h3>
      <h3>Count : {count}</h3>

      <button onClick={()=>{setCount(count+1)}}>++</button>
    </div>
  )

}

export default App
```
## CRUD Operations
You can perform CRUD operations in React using Axios:
HTTP Method	Action	Example
GET	Fetch data	axios.get('/users')
POST	Add data	axios.post('/users', data)
PUT	Update data	axios.put('/users/1', data)
DELETE	Delete data	axios.delete('/users/1')

**Ramakant Chaudhari**
