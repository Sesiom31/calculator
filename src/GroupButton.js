import React from 'react'
import Button from './Button'

function GroupButton() {
  return (
    <div className='group-btn'>
      <Button id={'clear'} value={'AC'}  />
      <Button id={'parentesis-left'} value={'('}  />
      <Button id={'parentesis-right'} value={')'}  />
      <Button id={'multiply'} value={'*'}  />
      <Button id={'seven'} value={'7'}  />
      <Button id={'eight'} value={'8'}  />
      <Button id={'nine'} value={'9'}  />
      <Button id={'divide'} value={'/'}  />
      <Button id={'four'} value={'4'}  />
      <Button id={'five'} value={'5'}  />
      <Button id={'six'} value={'6'}  />
      <Button id={'subtract'} value={'-'}  />
      <Button id={'one'} value={'1'}  />
      <Button id={'two'} value={'2'}  />
      <Button id={'three'} value={'3'}  />
      <Button id={'add'} value={'+'}  />
      <Button id={'zero'} value={'0'}  />
      <Button id={'decimal'} value={'.'}  />
      <Button id={'delete'} value={'DEL'}  />
      <Button id={'equals'} value={'='}  />
    </div>
  )
}

export default GroupButton