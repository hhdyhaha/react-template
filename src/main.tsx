import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from '@/routes'
import { adjustRootValue } from '@/utils/adjust-font-size'
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'

const px2rem = px2remTransformer({
  rootValue: 75,
})

adjustRootValue()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleProvider transformers={[px2rem]}>
      <RouterProvider router={router} />
    </StyleProvider>
  </StrictMode>,
)
