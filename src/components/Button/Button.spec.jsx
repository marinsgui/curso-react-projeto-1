import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
    it('should render the button with the text "Load more"', () => {
        render(<Button text='Load more' />);

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('shouls call function on button click', () => {
        const fn = jest.fn();
        render(<Button text='Load more' onClick={fn} />);

        const button = screen.getByRole('button', { name: /Load more/i });
        fireEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    })
})