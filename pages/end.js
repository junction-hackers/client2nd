import Layout from '../components/MyLayout.js'
import {useRef} from 'react'

export default function Map() {
const inputEl = useRef(null);

return (
  <div style={{width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'}}>
     <p>Done</p>
     <style jsx>{`
     p {
       margin: 0;
       font-size: 64px;
       color: #c6c9cc;
       font-family: "Helvetica Neue","Open sans",Helvetica,Arial,"Hiragino Kaku Gothic Pro","ヒラギノ角ゴ ProN W3",Meiryo,Osaka,"メイリオ","MS PGothic","ＭＳ Ｐゴシック",sans-serif;
     }
     `}</style>
  </div>
)
}
