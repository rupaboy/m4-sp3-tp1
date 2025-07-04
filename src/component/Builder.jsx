import TShirts from './particle/builder/TShirts'
import tShirts from '../utils/tShirts.json'
import Button from './particle/Button'
import ButtonTab from './particle/ButtonTab'
import { useState } from "react"

const Builder = () => {

console.log(tShirts)

  const [isTShirtMale, setIsTShirtMale] = useState(false)
  const [tShirtColor, setTShirtColor] = useState(0)
  const [tShirtSize, setTShirtSize] = useState(0)

const previousColor = () => {
    setTShirtColor(prev => prev === 0 ? tShirts.color.length - 1 : prev - 1);
};

const nextColor = () => {
    setTShirtColor(prev => prev === tShirts.color.length - 1 ? 0 : prev + 1);
};

  return (
    
          <div className='pt-5 grid h-full justify-center'>
              




              
                    <Button
                    buttonText='<' action={previousColor}
                    width='w-10'/>
                    <Button
                    buttonText={tShirts.color[tShirtColor].name}/>
                    <Button
                    buttonText='>' action={nextColor}
                    width='w-10'/>
              

                
  
                <TShirts className=''
                  isTShirtMale={isTShirtMale}
                  tShirtColor={tShirts.color[tShirtColor].hex}
                  />


          </div>

        
  )
}

export default Builder