import { cleanup, createEvent, fireEvent, render, screen, } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonMinAddToCar } from './index'
import '@testing-library/jest-dom'

describe('ButtonMinAddToCar', () => {

    beforeEach(() => {
        return render(<ButtonMinAddToCar />)
    })

    afterEach(() => { cleanup() })

    it('should render the button', () => {
        expect(screen.getByRole('button')).toBeDefined()
    })

    it('should stop event propagation on click', async () => {
        const myEvent = createEvent.click(screen.getByRole('button'));

        myEvent.preventDefault = jest.fn();
        myEvent.stopPropagation = jest.fn();

        fireEvent(screen.getByRole('button'), myEvent)

        expect(myEvent.preventDefault).toHaveBeenCalled()
        expect(myEvent.stopPropagation).toHaveBeenCalled()

    })

    it('should render the plusIcon', () => {
        const button = screen.getByRole('button')
        expect(button.querySelector('svg')).toBeInTheDocument()
    })

    it('should be visible for users', () => {
        expect(screen.getByRole('button')).toBeVisible()
    })

    it('should call the onClick function when the button is clicked', async () => {
        const user = userEvent.setup()
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { })

        const button = screen.getByRole('button')
        await user.click(button)

        screen.debug(button)

        expect(consoleSpy).toHaveBeenCalledWith('Adicionar ao carrinho')
    })

    describe("disabled button", () => {
        beforeEach(() => {
            cleanup()
        })

        it('should be disabled button', async () => {
            render(<ButtonMinAddToCar disabled />)
            const button = screen.getByRole('button')
            expect(button).toBeDisabled()
        })
    })
})