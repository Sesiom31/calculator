import React from 'react'
import Button from './Button'

function GroupButton() {
  return (
    <div className='group-btn'>
      <Button id={'clear'} value={'AC'} type={'reset'} />
      <Button id={'parentesis-left'} value={'('} type={'button'} />
      <Button id={'parentesis-right'} value={')'} type={'button'} />
      <Button id={'multiply'} value={'*'} type={'button'} />
      <Button id={'seven'} value={'7'} type={'button'} />
      <Button id={'eight'} value={'8'} type={'button'} />
      <Button id={'nine'} value={'9'} type={'button'} />
      <Button id={'divide'} value={'/'} type={'button'} />
      <Button id={'four'} value={'4'} type={'button'} />
      <Button id={'five'} value={'5'} type={'button'} />
      <Button id={'six'} value={'6'} type={'button'} />
      <Button id={'subtract'} value={'-'} type={'button'} />
      <Button id={'one'} value={'1'} type={'button'} />
      <Button id={'two'} value={'2'} type={'button'} />
      <Button id={'three'} value={'3'} type={'button'} />
      <Button id={'add'} value={'+'} type={'button'} />
      <Button id={'zero'} value={'0'} type={'button'} />
      <Button id={'decimal'} value={'.'} type={'button'} />
      <Button id={'delete'} value={'DEL'} type={'button'} />
      <Button id={'equals'} value={'='} type={'button'} />
    </div>
  )
}

export default GroupButton