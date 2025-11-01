import { render, screen, } from '@testing-library/react'
import { ButtonMinAddToCar } from './index'

describe('ButtonMinAddToCar', () => {
    it('should render the button', () => {
        render(<ButtonMinAddToCar />)
        expect(screen.getByRole('button')).toBeDefined()
    })

})