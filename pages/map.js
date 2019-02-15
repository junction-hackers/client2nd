import Layout from '../components/MyLayout.js'
import {useRef} from 'react'

export default function Map() {
const inputEl = useRef(null);

  return (
    <Layout>
       <p>This is the about page</p>
       <input id="autocomplete" placeholder="Enter a location" type="text" />
    </Layout>
)
}
